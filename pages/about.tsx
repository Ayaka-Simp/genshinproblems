import { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { useEffect } from "react";
import NavBar from "../components/navbar";
import navStyles from "../styles/NavBar.module.css";

const About: NextPage = () => {
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
    const navbar = document.querySelector("." + navStyles.nav);
    (navbar as HTMLElement).style.animationDelay = "3.6s";
  });
  return (
    <>
      <Head>
        <title>About this website | Genshin Impact&apos;s problems</title>
        <meta name="description" content="About this website" />
      </Head>
      <NavBar />
      <div style={{ height: "50px" }} />
      <header style={{ textAlign: "center" }}>
        <h1 className="animate top" style={{ animationDelay: "0.5s" }}>
          About this website
        </h1>
      </header>
      <main style={{ padding: "20px", margin: "30px" }}>
        <p>
          <span className="animate left" style={{ animationDelay: "1.7s" }}>
            Made with <Link href="https://nextjs.org">Next.js</Link>
          </span>
          <br />
          <br />
          <span className="animate left" style={{ animationDelay: "1.8s" }}>
            Hosted with <Link href="https://vercel.com">Vercel</Link>
          </span>
          <br />
          <br />
          <span className="animate left" style={{ animationDelay: "1.9s" }}>
            Lines of CSS: 419
          </span>
          <br />
          <br />
          <span className="animate left" style={{ animationDelay: "2s" }}>
            Lines of TSX (TypeScript Extended): 1115
          </span>
          <br />
          <br />
          <span className="animate left" style={{ animationDelay: "2.1s" }}>
            Lines of PlainText (for my essays): 235
          </span>
          <br />
          <br />
          <span className="animate left" style={{ animationDelay: "2.2s" }}>
            Total lines of code (and essay): 1769
          </span>
          <br />
          <br />
          <span className="animate left" style={{ animationDelay: "2.3s" }}>
            Amount of effort from Alex (a.k.a Ayaka Simp when online): maximum
          </span>
          <br />
          <br />
          <span className="animate left" style={{ animationDelay: "2.4s" }}>
            <Link href="https://github.com/Ayaka-Simp/genshinproblems">
              Source Code
            </Link>
          </span>
        </p>
      </main>
    </>
  );
};

export default About;
