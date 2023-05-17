import React, { FormEvent, useRef } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

type Props = {};

const Contact = (props: Props) => {
  const form: any = useRef();

  const notify = () => toast("Email sent successfully");

  const sendEmail = (e: any) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_hd1x509",
        "template_rz2t1hf",
        form.current,
        "bhcs8KRNTyxHgcgrC"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("email sent");
          notify();
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <section id="contact">
      <div
        id="contact"
        className="w-full h-fit  flex justify-center items-start flex-wrap bg-blue-950"
      >
        {/* large text */}
        <div className=" w-full h-full  sm:min-h-[400px]  flex flex-col justify-center items-center sm:w-[50%] py-10 sm:py-2 ">
          <h1 className="text-[30px] text-white font-extrabold w-[80%] text-center">
            We would love to hear from you
          </h1>

          <p className=" font-bold text-lg text-white mt-10 underline">
            Reach us on
          </p>
          <ul>
            <li className="text-white">Mobile: +256773576624</li>
            <li className="text-white">Email: info@perazim.com</li>
          </ul>
          {/* <p className=" font-bold text-lg text-white mt-5 underline">
            Location
          </p> */}
        </div>

        {/* devider */}
        <div className=" sm:hidden w-full flex justify-center items-center">
          <div className=" min-w-[25%] my-4 h-0.5 border-t-0 bg-white  "></div>
          <div className="mx-6 text-white"> OR</div>
          <div className=" min-w-[25%] my-4 h-0.5 border-t-0 bg-white "></div>
        </div>
        {/* text */}
        <div className="w-full sm:bg-transparent sm:w-[50%] h-full p-4 ">
          <form
            ref={form}
            onSubmit={sendEmail}
            className=" w-full sm:w-[80%] bg-transparent h-[500px]"
          >
            <label className="text-white font-medium ">Enter your name</label>
            <input
              type="text"
              name="user_name"
              className="w-full h-[40px] bg-white mb-4 "
            />
            <label className="text-white font-medium ">Enter your email</label>
            <input
              type="email"
              name="user_email"
              className="w-full h-[40px] bg-white  mb-4 "
            />
            <label className="text-white font-medium ">Enter Message</label>
            <textarea name="message" className="w-full min-h-[200px]" />
            <button
              type="submit"
              className="bg-transparent hover:bg-teal-300 text-white font-semibold hover:text-white py-2 px-4 border border-teal-300 hover:border-transparent rounded my-4"
            >
              Send
            </button>
          </form>
        </div>
        <ToastContainer theme="dark" />
      </div>
    </section>
  );
};

export default Contact;
