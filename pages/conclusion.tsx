import { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import NavBar from "../components/navbar";
import styles from "../styles/Intro.module.css";
import navStyles from "../styles/NavBar.module.css";

const Conclusion: NextPage = () => {
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
        <title>Conclusion | Genshin Impact&apos;s problems</title>
        <meta
          name="description"
          content="Conclusion to my really long web essay about Genshin Impact's problems."
        />
      </Head>
      <div className={styles.container}>
        <header>
          <h1 id={styles.header} className="animate top">
            Conclusion
          </h1>
        </header>
        <main>
          <Image
            src="/images/a.png"
            alt="totally not my favourite genshin character"
            width="750"
            height="422"
            className="animate right"
            style={animationDelay12}
          />
          <p
            id={styles.caption}
            className="animate left"
            style={{ ...animationDelay12, fontSize: "x-small" }}
          >
            Totally not my favourite Genshin character
          </p>
          <hr className="animate" style={animationDelay24} />
          <p className="animate bottom" style={animationDelay36}>
            Good Job for reading my unnecessarily long rant about Genshin
            Impact, a game that you will probably never play! All jokes and
            problems aside, I still think that Genshin is a very fun game with
            mind-blowing music, awesome art, countless clean characters and
            stunning scenery. It&apos;s a very casual game and can be enjoyed
            without too much effort so yeah I guess go play it if you&apos;re
            bored. Anyways, I have to go claim this year&apos;s anniversary
            rewards so bye!
          </p>
          <Link href="/">
            <button
              className="btn animate left"
              style={{ animationDelay: "5.8s" }}
            >
              Home
            </button>
          </Link>
          <Link href="/problems">
            <button
              className="btn animate left"
              style={{ animationDelay: "5.9s", marginLeft: "5px" }}
            >
              Main Problems menu
            </button>
          </Link>
          <Link href="/about">
            <button
              className="btn animate left"
              style={{ animationDelay: "6s", marginLeft: "5px" }}
            >
              About this website
            </button>
          </Link>
          <Link href="https://google.com">
            <button
              className="btn animate left"
              style={{ animationDelay: "6.1s", marginLeft: "5px" }}
            >
              Escape this place!
            </button>
          </Link>
        </main>
      </div>
    </>
  );
};

export default Conclusion;
