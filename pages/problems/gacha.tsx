import { NextPage } from "next";
import { useEffect } from "react";
import Head from "next/head";
import styles from "../../styles/Problems.module.css";
import navStyles from "../../styles/NavBar.module.css";
import NavBar from "../../components/navbar";
import Image from "next/image";
import Link from "next/link";

const Gacha: NextPage = () => {
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
        <title>Gacha | Genshin impact&apos;s problems</title>
        <meta
          name="description"
          content="Gacha is Genshin Impact's only source of income (other than physical events). If it's free, then how can they earn? I'll explain this in this page."
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
            Gacha in Genshin Impact
          </h1>
        </header>
        <main>
          <Image
            src="https://c.tenor.com/RWkPL4HClfMAAAAC/qiqi-genshin-impact.gif"
            alt="Someone obtaining QiQi from a gacha wish, one of the worst 5 star characters in the game."
            width="498"
            height="249"
            className="animate left"
            style={{ animationDelay: "1.7s" }}
          />
          <p
            id={styles.caption}
            className="animate right"
            style={{ animationDelay: "1.7s" }}
          >
            Someone obtaining QiQi from a gacha wish, one of the worst 5 star
            characters in the game.
          </p>
          <hr className="animate" style={{ animationDelay: "2.9s" }} />
          <h2 className="animate bottom" style={{ animationDelay: "4.5s" }}>
            WARNING: Get ready for a long essay: I am quite passionate about
            Genshin, especially about its problems.
          </h2>
          <p className="animate bottom" style={{ animationDelay: "5.7s" }}>
            Gacha. Also known as &quot;lootboxes&quot;, it&apos;s Genshin
            Impact&apos;s main source of income. This form of monetisation is
            arguably one of the worst, as the probability of a decent reward is,
            usually, extremely low (in the case of Genshin Impact, 0.6% for a
            5-star). Although there is a &quot;pity&quot; system where the
            chances of getting a 5-star item/character increases by 6% every
            wish, starting from 74 wishes without a 5-star all the way until 90
            wishes, where the 5-star chance is guaranteed (although it is 64-80
            for the weapon wishes). There is also a 50/50 chance of you getting
            the promoted 5-star character which is guaranteed after you
            &quot;lose&quot; (will be reset every time you &quot;win&quot;) the
            50/50.
            <br />
            <br />
            You may wonder how this costs lots of money, and that is a great
            question. For the first time that you buy the most expensive pack,
            you will get 12,960 primogems (Genshin Impact in-game currency) for
            AU$159.99. This amount is changed to 8,080 primogems per AU$159.99
            after the first purchase. 12,960 and 8,080 might sound like a lot,
            but it really isn&apos;t. One single &quot;pull&quot; (slang for
            wish in the Genshin community) costs 160 primogems, and 10 cost
            1,600. To get to 74 wishes, you will need to spend 11,840 primogems,
            and that will only give you a 50.4% chance of getting a 5-star. Add
            that to the 50% chance of getting the desired character and you get
            a 25.2% chance with 74 pulls. In the very very worst case scenario,
            where you hit &quot;hard&quot; (90) pity both times and lose the
            50/50, you will need to spend 28,800 primogems which costs AU$480.
            <br />
            <br />
            One factor which propels some players to spend thousands on a single
            character, is constellations. After obtaining any character, you can
            re-obtain them 6 more times to get buffs to damage, defense,
            healing, HP (or health or hit points for the boomers reading this)
            and more. Using that worst case scenario before, this would cost
            someone aiming to C6 (obtain 6 constellations on a character which
            is the maximum) any single 5-star character a grand total of 201,600
            primogems or AU$4,000. And that&apos;s assuming that they used the
            first-time package bonus. If that player had bought that pack
            before, it would still cost the same (assuming that they don&apos;
            account for the excess primogems with buying cheaper packs for
            maximum efficiency since I rounded the numbers up while doing the
            maths for this). Even using the most efficient strategy combined
            with the first-time pack bonus, it would still cost AU$3,920 to C6 a
            5-star.
            <br />
            <br />
            All 5-stars come with a signature weapon, and the weapon
            banner&apos;s (a banner is the thing that you wish on) mechanics are
            a bit different. There are 2 promoted 5-stars, so there is a 75%
            chance of getting one, but the rate of getting the desired weapon is
            only 37.5%. The 75/25 pity system is also different because they use
            a mechanic named &quot;Epitomised Path&quot;, which guarantees
            winning the 37.5/62.5 chance of getting the wanted promoted weapon
            after two losses. So in the worst case scenario (hitting 80 pity and
            losing 37.5/62.5 twice), getting a limited 5-star weapon would cost
            38,400 primogems or AU$640. Like characters, multiple weapons can be
            combined to buff damage or support, for a total of 5 weapons to be
            combined for the maximum &quot;refinement&quot;. The worst case for
            R5&apos;ing a weapon would cost 192,000 primogems or AU$3,840
            (first-time purchase bonus included). Without the bonus, there would
            be no difference except that there would be more excess primogems
            with the bonus.
            <br />
            <br />
            In total, the cost of C6&apos;ing a 5-star character and R5&apos;ing
            their signature weapon would cost a total of 393,600 primogems or
            AU$7840 in the worst scenario. Using the most efficient method with
            the first purchase bonus for the character, it would still cost
            393,600 primogems but the price in real money would be reduced to
            AU$7760 which isn&apos;t really a big difference.
            <br />
            <br />
            If you&apos;re here after reading the previous 5 paragraphs, good
            job! These paragraphs were really technical and long, so a
            non-Genshin player would probably have to expend a lot of time to
            understand them. Sorry, but there isn&apos;t really a good way to
            explain Genshin&apos;s gacha system without getting too technical
            because, as mentioned in the warning, I am very passionate about
            Genshin and also because I wanted to emphasise the badness of
            Genshin&apos;s business model.
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
            <p style={{ marginLeft: "1.2rem", display: "inline" }}>
              Go to the{" "}
            </p>
            <Link href="/problems">
              <button className="btn" style={{ padding: "0 0.5rem" }}>
                main problems menu
              </button>
            </Link>{" "}
          </div>
        </main>
      </div>
    </>
  );
};

export default Gacha;
