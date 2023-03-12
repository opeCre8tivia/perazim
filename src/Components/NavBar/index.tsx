import React, { useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import NavBarContent from "../NavBarContent";

const NavBar = () => {
  /*
   *  Detect when menu bar is in viewport or out of viewport
   */
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <>
      <motion.div
        initial={{ height: 0 }}
        animate={{ height: "60px" }}
        transition={{ duration: 1 }}
        ref={ref}
        className="w-full h-[60px] flex items-center"
      >
        <NavBarContent />
      </motion.div>
      {!isInView && (
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          exit={{ opacity: 0 }}
          className="w-full h-[60px] fixed top-0 left-0 flex items-center"
        >
          <NavBarContent />
        </motion.div>
      )}
    </>
  );
};

export default NavBar;
