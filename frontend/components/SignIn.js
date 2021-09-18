import { useMutation } from "@apollo/client";
import gql from "graphql-tag";
import { useForm } from "react-hook-form";

import classes from "../styles/Form.module.scss";
import DisplayError from "./ErrorMessage";
import { CURRENT_USER_QUERY } from "../lib/hooks/User";

const SIGNIN_MUTATION = gql`
  mutation SIGNIN_MUTATION($email: String!, $password: String!) {
    authenticateUserWithPassword(email: $email, password: $password) {
      ... on UserAuthenticationWithPasswordSuccess {
        item {
          id
          name
          email
        }
      }
      ... on UserAuthenticationWithPasswordFailure {
        code
        message
      }
    }
  }
`;

export default function SignIn() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
    reset,
  } = useForm();
  const [signin, { loading, data }] = useMutation(SIGNIN_MUTATION, {
    variables: getValues(),
    refetchQueries: [{ query: CURRENT_USER_QUERY }],
  });

  const onFormSubmitHandler = async (formData) => {
    const res = await signin();
    reset();
    console.log(res);
  };

  const error =
    data?.authenticateUserWithPassword.__typename ===
    "UserAuthenticationWithPasswordFailure"
      ? data?.authenticateUserWithPassword
      : undefined;

  return (
    <form
      action="POST"
      className={classes.form}
      onSubmit={handleSubmit(onFormSubmitHandler)}
    >
      <h2>Sign Into Your Account</h2>
      <DisplayError error={error} />
      <fieldset>
        <label>
          Email
          <input {...register("email", { required: true })} />
          {errors.email && <span>This field is required</span>}
        </label>
        <label>
          Password
          <input {...register("password", { required: true })} />
          {errors.password && <span>This field is required</span>}
        </label>
        <button type="submit">Sign In!</button>
      </fieldset>
    </form>
  );
}
