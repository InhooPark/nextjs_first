import Headmeta from "@/component/Headmeta";
import Layout from "@/component/Layout";
import { useRouter } from "next/router";
import React, { useEffect } from "react";

// params 를 name 으로 하는게 나을수도? id 값은 스토리지에 넣어두고 네임과 스토리지가 일치해야 로그인됐다고 판정
const account = () => {
  const router = useRouter();
  useEffect(() => {
    if (sessionStorage.getItem("isLogin") === "false") {
      alert("please login");
      router.push("/");
    }
  }, []);
  return (
    <Layout>
      <Headmeta title="ACCOUNT" />
      <div>account</div>
    </Layout>
  );
};

export default account;
