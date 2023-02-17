import { MyContext } from "@/context/Context";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useContext, useEffect } from "react";

const Layout = ({ children }) => {
  const { accMenu, setAccMenu, log, setLog } = useContext(MyContext);
  const router = useRouter();

  useEffect(() => {
    setLog(sessionStorage.getItem("isLogin"));
  }, []);

  useEffect(() => {
    const accClickEvent = (e) => {
      if (e.target.className !== "accountBtn") {
        setAccMenu(false);
      }
    };
    window.addEventListener("click", accClickEvent);
    return () => {
      window.removeEventListener("click", accClickEvent);
    };
  }, [accMenu]);

  const accountClick = () => {
    // /account/{id}
    // id 와 unique key 값이 일치해야함
    router.push(`/account/account`);
  };
  const logoutClick = () => {
    sessionStorage.setItem("isLogin", false);
    sessionStorage.setItem("uniqueKey", null);
    router.push("/");
  };
  const loginClick = () => {
    router.push("/login");
  };

  return (
    <>
      <header>
        <nav>
          <Link href="/">LOGO</Link>
          <div onClick={() => setAccMenu(!accMenu)} className="accountBtn">
            Account
            <ul className={accMenu ? "acc__on" : ""}>
              <li className={log === "true" ? "log__on" : ""} onClick={accountClick}>
                Account
              </li>
              <li className={log === "true" ? "log__on" : ""} onClick={logoutClick}>
                Logout
              </li>
              <li className={log === "false" ? "log__on" : ""} onClick={loginClick}>
                Login
              </li>
            </ul>
          </div>
        </nav>
      </header>
      {children}
      <footer></footer>
    </>
  );
};

export default Layout;
