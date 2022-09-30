import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import Navbar from "../components/navbar";
import styles from "../styles/Home.module.css";
import navStyles from "../styles/NavBar.module.css";

const Home: NextPage = () => {
  let theme;
  if (typeof window !== "undefined") {
    theme = window.matchMedia("(prefers-color-scheme: dark)").matches;
  }
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
    observer.observe(document.querySelector(".animate")!);

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
            }
          });
        }
      });
    });
    observer2.observe(document.querySelector(".animate2")!);

    const observer3 = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          document.querySelectorAll(".animate3").forEach((element) => {
            if (element.classList.contains("top")) {
              element.classList.add("fade-in-top");
            } else if (element.classList.contains("left")) {
              element.classList.add("fade-in-left");
            } else if (element.classList.contains("right")) {
              element.classList.add("fade-in-right");
            } else if (element.classList.contains("bottom")) {
              element.classList.add("fade-in-bottom");
            }
          });
        }
      });
    });
    observer3.observe(document.querySelector(".animate3")!);

    const navbar = document.querySelector("." + navStyles.nav);
    (navbar as HTMLElement).style.animationDelay = "4.1s";
  });
  return (
    <>
      <Head>
        <title>Genshin Impact and its problems</title>
        <meta
          name="description"
          content="A website describing Genshin Impact's problems"
        />
      </Head>
      <Navbar />
      <div className={styles.container}>
        <div className="top-section">
          <header>
            <Image
              src={
                theme
                  ? "/images/genshin-logo-white.png"
                  : "/images/genshin-logo-black.png"
              }
              alt="Genshin Impact Logo"
              width="320"
              height="115"
              className="animate top"
              id="genshin-image"
              style={{ animationDelay: "0.5s" }}
            />
            <p
              className="caption animate bottom"
              style={{ animationDelay: "1.7s" }}
            >
              and its problems
            </p>
            <small
              className="animate bottom"
              style={{
                animationDelay: "2.9s",
                fontWeight: "normal",
                fontSize: "x-small",
              }}
            >
              I poured my entire heart and all of my soul into this website,
              please enjoy it
            </small>
          </header>
          <a href="#content">
            <div className="down-arrow"></div>
          </a>
        </div>
        <main id="content">
          <div
            className="card animate2 left"
            style={{ animationDelay: "1s", width: "40vw" }}
          >
            <h2>What is Genshin Impact?</h2>
            <hr />
            <p>It&apos;s a game (a really good game)</p>
            <small style={{ fontSize: "x-small" }}>
              I&apos;d recommend reading this first unless you already know
              about Genshin
            </small>
            <br />
            <br />
            <Link href="/intro">Read More</Link>
          </div>
          <div
            className="card animate2 right"
            style={{ animationDelay: "2.2s", width: "40vw" }}
          >
            <h2>Genshin Impact&apos;s problems</h2>
            <hr />
            <p>
              Genshin has many problems and its devs have received hate for
              them...
            </p>
            <small style={{ fontSize: "x-small" }}>
              I wouldn&apos;t recommend reading this unless you have finished
              the first section
            </small>
            <br />
            <br />
            <Link href="/problems">Read More</Link>
          </div>
        </main>
        <footer id="footer">
          <div style={{ width: "100vw", height: "20px" }} />
          <h2 className="animate3 top">About this website</h2>
          <p className="animate3 bottom" style={{ animationDelay: "1.2s" }}>
            This website was made with{" "}
            <Link href="https://nextjs.org">Next.js</Link> and hosted with{" "}
            <Link href="https://vercel.com">Vercel</Link> <br />
            <br />
            <Link href="/about">Read More</Link>
          </p>
        </footer>
      </div>
    </>
  );
};

export default Home;
