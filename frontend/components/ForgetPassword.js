import Router from "next/router";
import { useMutation } from "@apollo/client";
import gql from "graphql-tag";
import { useForm } from "react-hook-form";

import classes from "../styles/Form.module.scss";

const PASSWORD_RESET_MUTATION = gql`
  mutation REQUEST_RESEST_PASSWORD_MUTATION($email: String!) {
    sendUserPasswordResetLink(email: $email) {
      code
      message
    }
  }
`;

export default function ForgetPassword() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm();

  const [requestResetPassword, { loading, error, data }] = useMutation(
    PASSWORD_RESET_MUTATION,
    {
      variables: getValues(),
    }
  );

  const onSubmitHandler = async (formData) => {
    const res = await requestResetPassword();
  };

  return (
    <form
      method="POST"
      className={classes.form}
      onSubmit={handleSubmit(onSubmitHandler)}
    >
      <h2>Provide your email to send reset password link</h2>
      <fieldset>
        <label>
          Email
          <input {...register("email", { required: true })} />
          {errors.email && <span>Please provide an email</span>}
        </label>
        <button type="submit">Submit</button>
      </fieldset>
    </form>
  );
}
