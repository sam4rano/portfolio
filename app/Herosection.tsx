"use client";
import Image from "next/image";
import React from "react";
import img from "../public/samoye.png";
import { Typewriter } from "react-simple-typewriter";
import { SocialIcon } from "react-social-icons";

const Herosection = () => {
  return (
    <section className="w-full bg-slate-200">
      <div className="flex flex-row sm:flex-col md:flex-col align-middle items-center max-w-6xl w-full mx-auto p-4 gap-4 relative">
        <div className="flex align-middle justify-center items-center relative w-[360px] h-[400px]">
          <div className="rounded-full bg-blue-900 w-80 h-80 inset-0"></div>
          <div className="absolute inset-0">
            <Image
              src={img}
              width={300}
              height={240}
              alt="herosection picture"
              priority
            />
          </div>
        </div>
        <div className="flex flex-col justify-center align-middle items-center gap-4">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
            I am Samuel Oyerinde
          </h2>
          <div className="text-orange-400 font-bold text-lg">
            <Typewriter
              words={["Software Engineer", "Researcher"]}
              loop={5}
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </div>
          <div className="flex flex-col gap-4">
            <p className="text-center">
              Software engineer with years of years of
              experience designing, developing, and deploying scalable,
              efficient, and reliable software solutions an AI enthusiast.
            </p>
            <div className="flex flex-row justify-center align-middle items-center gap-4">
              <SocialIcon
                url="https://www.linkedin.com/in/samuel-oyerinde/"
                target="_blank"
                rel="noopener noreferrer"
              />
              <SocialIcon
                url="https://github.com/sam4rano"
                target="_blank"
                rel="noopener noreferrer"
              />
              <SocialIcon
                url="https://x.com/samueloye19"
                target="_blank"
                rel="noopener noreferrer"
              />
              <SocialIcon
                url="mailto:oyerindesamuelabiodun@gmail.com"
                className="cursor-pointer"
                target="_blank"
                rel="noopener noreferrer"
              />
            </div>
          </div>
        </div>
        <br />
      </div>
    </section>
  );
};

export default Herosection;
