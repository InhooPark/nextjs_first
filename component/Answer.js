import { MyContext } from "@/context/Context";
import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import list from "@/styles/list.module.scss";

const Answer = () => {
  const { data, setData, inputValue, setInputValue, dummy } = useContext(MyContext);
  const [qUp, setQUp] = useState(false);

  const dataGet = () => {
    axios.get("/api/listcontrol").then((res) => {
      setData(res.data);
    });
  };

  const dataUpdate = (obj) => {
    console.log(obj);
    setQUp(true);
  };
  const dataRemove = (id) => {
    axios.delete("/api/listcontrol", { data: id });
    dataGet();
  };
  const answerChange = (e, obj) => {
    setInputValue({ ...obj, answer: e.target.value });
  };
  const answerGet = (e) => {
    e.preventDefault();
    axios.put("/api/listcontrol", { ...inputValue });
    dataGet();
    e.target.answer.value = "";
  };

  useEffect(() => {
    dataGet();
  }, [dummy]);

  if (data.length) {
    return (
      <article className={list.list_article}>
        <h2> Q n A </h2>
        <ul>
          {data.map((obj) => {
            return (
              <li key={obj.id}>
                <div>
                  <div className={list.profile_wrap}>
                    <div className={list.img_wrap}>
                      <img src="" alt="" />
                    </div>
                    <p className={list.profile_name}></p>
                  </div>
                  <span className={list.question_txt}>{obj.question}</span>
                  <p>
                    <button onClick={() => dataUpdate(obj)}>수정</button>
                    <button onClick={() => dataRemove(obj.id)}>삭제</button>
                  </p>
                </div>
                <form className={list.answer_wrap} onSubmit={answerGet}>
                  <input onChange={(e) => answerChange(e, obj)} type="text" placeholder="답변" name="answer"></input>
                  {/* 답변을 달면 inputbox사라지고 수정 삭제 버튼이 생김 */}
                  <p>{obj.answer}</p>
                  <input type="submit" value="답변"></input>
                </form>
              </li>
            );
          })}
        </ul>
      </article>
    );
  } else {
    return <p> 질문이 없어요 T T</p>;
  }
};

export default Answer;
