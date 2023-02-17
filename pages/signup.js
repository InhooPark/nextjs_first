import Headmeta from "@/component/Headmeta";
import Layout from "@/component/Layout";
import axios from "axios";
import { useRouter } from "next/router";
import React, { useEffect, useRef, useState } from "react";

const Signup = () => {
  const [suData, setSuData] = useState();
  const count = useRef(0);
  const router = useRouter();

  useEffect(() => {
    accountDataGet();
  }, []);

  const accountDataGet = () => {
    axios.get("/api/accountcontrol").then((res) => {
      setSuData(res.data);
    });
  };

  const accSubmit = (e) => {
    e.preventDefault();
    let t = e.target;

    if (t.name.value !== "" && t.email.value !== "" && t.password.value !== "") {
      let aa = suData.filter((obj) => obj.email === t.email.value);
      if (aa.length === 0) {
        axios.post("/api/accountcontrol", { id: count.current, name: t.name.value, email: t.email.value, password: t.password.value, introduce: "" });
        count.current += 1;
        alert("회원가입 완료");
        router.push("/");
      } else {
        alert("중복 이메일이 있습니다.");
      }
      t.name.value = "";
      t.email.value = "";
      t.password.value = "";
    } else {
      alert("빈칸을 채워주세요"); // alert으로 띄울지 밑에 P태그에 경고문구를 띄울지 고민
    }

    accountDataGet();
  };
  return (
    <Layout>
      <Headmeta title="SIGN UP" />
      <form onSubmit={accSubmit}>
        <div>
          <input type="text" placeholder="name" name="name" />
          <p>&nbsp;</p>
        </div>
        <div>
          <input type="email" placeholder="email" name="email" />
          <p>&nbsp;</p>
        </div>
        <div>
          <input type="password" placeholder="password" name="password" />
          <p>&nbsp;</p>
        </div>
        <p>
          <input type="submit" value="가입" />
        </p>
      </form>
    </Layout>
  );
};

export default Signup;
