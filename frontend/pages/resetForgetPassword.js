import ForgetPassword from "../components/ForgetPassword";
import ResetForgetPassword from "../components/ResetForgetPassword";

export default function ResetForgetPaswordPage({ query }) {
  if (!query?.token) {
    return (
      <div>
        <p>Sorry you must supply a token</p>
        <ForgetPassword />
      </div>
    );
  }

  return <ResetForgetPassword token={query.token} />;
}

export async function getServerSideProps(context) {
  return {
    props: {
      query: context.query,
    },
  };
}
