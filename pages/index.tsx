import type { NextPage } from "next";
import Head from "next/head";
import HeroSection from "../src/Components/HeroSection";
import NavBar from "../src/Components/NavBar";

const Home: NextPage = () => {
  return (
    <div className={`bg-gray-20`}>
      <Head>
        <title>Perazim Security </title>
        <meta
          name="description"
          content="Offering Security Services around kampala and uganda as a whole"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        {/* modern responsive dynamic menu bar */}
        <nav style={{ height: "100px" }}>
          <NavBar />{" "}
        </nav>

        {/* carousel section */}
        <section>
          <HeroSection />
        </section>

        {/* business types that we serve */}
      </main>
    </div>
  );
};

export default Home;
