import type { NextPage } from "next";
import Head from "next/head";
import SectionHeading from "../src/Components/Atomic/SectionHeading/sectionHeading";
import SectionTitle from "../src/Components/Atomic/SectionTitle";
import Footer from "../src/Components/Footer";
import HeroSection from "../src/Components/HeroSection";
import LeftImageSection from "../src/Components/LeftImageSection";
import NavBar from "../src/Components/NavBar";
import ServicesSection from "../src/Components/ServicesSection";

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

        <LeftImageSection />

        {/* our services */}
        <section>
          <SectionHeading heading="Our Services" />
          <ServicesSection />
        </section>

        {/* bizarre section */}
        <div className="w-full min-h-[400px]">
          <section className="bg-white dark:bg-gray-900">
            <div className="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-16 lg:px-6">
              <figure className="max-w-screen-md mx-auto">
                <svg
                  className="h-12 mx-auto mb-3 text-gray-400 dark:text-gray-600"
                  viewBox="0 0 24 27"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
                    fill="currentColor"
                  />
                </svg>
                <blockquote>
                  <p className="text-2xl font-medium text-gray-900 dark:text-white">
                    "Perazim is just awesome. It contains tons of predesigned
                    components and pages starting from login screen to complex
                    dashboard. Perfect choice for your next SaaS application."
                  </p>
                </blockquote>
                <figcaption className="flex items-center justify-center mt-6 space-x-3">
                  <img
                    className="w-6 h-6 rounded-full"
                    src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png"
                    alt="profile picture"
                  />
                  <div className="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                    <div className="pr-3 font-medium text-gray-900 dark:text-white">
                      Micheal Otai
                    </div>
                    <div className="pl-3 text-sm font-light text-gray-500 dark:text-gray-400">
                      CEO Shell Uganda
                    </div>
                  </div>
                </figcaption>
              </figure>
            </div>
          </section>
        </div>

        {/* footer */}

        <Footer />
      </main>
    </div>
  );
};

export default Home;
