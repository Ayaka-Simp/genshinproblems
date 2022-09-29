import { NextComponentType } from "next";
import React from "react";
import styles from "../styles/NavBar.module.css";
import Link from "next/link";

const NavBar: NextComponentType = () => {
  return (
    <div className={styles.nav} id="nav">
      <div className="nav-item">
        <Link href="/" className="nav-link">
          Home
        </Link>
      </div>
      <div className="nav-item">
        <Link href="/intro" className="nav-link">
          What is Genshin?
        </Link>
      </div>
      <div className="nav-item">
        <Link href="/problems" className="nav-link">
          Genshin&apos;s problems
        </Link>
      </div>
      <div className="nav-item">
        <Link href="/conclusion" className="nav-link">
          Conclusion
        </Link>
      </div>
      <div className="nav-item">
        <Link href="/#footer">About this website</Link>
      </div>
    </div>
  );
};

export default NavBar;
