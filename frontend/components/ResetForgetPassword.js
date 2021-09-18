import { useMutation } from "@apollo/client";
import gql from "graphql-tag";
import { useForm } from "react-hook-form";

import classes from "../styles/Form.module.scss";
import DisplayError from "./ErrorMessage";

const PASSWORD_RESET_MUTATION = gql`
  mutation RESET_PASSWORD_MUTATION(
    $email: String!
    $password: String!
    $token: String!
  ) {
    redeemUserPasswordResetToken(
      email: $email
      password: $password
      token: $token
    ) {
      code
      message
    }
  }
`;

//############################################################
//############################################################
//############################################################

export default function ResetForgetPassword({ token }) {
  //==========================================
  //     hooks
  //==========================================
  const {
    register,
    handleSubmit,
    formState: { errors: formErrors },
    getValues,
  } = useForm();

  const [resetPassword, { loading, data, error }] = useMutation(
    PASSWORD_RESET_MUTATION,
    {
      variables: { ...getValues(), token: token },
    }
  );

  //==========================================
  //     event handlers
  //==========================================
  const onSubmitHandler = async (formData) => {
    const res = await resetPassword();
    console.log(res);
  };

  //==========================================
  //     Resetting result (success/failed)
  //==========================================
  const successfulError = data?.redeemUserPasswordResetToken?.code
    ? data?.redeemUserPasswordResetToken
    : undefined;

  if (data?.redeemUserPasswordResetToken === null) {
    return <p>Success! You can now sign in </p>;
  }

  //==========================================
  //     Return
  //==========================================
  return (
    <form
      method="POST"
      className={classes.form}
      onSubmit={handleSubmit(onSubmitHandler)}
    >
      <h2>Provide your email to send reset password link</h2>
      <DisplayError error={error || successfulError} />
      <fieldset>
        <label>
          Email
          <input {...register("email", { required: true })} />
          {formErrors.email && <span>Please provide an email</span>}
        </label>
        <label>
          Password
          <input {...register("password", { required: true })} />
          {formErrors.email && <span>Please provide an email</span>}
        </label>
        <button type="submit">RESET PASSWORD</button>
      </fieldset>
    </form>
  );
}
