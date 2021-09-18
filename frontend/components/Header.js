import Link from "next/link";
import Nav from "./Nav";

import classesHeader from "./Header.module.css";
import Cart from "./cart";

export default function Header() {
  return (
    <header>
      <div className={classesHeader.bar}>
        <Link href="/">
          <a className={classesHeader.anchor1}>
            <h1 className={classesHeader.logo}>Sick Fits</h1>
          </a>
        </Link>
        <Nav />
      </div>
      <div className={classesHeader["sub-bar"]}>
        <p>Search</p>
      </div>
      <Cart open />
    </header>
  );
}
