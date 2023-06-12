/* eslint-disable @next/next/no-img-element */
"use client";

import { useState } from "react";
import style from "./write.module.scss";
import { useRouter } from "next/navigation";
import axios from "axios";

export default function WritePage() {
  const router = useRouter();
  const [form, setForm] = useState({
    title: "",
    nick: "",
    content: "",
    img: 1,
  });

  const handleForm = (type, e) => {
    setForm({ ...form, [type]: e.target.value });
  };

  const submitForm = async () => {
    if (!form.title || !form.nick || !form.content) {
      return window.alert("다 작성해주세요");
    }

    try {
      await axios.post("http://localhost:5000/post", form);
      router.push("/post");
    } catch (err) {
      window.alert(err);
    }
  };

  return (
    <div className={style.writeContainer}>
      <div className={style.writeWrapper}>
        <div className={style.smile}>
          <div>volley your feeling on MindSports</div>
          <div className={style.smileList}>
            {[1, 2, 3, 4, 5].map((ele, i) => (
              <div
                style={{ cursor: "pointer" }}
                key={`smile: ${i}`}
                onClick={() => setForm({ ...form, img: ele })}
              >
                {ele === form.img ? (
                  <img src={`act${ele}.png`} alt="img" />
                ) : (
                  <img src={`${ele}.png`} alt="img" />
                )}
              </div>
            ))}
          </div>
        </div>
        <div className={style.main}>
          <div className={style.intro}>
            name
            <input
              placeholder="enter your nickname"
              vale={form.nick}
              onChange={e => handleForm("nick", e)}
            />
          </div>
          <div className={style.intro}>
            title
            <input
              placeholder="enter your title"
              vale={form.title}
              onChange={e => handleForm("title", e)}
            />
          </div>
          <span className={style.se} />
          <div className={style.content}>
            <textarea
              placeholder="write your post"
              value={form.content}
              onChange={e => handleForm("content", e)}
            />
          </div>
          <span className={style.se} />
        </div>
        <div className={style.rest}>
          <button className={style.btn} onClick={() => router.push("/post")}>
            Back to List
          </button>
          <div className={style.btnContainer}>
            <button className={style.btn} onClick={() => router.push("/post")}>
              Back
            </button>
            <button className={style.btn} onClick={() => submitForm()}>
              POST
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
