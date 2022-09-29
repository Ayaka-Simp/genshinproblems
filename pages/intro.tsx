import { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { useEffect } from "react";
import NavBar from "../components/navbar";
import styles from "../styles/Intro.module.css";
import navStyles from "../styles/NavBar.module.css";

const Intro: NextPage = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          document.querySelectorAll(".animate").forEach((element) => {
            if (element.classList.contains("top")) {
              element.classList.add("fade-in-top");
            } else if (element.classList.contains("left")) {
              element.classList.add("fade-in-left");
            } else if (element.classList.contains("right")) {
              element.classList.add("fade-in-right");
            } else if (element.classList.contains("bottom")) {
              element.classList.add("fade-in-bottom");
            } else {
              element.classList.add("fade-in");
            }
          });
        }
      });
    });
    observer.observe(document.querySelector(`.animate`)!);

    const navbar = document.querySelector("." + navStyles.nav);
    (navbar as HTMLElement).style.animationDelay = "4.8s";
  });
  const animationDelay12 = {
    animationDelay: "1.2s",
  };
  const animationDelay24 = {
    animationDelay: "2.4s",
  };
  const animationDelay36 = {
    animationDelay: "3.6s",
  };

  return (
    <>
      <NavBar />
      <Head>
        <title>What is Genshin Impact?</title>
        <meta
          name="description"
          content="What is Genshin Impact? A comprehensive description of the game."
        />
      </Head>
      <div className={styles.container}>
        <header>
          <h1 id={styles.header} className="animate top">
            What is Genshin Impact?
          </h1>
        </header>
        <main>
          <iframe
            width="322"
            height="181"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="Rick Astley - Never Gonna Give You Up (Official Music Video)"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="animate right"
            style={animationDelay12}
          ></iframe>
          <p
            id={styles.caption}
            className="animate left"
            style={animationDelay12}
          >
            An intro video to Genshin
          </p>
          <hr className="animate" style={animationDelay24} />
          <p className="animate bottom" style={animationDelay36}>
            Genshin Impact is an action RPG by HoYoverse (formerly miHoYo). It
            was released on the There are 54 characters with 6 on the way (as of
            the 27<sup>th</sup> of September 2022) and all of them are really
            well designed to create a balance between realism and fantasy. One
            of the main aspects of Genshin is the gacha (basically gambling but
            in-game and sort of free) which uses a currency which is very hard
            to get without paying. HoYoverse has made many collabs (although
            most of them in China) including a KFC, Pizza Hut, Domino&apos;s, a
            Chinese Bank, and even Cadillac.{" "}
            <small className={styles.small}>
              I see you, Germain! BTW the Cadillacs were only in China.{" "}
            </small>
            Anyway, Genshin has many problems despite the unparalleled music and
            game design, for example the devs&apos; greed and the monetization
            model being extremely unfair. HoYoverse has gotten themselves into
            many controversies over this game, since they seem to love their
            other games (like Honkai Impact 3<sup>rd</sup>) more than Genshin.
          </p>
          <Link href="/problems">
            <button
              className="btn animate left"
              style={{ animationDelay: "30s" }}
            >
              Read about Genshin&apos;s problems
            </button>
          </Link>
        </main>
      </div>
    </>
  );
};

export default Intro;
