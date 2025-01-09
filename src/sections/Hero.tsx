"use client";
import ArrowRight from "@/assets/arrow-right.svg";
import Image from "next/image";
import WheelImage from "@/assets/cog.png";
import Cylinder from "@/assets/cylinder.png";
import noodleImage from "@/assets/noodle.png";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export const Hero = () => {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start end", "end start"],
  });

  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);
  return (
    <section
      ref={heroRef}
      className="pt-8 pb-20 md:pb-10 bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#183EC2,#EAEEFE_100%)] overflow-x-clip"
    >
      <div className="container">
        <div className="md:flex items-center">
          <div className="md:w-[478px]">
            <div className="tag">Version 1.0 Is Here</div>
            <h1 className="md:text-8xl font-bold tracking-tighter text-5xl bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text mt-6">
              Notes Made Easy
            </h1>
            <p className="text-xl text-[#010D3E] tracking-tight mt-6">
              Get free access to study notes within a specified range and time
              period. Download and use them at no cost, while they are available
              for a limited duration!
            </p>
            <div className="flex gap-1 mt-[30px] items-center">
              <button className="btn btn-primary">Free Notes</button>
              <button className="btn btn-text gap-1">
                <span>Learn More</span>
                <ArrowRight className="h-5 w-5" />
              </button>
            </div>
          </div>
          <div className="mt-20 md:mt-0 md:h-[648px] md:flex-1 relative">
            <motion.img
              src={WheelImage.src}
              alt="Cog Image"
              className="md:h-full md:absolute md:w-auto md:max-w-none md:-left-6 lg:-left-0"
              animate={{
                translateY: [-30, 30],
              }}
              transition={{
                repeat: Infinity,
                repeatType: "mirror",
                duration: 3,
                ease: "easeInOut",
              }}
            />
            <motion.img
              src={Cylinder.src}
              height={220}
              width={220}
              alt="Cylinder Image"
              className="hidden md:block absolute -top-0 -left-32"
              style={{
                translateY: translateY 
              }}
            />
            <motion.img
              src={noodleImage.src}
              width={220}
              alt="Noodle Image"
              className="hidden lg:block absolute top-[524px] left-[448px] rotate-[30deg]"
              style={{
                rotate: 30,
                translateY: translateY
              }}
            ></motion.img>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
