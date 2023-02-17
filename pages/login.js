import Headmeta from "@/component/Headmeta";
import Layout from "@/component/Layout";
import axios from "axios";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const Login = () => {
  const router = useRouter();
  const [inputValue, setInputValue] = useState({ id: "", name: "", email: "", password: "" });
  const [logData, setLogData] = useState();
  const [my, setMy] = useState();

  useEffect(() => {
    axios.get("/api/accountcontrol").then((res) => {
      setLogData(res.data);
    });
  }, []);

  const loginsubmit = (e) => {
    e.preventDefault();
    let check = logData.filter((obj) => obj.email === e.target.email.value && obj.password === e.target.password.value);
    setMy(check);

    if (check.length) {
      sessionStorage.setItem("isLogin", true);
      sessionStorage.setItem("uniqueKey", check[0].id);
      router.push("/");
    } else {
      alert("일치하는 회원이 없습니다.");
    }

    e.target.email.value = "";
    e.target.password.value = "";
  };

  const changeValue = (e) => {
    let t = e.target;
    setInputValue({ ...inputValue, [t.name]: t.value });
  };
  const signUpBtn = () => {
    router.push("/signup");
  };
  return (
    <>
      <Layout>
        <Headmeta title="LOGIN" />
        <form onSubmit={loginsubmit}>
          <input type="email" onChange={changeValue} placeholder="E-mail" name="email"></input>
          <input type="password" onChange={changeValue} placeholder="Password" name="password"></input>
          <input type="submit" value="Login" />
          <button type="button" onClick={signUpBtn}>
            회원가입
          </button>
        </form>
      </Layout>
    </>
  );
};

export default Login;
