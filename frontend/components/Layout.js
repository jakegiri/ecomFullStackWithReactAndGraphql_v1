import Header from "./Header";
import classes from "./Layout.module.css";

export default function Layout({ children }) {
  return (
    <div>
      <Header />
      <div className={classes.innerStyles}>{children}</div>
    </div>
  );
}
