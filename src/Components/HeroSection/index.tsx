import { useEffect, useRef, useState } from "react"
import Button from "../Atomic/Button/button"
import { motion as M, useInView } from "framer-motion"
import Link from "next/link"
import ScrollIntoView from "react-scroll-into-view"

const HeroSection = () => {
  /*
   *  Detect when menu bar is in viewport or out of viewport
   */
  const ref = useRef(null)
  const isInView = useInView(ref)

  const [x, setX] = useState<number>(-600)
  const [y, setY] = useState<number>(0)

  useEffect(() => {
    if (!isInView) {
      //whenever the parent div goes out of view
      setX(-600)
    }
  }, [isInView])

  return (
    <div
      className="w-full  h-fit md:fit md:flex justify-between gap-4 items-center"
      ref={ref}
    >
      {/* LEFT */}

      {isInView && (
        <M.div
          exit={{}}
          initial={{
            x: x,
          }}
          animate={{ x: 0 }}
          transition={{ duration: 1 }}
          className="w-full h-fit md:w-[50%] md:fit flex flex-col items-center justify-center mt-10 sm:mt-0"
        >
          <h1 className="max-w-2xl mb-4 pl-6 pr-6 text-xl text-center font-extrabold tracking-tight leading-none md:text-3xl xl:text-5xl">
            Security Solutions for businesses and individuals
          </h1>
          <p className="max-w-2xl mb-6 pl-6 pr-6 font-light text-gray-500 text-center lg:mb-8 md:text-lg lg:text-xl">
            We hold a reputation for both effective security solutions and the
            use of innovative technology in the protection of life and property
          </p>

          {/* buttons */}
          <div className="w-full flex justify-center">
            <ScrollIntoView selector="#services" alignToTop={true}>
              <Button title="Our Services" />
            </ScrollIntoView>

            <Link href="https://wa.me/256773576624">
              <div className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100">
                Speak to Sales
              </div>
            </Link>
          </div>
        </M.div>
      )}

      {/* RIGHT*/}
      {isInView && (
        <M.div
          initial={{
            x: 600,
          }}
          animate={{ x: 0 }}
          transition={{ duration: 1 }}
          className="w-full h-fit md:w-[50%] md:h-fit flex justify-center items-center"
        >
          {/* hero image graphic */}
          <img
            alt="security guard"
            src="./perazimwebheroguard.png"
            style={{ width: "100%", height: "100%", objectFit: "contain" }}
          />
        </M.div>
      )}
    </div>
  )
}

export default HeroSection
