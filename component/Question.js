import { MyContext } from "@/context/Context";
import axios from "axios";
import { useRouter } from "next/router";
import React, { useContext, useEffect, useState } from "react";
import list from "@/styles/list.module.scss";

const Question = () => {
  const inputInit = { q_id: "", a_id: "", question: "", answer: "", date: "" };
  const { inputValue, setInputValue, dummy, setDummy } = useContext(MyContext);
  useEffect(() => {
    setInputValue(inputInit);
  }, []);

  const question = (e) => {
    e.preventDefault();
    axios.post("/api/listcontrol", { ...inputValue, date: Date.now().toString() });
    e.target.question.value = "";
    setInputValue(inputInit);
    setDummy(!dummy);
  };
  const valueChange = (e) => {
    let t = e.target;
    // 고유 키값도 보내서 본인 확인 해야함 나중에 수정및 삭제 해야해서
    setInputValue({ ...inputValue, question: t.value });
  };

  return (
    <form className={list.list_form} onSubmit={question}>
      <p className={list.question}>
        <input onChange={valueChange} type="text" name="question" placeholder="질문 입력"></input>
      </p>
      <p className={list.questionBtn}>
        <input type="submit" value="등록"></input>
      </p>
    </form>
  );
};

export default Question;
