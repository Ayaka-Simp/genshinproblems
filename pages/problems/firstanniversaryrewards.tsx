import { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import NavBar from "../../components/navbar";
import navStyles from "../../styles/NavBar.module.css";
import styles from "../../styles/Problems.module.css";

const FirstAnniversaryRewards: NextPage = () => {
  useEffect(() => {
    const navbar = document.querySelector("." + navStyles.nav) as HTMLElement;
    navbar.style.animationDelay = "6s";
    document.body.style.overflow = "scroll";
    document.body.style.scrollBehavior = "auto";
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
            } else {
              element.classList.add("fade-in");
            }
          });
        }
      });
    });
    setTimeout(() => {
      observer2.observe(document.querySelector(".animate2")!);
    }, 1000);
  });
  return (
    <>
      <Head>
        <title>
          Genshin Impact&apos;s first anniversary rewards | Genshin
          Impact&apos;s problems
        </title>
        <meta
          name="description"
          content="Genshin Impact's first anniversary rewards were disgusting. All we got was a measly 1640 primogems. On the other hand, HoYoverse got a whole load of free advertising."
        />
      </Head>
      <NavBar />
      <div className={styles.container_p} id="container">
        <header>
          <h1
            id={styles.header}
            className="animate top"
            style={{ animationDelay: "0.5s" }}
          >
            Genshin Impact&apos;s first anniversary rewards 🤮
          </h1>
        </header>
        <main>
          <Image
            src="https://preview.redd.it/e01q3pbapgq71.png?width=640&crop=smart&auto=webp&s=b8a93d2e4c53889e02642ac9812154fcf2359d73"
            alt="People spamming :qiqifallen: (one of Genshin Impact's stickers) in Genshin's discord server"
            width="320"
            height="156"
            className="animate left"
            style={{ animationDelay: "1.7s" }}
          />
          <p
            id={styles.caption}
            className="animate right"
            style={{ animationDelay: "1.7s" }}
          >
            People spamming :qiqifallen: (one of Genshin Impact&apos;s stickers)
            in Genshin&apos;s discord server
          </p>
          <hr className="animate" style={{ animationDelay: "2.9s" }} />
          <h2 className="animate bottom" style={{ animationDelay: "4.5s" }}>
            (another) WARNING: This will probably be the longest one out of all
            of them since this is the worst issue. HoYoverse&apos;s greed is
            unforgivable, so I&apos;m sorry if I start ranting too much here.
          </h2>
          <p className="animate bottom" style={{ animationDelay: "5.7s" }}>
            Oh, my god. I don&apos;t know where to start this one, so I guess
            I&apos;ll start from the beginning. A game&apos;s anniversary is
            usually a time of joyous celebration, with many rewards and fun
            events. This is especially the case with gacha games (for example:
            Cookie Run Kingdom&apos;s anniversary rewards were huge), because
            usually the currency (primogems for Genshin) is really hard to get,
            so they will give many on the anniversary.
            <br />
            <br />
            For the events in Genshin/on the web, we only got 1,700 primogems,
            80,000 mora (common currency in Genshin), 18 Mystic Enhancement Ore
            (used to level up weapons), and 8 Hero&apos;s Wit (used to level up
            characters). The rest of the rewards are for contests, for example
            the fan art contest which gives 10,000 primogems and a 10.2 inch
            iPad to 5 people, a word puzzle which gives 100 primogems to 1,000
            people, a profile creating thing where there is a 10% chance to win
            a &quot;Blessing of the Welkin Moon&quot; (300 primogems at the
            start and 2700 primogems over 30 days), but the rest of people would
            get 100,000 mora (which isn&apos;t actually a lot), and a cosplay
            contest where 5 people would win 6,000 primogems and a pair of
            AirPods.
            <br />
            <br />
            Many people might think that those are still a lot and we should be
            grateful. But only extremely talented people can complete some of
            those competitions (for example, the fan art) and (especially the
            cosplay) cost more than you win (Genshin cosplays would cost
            hundreds or even thousands of dollars only to win 160 dollars worth
            of primogems and AirPods).
            <br />
            <br />
            (I&apos;m just using Cookie Run Kingdom as an example here, but this
            paragraph applies to lots of gacha games, even Honkai Impact 3
            <sup>rd</sup> which is another of HoYoverse&apos;s games.) In Cookie
            Run Kingdom, players got 100 gacha pulls (they&apos;re not called
            wishes in CRK), plus a bunch of other stuff in the game that I
            can&apos;t list because there are too many.
          </p>
          <hr className="animate2 bottom" style={{ animationDelay: "0.5s" }} />
          <div className="animate2 bottom" style={{ animationDelay: "1.7s" }}>
            <Link
              href="/problems/bugfixing"
              style={{ color: "#0070f3", textDecoration: "underline" }}
            >
              <button className="btn">Next Problem →</button>
            </Link>{" "}
            <div className={styles.vl} />
            <Link href="/problems/gacha">
              <button className="btn" style={{ marginLeft: "1.2rem" }}>
                ← Previous Problem
              </button>
            </Link>
            <div className={styles.vl} />
            <p style={{ marginLeft: "1.2rem", display: "inline" }}>
              Go back to the{" "}
            </p>
            <Link href="/problems">
              <button
                className="btn"
                style={{
                  padding: "0 0.5rem",
                  display: "inline",
                }}
              >
                main problems menu.
              </button>
            </Link>{" "}
          </div>
        </main>
      </div>
    </>
  );
};

export default FirstAnniversaryRewards;
