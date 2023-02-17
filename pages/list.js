import Answer from "@/component/Answer";
import Headmeta from "@/component/Headmeta";
import Layout from "@/component/Layout";
import Question from "@/component/Question";
import React from "react";

const List = () => {
  return (
    <Layout>
      <Headmeta title="LIST" />
      <Question />
      <Answer />
    </Layout>
  );
};

export default List;
