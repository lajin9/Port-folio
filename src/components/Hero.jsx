import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const indianGreetings = [
  "नमस्ते", // Hindi
  "வணக்கம்", // Tamil
  "നമസ്കാരം", // Malayalam
  "ನಮಸ್ಕಾರ", // Kannada
  "హలో", // Telugu
  "नमस्कार", // Marathi
  "ਸਤ ਸ੍ਰੀ ਅਕਾਲ", // Punjabi
  "નમસ્તે", // Gujarati
  "নমস্কাৰ", // Assamese
  "ପ୍ରଣାମ", // Odia
  "مرحبا", // arabic
  "Hello",
];

const Hero = () => {
  const [greeting, setGreeting] = useState(indianGreetings[0]);

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      index += 1;
      if (index < indianGreetings.length) {
        setGreeting(indianGreetings[index]);
      } else {
        clearInterval(interval);
      }
    }, 150);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            <span
              className="inline-block"
              style={{ minWidth: "100px", textAlign: "center" }}
            >
              {greeting}
            </span>
            , I'm <span className="text-[#915EFF]">Lajin</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I develop scalable RESTful and GraphQL APIs, <br className="sm:block hidden" />
            architect efficient backend systems, and optimize database performance.
          </p>
        </div>
      </div>



      <ComputersCanvas />

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
