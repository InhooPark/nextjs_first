import Headmeta from "@/component/Headmeta";
import Layout from "@/component/Layout";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Home() {
  const router = useRouter();
  useEffect(() => {
    if (sessionStorage.getItem("isLogin") === "true") {
      router.push("/list");
    } else {
      router.push("/login");
    }
  }, []);
  return (
    <>
      <Headmeta title="INDEX" />
      <Layout>Home</Layout>
    </>
  );
}
