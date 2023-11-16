"use client";

import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import { useState } from "react";
import { useEffect, useRef } from "react";
import youtube1 from "../Assets/youtube1.svg";
import youtube2 from "../Assets/youtube2.svg";
import youtube3 from "../Assets/youtube3.svg";
import youtube4 from "../Assets/youtube4.svg";
import Image from "next/image";
import Link from "next/link";

function ContactForm() {
  const [state, handleSubmit] = useForm("xaygjzoa");

  const [isDarkMode, setIsDarkMode] = useState(false);

  function LazyLoadedImage({ src, alt }) {
    const imgRef = useRef();

    useEffect(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              imgRef.current.src = src;
              observer.unobserve(imgRef.current);
            }
          });
        }
        // { rootMargin: "0px 0px 100px 0px" } // Adjust rootMargin as needed
      );

      if (imgRef.current) {
        observer.observe(imgRef.current);
      }

      return () => {
        if (imgRef.current) {
          observer.unobserve(imgRef.current);
        }
      };
    }, [src]);

    return <img ref={imgRef} alt={alt} className="h-20 px-4" />;
  }

  const variable = {
    // fontFamily: 'Artifika, serif',
    // fontFamily: 'Dancing Script, cursive',
    fontFamily: "Kaushan Script, cursive",
    fontFamily: "Lobster, cursive",
    // fontFamily: 'Montserrat, sans-serif',
    // fontFamily: 'PT Sans Narrow, sans-serif',
    // fontFamily: 'Rubik Iso, cursive',
  };

  function toggleDarkMode() {
    setIsDarkMode(!isDarkMode);
    const body = document.body;
    body.classList.toggle("black-screen");
  }

  if (state.succeeded) {
    return (
      <div>
        {" "}
        <p className="text-center mt-28 font-extrabold text-2xl text-violet-400">
          Thank you for your feedback!!
        </p>
        <Link
          href="/"
          className="flex justify-center items-center mt-10 font-bold text-xl"
        >
          <h1 className=" text-white bg-red-500 p-2 rounded-md">
            Back to Home!
          </h1>
        </Link>
      </div>
    );
  }

  return (
    <>
      <div className="m-4 flex justify-end ">
        <button
          className="bg-green-500 text-white flex  font-bold p-2 rounded-md "
          onClick={() => toggleDarkMode()}
        >
          {isDarkMode ? (
            <>{/* <img className="h-6 w-6 " src={light} /> */}</>
          ) : (
            <>{/* <img className="h-6 w-6" src={dark} /> */}</>
          )}
        </button>
        <span
          className={`bg-green-500 p-2 select-none rounded-md ml-5 font-bold ${
            isDarkMode ? "dark-mode" : "light-mode"
          }`}
        >
          {/* <NavLink to="/react">HOME</NavLink> */}
        </span>
      </div>
      <div className="flex justify-center items-center font-bold text-violet-500 text-2xl">
        {/* <LazyLoadedImage src={booking} /> */}
        <span className="px-5" style={variable}>
          Feedback-Form
        </span>
      </div>
      <form className="mt-14" onSubmit={handleSubmit}>
        <div className="text-center"></div>

        <div className="flex justify-center items-center mt-10">
          <input
            className="bg-slate-300 sm:w-96 w-80 h-10 rounded-lg"
            id="email"
            type="email"
            name="email"
            placeholder=" Email"
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
        </div>

        <div className="flex justify-center items-center mt-10">
          <input
            className="bg-slate-300 sm:w-96 w-80 h-10 rounded-lg"
            id="phone"
            type="phone"
            name="phone"
            placeholder=" Mobile-no"
          />
          <ValidationError prefix="Phone" field="phone" errors={state.errors} />
        </div>


        <div className="flex justify-center items-center mt-10">
          <input
            className="bg-slate-300 sm:w-96 w-80 h-10 rounded-lg"
            id="text"
            type="text"
            name="text"
            placeholder=" Enter your name "
          />
          <ValidationError prefix="Name" field="name" errors={state.errors} />
        </div>

        <div className="flex justify-center items-center mt-10">
          <textarea
            className="bg-slate-300 sm:w-96 w-80 h-40 rounded-lg"
            id="message"
            name="message"
            placeholder=" Your feedback is our priority !!"
          />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
        </div>

        <div className="flex justify-center items-center mt-10 ">
          <button
            className="bg-green-500 text-center font-bold text-white p-3 rounded-2xl"
            type="submit"
            disabled={state.submitting}
          >
            Submit
          </button>
        </div>
      </form>

      <div className=" h-10 w-11 flex sm:space-x-80 m-7 mt-14 space-x-16">
        <Image src={youtube1} />
        <Image src={youtube2} />
        <Image src={youtube3} />
        <Image src={youtube4} />
      </div>
    </>
  );
}
function Formlog() {
  return <ContactForm />;
}
export default Formlog;
