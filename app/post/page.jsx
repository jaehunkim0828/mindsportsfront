/* eslint-disable @next/next/no-img-element */
"use client";
import { Pagination } from "@mui/material";
import axios from "axios";
import style from "./post.module.scss";

import { use, useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function PostPage() {
  const [postList, setPostList] = useState([]);
  const [count, setCount] = useState(10);
  const [filter, setFilter] = useState("new");

  const router = useRouter();

  useEffect(() => {
    (async () => {
      const result = await axios.get(
        `${process.env.NEXT_PUBLIC_URL}/post?type=${filter}`
      );
      setPostList(result.data.data);
    })();
  }, [filter]);

  useEffect(() => {
    (async () => {
      const result = await axios.get(
        `${process.env.NEXT_PUBLIC_URL}/post?type=new`
      );
      setPostList(result.data.data);
    })();
  }, []);

  return (
    <div className={style.postContainer}>
      <section className={style.postWrapper}>
        <img src="/banner.png" alt="banner" />
        <div className={style.btns}>
          <div className={style.line} />
          <button
            onClick={() => setFilter("new")}
            style={{
              color: filter === "new" ? "#DF0000" : "black",
            }}
          >
            Latest
          </button>
          <button
            style={{ color: filter === "best" ? "#DF0000" : "black" }}
            onClick={() => setFilter("best")}
          >
            Popular
          </button>
        </div>
        <div className={style.postList}>
          {postList.map((ele, i) => (
            <div
              onClick={() => router.push(`post/${ele.id}`)}
              className={style.post}
              key={`post:${i}`}
            >
              <div className={style.first}>
                <div>{ele.id}</div>
                <div>{ele.title}</div>
              </div>
              <div className={style.last}>
                <div>조회{ele.view}</div>/<div>추천{ele.recommend}</div>
              </div>
            </div>
          ))}
        </div>
        <button
          className={style.makePost}
          onClick={() => router.push("/write")}
        >
          Create a Post
        </button>
        <Pagination
          style={{ width: "100%", display: "flex", justifyContent: "center" }}
          count={4}
          color="primary"
          onChange={(event, value) => console.log(value)}
        />
      </section>
    </div>
  );
}
