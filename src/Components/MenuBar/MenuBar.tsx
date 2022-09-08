import React from 'react'
import { motion } from 'framer-motion'

const MenuBar = () => {

  return (

    <motion.div drag className='w-full h-[100px] flex items-center px-10 bg-pink-500 font-bold text-green-300' >
            MENU BAR
    </motion.div>
  )
}

export default MenuBar