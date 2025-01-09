"use client";
import ArrowRight from "@/assets/arrow-right.svg";
import Image from "next/image";
import starImage from "@/assets/star.png";
import springImage from "@/assets/spring.png";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export const CallToAction = () => {
  const sectionRef = useRef(null) ; 
  const { scrollYProgress } = useScroll({
    target: sectionRef, 
    offset: ["start end", "end start"]
  })

  const translateY = useTransform(scrollYProgress , [0, 1], [150, -150]) ; 

  return (
    <section ref={sectionRef} className="bg-gradient-to-b from-white to-[#D2DCFF] py-24 overflow-x-clip">
      <div className="container">
        <div className="relative">
          <h2 className="title">Sign Up For Free Today</h2>
          <p className="para my-10">
            Ease Your Work , And Prepare Exacdtly What Is ReQuired With An App
            Designed To Help You Download All Your Required Resources For Your
            Exams .
          </p>
          <motion.img
            src={starImage.src}
            alt="starImage"
            className="hidden md:block absolute md:-left-[280px] md:-top-[137px]"
            width={360}
            style={{
              translateY
            }}
          />
          <motion.img
            src={springImage.src}
            alt="Spring Image"
            width={360}
            className="hidden md:block absolute -right-[270px] -top-[19px]"
            style={{
              translateY
            }}
          />
        </div>
        <div className="flex justify-center gap-2">
          <button className="btn btn-primary">Get for free</button>
          <button className="btn btn-text">
            <span className="inline-flex items-center gap-1">
              Learn more
              <ArrowRight className="w-5 h-5 " />
            </span>
          </button>
        </div>
        <div></div>
      </div>
    </section>
  );
};
