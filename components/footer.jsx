/* eslint-disable @next/next/no-img-element */
import style from "./footer.module.scss";

export default function Footer() {
  return (
    <footer className={style.footer}>
      <img src={"/로고.png"} alt="logo" />
      <div className={style.content}>
        <h2>Have a question? Contact us!</h2>
        <div>
          <span>Operating Hours 9AM - 5PM</span>
        </div>
        <span>Monday - Friday</span>
        <span>By Email: sowon.bok@stpaulseoul.org</span>
      </div>
    </footer>
  );
}
