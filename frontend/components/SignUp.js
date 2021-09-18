import { useMutation } from "@apollo/client";
import gql from "graphql-tag";
import { useForm } from "react-hook-form";

import classes from "../styles/Form.module.scss";
import DisplayError from "./ErrorMessage";

const SIGNUP_MUTATION = gql`
  mutation SIGNUP_MUTATION(
    $name: String!
    $email: String!
    $password: String!
  ) {
    createUser(data: { name: $name, email: $email, password: $password }) {
      id
      name
      email
    }
  }
`;

export default function SignUp() {
  const {
    register,
    formState: { errors },
    handleSubmit,
    getValues,
  } = useForm();

  const [signUp, { loading, error, data }] = useMutation(SIGNUP_MUTATION, {
    variables: getValues(),
  });

  const onSubmitHandler = async (formData) => {
    await signUp().catch(console.log(error));
  };

  if (data?.createUser) {
    return (
      <p>Signed up with {data.createUser.email}! Please go ahead and Sign in</p>
    );
  }

  return (
    <form
      className={classes.form}
      method="POST"
      onSubmit={handleSubmit(onSubmitHandler)}
    >
      <h2>Sign up to register yourself</h2>
      <DisplayError error={error} />
      <fieldset>
        <label>
          Name
          <input {...register("name")} />
        </label>
        <label>
          Email
          <input {...register("email")} />
        </label>
        <label>
          Password
          <input {...register("password")} />
        </label>
        <button type="submit">Sign Up</button>
      </fieldset>
    </form>
  );
}
