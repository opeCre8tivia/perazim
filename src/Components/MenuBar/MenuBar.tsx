import React, { useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import MenuBarContent from "../MenuBarContent/MenuBarContent";

const MenuBar = () => {
  /*
   *  Detect when menu bar is in viewport or out of viewport
   */
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <>
      <motion.div
        initial={{ height: 0 }}
        animate={{ height: "100px" }}
        transition={{ duration: 1 }}
        ref={ref}
        className="w-full h-[80px] flex items-center px-10 bg-pink-500 font-bold text-green-300"
      >
        <MenuBarContent />
      </motion.div>
      {!isInView && (
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          exit={{ opacity: 0 }}
          className="w-full h-[100px] fixed top-0 left-0 flex items-center px-10 bg-blue-500 font-bold text-green-300"
        >
          MENU BAR
        </motion.div>
      )}
    </>
  );
};

export default MenuBar;
