/* eslint-disable @next/next/no-img-element */
"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import style from "./page.module.scss";
import dayjs from "dayjs";

export default function TodayPage({ params: { id } }) {
  const [post, setPost] = useState({});
  const [check, setCheck] = useState(false);
  const [comment, setComment] = useState([]);
  const [commend, setCommend] = useState({
    up: 0,
    down: 0,
  });

  const [view, setView] = useState(0);

  const [form, setForm] = useState({
    nick: "",
    content: "",
  });

  const handleReaction = async (id, recommend, deprecated, type) => {
    if (check) {
      return window.alert("이미 추천 되었습니다.");
    }
    await axios.put(`http://localhost:5000/post/id?id=${id}`, {
      recommend,
      deprecated,
    });
    if (type === "up") {
      setCommend({ ...commend, up: recommend });
    } else {
      setCommend({ ...commend, down: deprecated });
    }
    setCheck(true);
  };

  const handleForm = (type, e) => {
    setForm(prev => ({
      ...prev,
      [type]: e.target.value,
    }));
  };

  const submitCommnet = async () => {
    if (!form.nick) {
      return window.alert("닉네임을 적어주세요");
    }

    if (!form.content) {
      return window.alert("내용을 적어주세요.");
    }

    const result = await axios
      .post("http://localhost:5000/comment", {
        id,
        nick: form.nick,
        content: form.content,
      })
      .then(raw => raw.data);
    setComment(prev => [...prev, result.data]);
  };

  useEffect(() => {
    (async () => {
      const result = await axios
        .get(`http://localhost:5000/post/id?id=${id}`)
        .then(raw => raw.data);
      setPost(result.data);
      setCommend({
        up: result.data.recommend,
        down: result.data.deprecated,
      });
      const result2 = await axios
        .get(`http://localhost:5000/comment/postId?id=${id}`)
        .then(raw => raw.data);
      setComment(result2.data);

      await axios
        .put(`http://localhost:5000/post/id?id=${id}`, {
          view: result.data.view + 1,
        })
        .then(_ => setView(result.data.view + 1));
    })();
  }, []);

  return (
    <div className={style.postContainer}>
      <div className={style.postWrapper}>
        <div className={style.title}>
          {post.img && (
            <img src={`http://localhost:5000/${post.img}.png`} alt="smile" />
          )}
          <div className={style.info}>{post.title}</div>
          <div className={style.sub}>
            <div className={style.first}>
              <div>{post.nick}</div>
              <div>{dayjs(post.createdAt).format("MM.DD.YYYY")}</div>
            </div>
            <div className={style.last}>
              조회: <strong>{view}</strong>
            </div>
          </div>
        </div>
        <div className={style.body}>
          <div className={style.content}>
            {post.content?.split("\n").map((line, i) => (
              <span key={`content: ${i}`}>
                {line}
                <br />
              </span>
            ))}
          </div>
          <div className={style.reaction}>
            <div
              onClick={() =>
                handleReaction(
                  post.id,
                  post.recommend + 1,
                  post.deprecated,
                  "up"
                )
              }
              className={style.row}
            >
              추천{commend.up}
              <img src="/recommend.png" alt="img" />
            </div>
            <div
              onClick={() =>
                handleReaction(
                  post.id,
                  post.recommend,
                  post.deprecated + 1,
                  "down"
                )
              }
              className={style.row}
            >
              <img src="/noRecommend.png" alt="img" />
              비추천{commend.down}
            </div>
          </div>
        </div>
        <div className={style.commentList}>
          <div className={style.count}>댓글 ({comment.length})</div>
          <div className={style.comments}>
            {comment.map((ele, i) => (
              <div key={`comment: ${i}`} className={style.comment}>
                <div className={style.who}>
                  <div className={style.first}>
                    <img src="/recommend.png" alt="img" />
                    <div>{ele.nick}</div>
                    <div className={style.created}>
                      {" "}
                      {dayjs(ele.createdAt).format("MM.DD.YYYY HH:mm")}
                    </div>
                  </div>
                </div>
                <div className={style.content}>{ele.content}</div>
              </div>
            ))}
          </div>
        </div>
        <div className={style.send}>
          <div className={style.intro}>댓글 쓰기</div>
          <div className={style.name}>
            닉네임:{" "}
            <input value={form.nick} onChange={e => handleForm("nick", e)} />
          </div>
          <div className={style.form}>
            <textarea
              value={form.content}
              onChange={e => handleForm("content", e)}
            />
            <button onClick={submitCommnet}>등록</button>
          </div>
        </div>
      </div>
    </div>
  );
}
