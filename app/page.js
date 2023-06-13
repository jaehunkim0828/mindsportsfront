/* eslint-disable @next/next/no-img-element */
"use client";
import style from "@/styles/home.module.scss";
import { useRouter } from "next/navigation";

const cards = [
  {
    text: "Olympian David Lee gets candid about what he loves about India and more...",
    url: "https://www.telegraphindia.com/my-kolkata/lifestyle/volleyball-champion-david-lee-engages-in-a-candid-chat-on-the-sidelines-of-prime-volleyball-league/cid/1851307",
    img: "/home3.jpeg",
  },
  {
    text: "Pass, Set, Spike! Here's What You Need to Know About Sitting Volleyball at the Paralympics",
    url: "https://www.popsugar.com/fitness/sitting-volleyball-rules-48474419",
    img: "/home4.jpeg",
  },
  {
    text: "Sports Psychology and Simple Tools to Improve Performance in Volleyball",
    url: "http://www.volleyballadvisors.com/sports-psychology.html",
    img: "/home5.jpeg",
  },
  {
    text: "The Mental Game Of Volleyball Winners Have Calm, Focused Mental Toughness",
    url: "https://www.sportspsychologycoaching.com/articles/TheMentalGameOfVolleyball.html",
    img: "/home6.jpeg",
  },
];

export default function Home() {
  const router = useRouter();

  return (
    <main className={style.home}>
      <div className={style.info}>
        <div className={style.infoWrapper}>
          <div className={style.left}>
            <div>
              <h1>We Make</h1>
              <h1>Better Sports Cultures</h1>
              <p>
                Let’s shape a more engaged and supportive volleyball community!
              </p>
            </div>
            <button
              style={{ width: "180px" }}
              onClick={() => router.push("/write")}
            >
              <div>Create a Post</div>
              <div>{`>`}</div>
            </button>
          </div>
          <img src={"/main.png"} alt="메인 로고" />
        </div>
      </div>
      <div className={style.sub}>
        <h1>SHARE YOUR STORY</h1>
        <span>Mindsports is a community for volleyball players</span>
      </div>
      <div className={style.section}>
        <div className={style.article}>
          <div className={style.row}>
            <div className={style.content}>
              <div className={style.inner}>
                <h2>About us</h2>
                <span className="separator" />
                <p>
                  {`Mindsports is a dedicated platform for volleyball players. It facilitates users to pen their thoughts, insights, experiences or game tactics with others through writing notes. To make platform more fun and engaging, we provide unique themed emojis. Our dream for Mindsports is to become a worldwide community where volleyball lovers connect, learn from each other, and improve their game, making volleyball even more enjoyable for everyone.`}
                </p>
              </div>
            </div>
            <div className={style.img} />
          </div>
          <div className={style.row}>
            <div className={style.img2} />
            <div className={style.content}>
              <div className={style.inner}>
                <p>
                  {`It's not just a website; it's an interactive huddle, where volleyball enthusiasts from rookie to pro, unite, share, and evolve. Join us, be part of the Mindsports league, and together let's redefine the volleyball narrative.`}
                </p>
              </div>
            </div>
          </div>
          <div className={style.row}>
            <div className={style.content}>
              <div className={style.inner}>
                <p
                  style={{ fontWeight: "700" }}
                >{`SUCCESS IS HOW HIGH YOU BOUNCE WHEN YOU HIT BOTTOM`}</p>
              </div>
            </div>
            <div className={style.img3} />
          </div>
          <div className={style.row}>
            <div className={style.img4} />
            <div className={style.content}>
              <div className={style.inner}>
                <p style={{ fontWeight: "700" }}>
                  {`BE THANKFULL FOR WHAT YOU ARE NOW, AND KEEP FIGHTING FOR WHAT YOU WANT TO BE TOMORROW`}
                </p>
              </div>
            </div>
          </div>
          <div className={style.row}>
            <div className={style.content}>
              <div className={style.inner}>
                <p style={{ fontWeight: "700" }}>
                  {`GOOD PLAYERS INSPIRE THE MESLVES GREAT PLAYERS INSPIRE OTHERS.`}
                </p>
              </div>
            </div>
            <div className={style.img5} />
          </div>
          <div className={style.row}>
            <div className={style.img6} />
            <div className={style.content}>
              <div className={style.inner}>
                <p style={{ fontWeight: "700" }}>
                  {`VOLLEYBALL IS 20 PERCENT ATHLETICNESS AND 80 PERCENT MENTAL.`}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={style.cardList}>
        {cards.map((ele, i) => (
          <a href={ele.url} className={style.card} key={`article: ${i}`}>
            <div
              style={{
                height: "120px",
                backgroundImage: `url("${ele.img}")`,
                backgroundSize: "auto 100%",
              }}
            />
            <div className={style.text}>{ele.text}</div>
          </a>
        ))}
      </div>
    </main>
  );
}
