import React, { useState } from "react"
import Button from "../Button/button"
import Link from "next/link"
import Image from "next/image"
import { MdClear, MdEast } from "react-icons/md"

type Props = {
  title: string
  caption: string
  description?: string
  uri: string
}

const ImageCard = ({ uri, title, caption, description }: Props) => {
  const [showModal, setShowModal] = useState(false)
  return (
    <div className="w-full h-fit md:w-[32%] md:h-fit bg-white ">
      <Image
        className="rounded-t-lg"
        src={uri}
        width={500}
        height={350}
        alt="image showing one of the services"
        style={{
          minWidth: "500px",
          backgroundColor: "red",
          objectFit: "cover",
        }}
      />

      <div className="p-5 h-[300px] relative bg-[#f9f9f9]">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
          {title}
        </h5>
        <div className="mb-3 text-[15px] text-justify text-gray-700 ">
          {caption}
        </div>

        <div
          onClick={() => setShowModal(true)}
          className="w-fit h-[20px] text-red-500 flex gap-2 absolute bottom-4 left-1/2 transform -translate-x-1/2"
        >
          More <MdEast size={30} />
        </div>
      </div>

      {/* modal  */}
      {showModal && (
        <div className="w-full h-[100vh] bg-[rgba(0,0,0,0.5)] z-50 fixed top-0 left-0 flex justify-center items-center">
          <div className="w-[90%] min-h-full bg-white p-10 relative ">
            <div
              className="absolute top-10 right-10 border-gray-900 rounded"
              onClick={() => setShowModal(false)}
            >
              <MdClear size={30} />
            </div>
            <div className="mt-12 w-full h-full text-gray-900">
              {description}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default ImageCard
