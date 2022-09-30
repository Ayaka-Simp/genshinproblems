import { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import NavBar from "../../components/navbar";
import navStyles from "../../styles/NavBar.module.css";
import styles from "../../styles/Problems.module.css";

const ProblemsHome: NextPage = () => {
  useEffect(() => {
    document.body.style.overflow = "hidden";
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
    observer.observe(document.querySelector(".top-section")!);
    const observer2 = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          document.querySelectorAll(".animate2").forEach((element) => {
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
    observer2.observe(document.querySelector("#content")!);
    const navbar = document.querySelector("." + navStyles.nav);
    (navbar as HTMLElement).style.animationDelay = "5.3s";
  });
  return (
    <>
      <Head>
        <title>Genshin Impact&apos;s problems</title>
        <meta
          name="description"
          content="A brief overview of most of Genshin Impact's problems and links to pages that have an in-depth explanation of each of them."
        />
      </Head>
      <NavBar />
      <div className={styles.container}>
        <div className="top-section">
          <header>
            <h1 className="animate top" style={{ animationDelay: "0.5s" }}>
              Genshin Impact&apos;s problems
            </h1>
            <p
              className="animate bottom"
              style={{ animationDelay: "1.7s", fontWeight: "500" }}
            >
              A brief overview
            </p>
            <small
              className="animate top"
              style={{
                fontSize: "small",
                fontWeight: "normal",
                animationDelay: "2.9s",
                display: "block",
              }}
            >
              These are very controversial and the devs have gotten much hate
              over them...
            </small>
            <Image
              className="animate bottom"
              src="/images/qiqi-fallen.png"
              alt="QiQi fallen"
              style={{ animationDelay: "4.1s", display: "block" }}
              width="256"
              height="256"
            />
          </header>
          <Link href="#content">
            <div
              className="down-arrow"
              style={{ animationDelay: "6.3s", cursor: "pointer" }}
            ></div>
          </Link>
        </div>
        <div id="content">
          <div className="card animate2 left" style={{ animationDelay: "1s" }}>
            <h2>Gacha/Business Model</h2>
            <hr />
            <p>
              Genshin Impact&apos;s business model isn&apos;t the most generous
              one...
            </p>
            <br />
            <Link href="/problems/gacha#nav">Read More</Link>
          </div>
          <div
            className="card animate2 bottom"
            style={{ animationDelay: "2.2s" }}
          >
            <h2>Bug-fixing priorities</h2>
            <hr />
            <p>
              HoYoverse doesn&apos;t fix bugs that ruin the players&apos;s
              experience...
            </p>
            <br />
            <Link href="/problems/bugfixing#nav">Read More</Link>
          </div>
          <div
            className="card animate2 right"
            style={{ animationDelay: "3.4s" }}
          >
            <h2>
              1<sup>st</sup> Anniversary rewards
            </h2>
            <hr />
            <p>
              Genshin Impact 1<sup>st</sup> Anniversary rewards 🤮
            </p>
            <br />
            <Link href="/problems/firstanniversaryrewards#nav">Read More</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProblemsHome;
