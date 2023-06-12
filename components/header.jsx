/* eslint-disable @next/next/no-img-element */
"use client";

import style from "./header.module.scss";
import { useRouter } from "next/navigation";

export default function Header() {
  const router = useRouter();

  return (
    <div className={style.header}>
      <div className={style.wrapper}>
        <button onClick={() => router.push("/post")}>COMMUNITY</button>

        <img
          style={{ width: "250px", cursor: "pointer" }}
          onClick={() => router.push("/")}
          src="/MINDSPORTS.png"
          alt="logo"
        />

        <button onClick={() => router.push("/write")}>CREATE A POST</button>
      </div>
    </div>
  );
}
