import Head from "next/head";
import { useState } from "react";

// page imports
import menu from "./menu.js";
import header from "./header.js";
import facts from "./facts.js"
import skills from "./skills.js";
import portfolio from "./portfolio.js";
import footer from "./footer.js";


export default function Home() {
  const [darkMode, setDarkMode] = useState(true);
  const featureFlags = {
    facts: true,
    tools: true,
    langs: true,
    vers: true,
    quals: false,
    portfolio: false,
  }

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Elena Thomas</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className=" bg-white px-10 dark:bg-gray-900 md:px-20 lg:px-40 dark:text-white">
        <section id="whoami">
          {menu(setDarkMode, darkMode)}
        </section>
        <section>
          {header()}
        </section>
        <section id="facts">
          {facts(featureFlags)}
        </section>
        <section id="skills">
          {skills(featureFlags)}
        </section>
        <section id="portfolio">
          {portfolio(featureFlags)}
        </section>
        <section>
          {footer()}
        </section>
      </main>
    </div>
  );
}
