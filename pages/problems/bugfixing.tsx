import { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import NavBar from "../../components/navbar";
import navStyles from "../../styles/NavBar.module.css";
import styles from "../../styles/Problems.module.css";

const BugFixing: NextPage = () => {
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
          HoYoverse Bugfixing Priorities | Genshin Impact&apos;s problems
        </title>
        <meta
          name="description"
          content="HoYoverse's priorities are unclear. They fix bugs that sort of enhance the players' experience, but they ignore some that arguably ruin the fun."
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
            HoYoverse&apos;s weird bugfixing and update priorities
          </h1>
        </header>
        <main>
          <Image
            src="https://i.redd.it/gjf6pjr1i9p71.gif"
            alt="Someone obtaining QiQi from a gacha wish, one of the worst 5 star characters in the game."
            width="570"
            height="270"
            className="animate left"
            style={{ animationDelay: "1.7s" }}
          />
          <p
            id={styles.caption}
            className="animate right"
            style={{ animationDelay: "1.7s" }}
          >
            A glitch (patched since 2.2) where Kokomi (a Genshin character)
            could infinitely walk on water.
          </p>
          <hr className="animate" style={{ animationDelay: "2.9s" }} />
          <h2 className="animate bottom" style={{ animationDelay: "4.5s" }}>
            WARNING: Get ready for another long essay: This topic isn&apos;t as
            diverse but I go into extreme detail about one issue.
          </h2>
          <p className="animate bottom" style={{ animationDelay: "5.7s" }}>
            Genshin Impact gets lots of bugs. That&apos;s normal. All games have
            bugs, and most of them get patched in development (but some of them
            aren&apos;t found and left in the game). Genshin Impact is like
            this. But unfortunately, some bugs make the game more fun, and
            HoYoverse seems to like fixing these instead of the ones that ruin
            the fun. For example, the Kokomi water-walking glitch or the Albedo
            (another Genshin character) flower jump glitch as shown here.
            <br />
            <br />
            <Image
              src="/images/superjump.gif"
              alt="Albedo's superjump glitch"
              width="320"
              height="180"
            />{" "}
            <br />
            <br />
            These are very fun and cool, it&apos;s so sad that HoYoverse chose
            to patch these.
            <br />
            <br />
            On the other hand, there are the controversial, greedy, weird and
            annoying ones. Take the Raiden Shogun/Beidou synergy. Raiden Shogun
            is one of the most powerful characters in the game (she&apos;s
            5-star obviously), and beta testers leaked a combo with Beidou (a
            decently powerful 4-star character). This is Raiden&apos;s C6
            description:
            <br />
            <br />
            &quot;While in the Musou Isshin state applied by Secret Art: Musou
            Shinsetsu, attacks by the Raiden Shogun that are considered part of
            her Elemental Burst will decrease all nearby party members&apos;
            (but not including the Raiden Shogun herself) Elemental Burst CD by
            1s when they hit opponents. This effect can trigger once every 1s,
            and can trigger a total of 5 times during the state&apos;s duration.
            &quot;
            <br />
            <br />
            This is Raiden&apos;s old C6 description:
            <br />
            <br />
            &quot;While in the Musou Isshin state applied by Secret Art: Musou
            Shinsetsu, the Raiden Shogun&apos;s Normal, Charged, and Plunging
            Attacks will decrease all nearby party members&apos; (but not
            including the Raiden Shogun herself) Elemental Burst CD by 1s when
            they hit opponents.&quot;
            <br />
            <br />
            And this is Beidou&apos;s attack description:
            <br />
            <br />
            &quot;Recalling her slaying of the great beast Haishan, Beidou calls
            upon that monstrous strength and the lightning to create a
            Thunderbeast&apos;s Targe around herself, dealing Electro DMG to
            nearby opponents. Thunderbeast&apos;s Targe When Normal and Charged
            Attacks hit, they create a lightning discharge that can jump between
            opponents, dealing Electro DMG. Increases the character&apos;s
            resistance to interruption, and decreases DMG taken. A maximum of 1
            lightning discharge can be triggered per second.&quot;
            <br />
            <br />
            Beidou&apos;s &quot;Elemental Burst&quot; (ultimate attack which
            requires it to be &quot;charged&quot; with energy) costs quite a lot
            of energy (80 energy), and Raiden is really good at generating
            energy. Unfortunately, Raiden&quot;s burst does not trigger
            Beidou&apos;s burst&apos;s lightning discharge. This is
            disappointing, since Raiden&apos;s C6&apos;s old description was
            worded exactly the same as Beidou&apos;s burst. But instead of
            making Beidou work with Raiden, they changed Raiden&apos;s C6
            description. So not only are they fixing an issue in the opposite
            way of improving the players&apos; experience, they are also writing
            misleading descriptions and changing them after the character&apos;s
            release.
            <br />
            <br />
            Since Genshin is a gacha game, and many people spend money on
            characters that they think will work well with other characters,
            that means that some people spent money (hundreds or even thousands
            of dollars) on the Raiden Shogun just for her possible synergy with
            Beidou (descriptions of characters and their skills are revealed
            before their in-game release). Combined with the fact that Raiden
            and Beidou worked in the Closed Beta Test, this shows that HoYoverse
            are intentionally doing things that scam players and ruin their
            experience. I&apos;m not going to go too far on this topic, since
            arguments about this get very heated very fast, but search it up if
            you&apos;re curious about this for whatever reason.
            <br />
            <br />
            Again, sorry for the long and technical essay. Kudos to you if you
            have read this far! These problems only get worse in the next page,
            so be warned.
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

export default BugFixing;
