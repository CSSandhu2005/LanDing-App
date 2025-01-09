"use client";
import productBanner from "@/assets/product-image.png";
import Image from "next/image";
import pyramid from "@/assets/pyramid.png";
import tube from "@/assets/tube.png";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
export const ProductShowcase = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const translateY = useTransform(scrollYProgress, [0, 1], [-150, 150]);
  return (
    <section
      ref={sectionRef}
      className="bg-gradient-to-b from-[#FFFFFF] to-[#D2DCFF] py-24 overflow-x-clip"
    >
      <div className="container">
        <div className="md:max-w-[540px] md:mx-auto">
          <div className="flex justify-center">
            <div className="tag">All College Notes</div>
          </div>
          <h2 className="text-center text-3xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text my-5 md:text-[56px] md:leading-[60px] md:tracking-tight md:py-1">
            All In One Place For College Notes
          </h2>
          <p className="text-center text-[010ED3E] leading-[30px] tracking-tighter text-[20px]">
            Now Efforlessly Get All Your College Notes In One Place Without The
            Need To Hunt On The Internet
          </p>
        </div>
        <div className="relative">
          <Image src={productBanner} alt="Product Image" />
          <motion.img
            src={pyramid.src}
            alt="Pyramid Image"
            height={220}
            width={220}
            className="hidden md:block absolute -right-36 -top-32"
            style={{
              translateY,
            }}
          />
          <motion.img
            src={tube.src}
            height={242}
            width={242}
            className="absolute md:block hidden bottom-32 -left-36"
            alt="Tube Image"
            style={{
              translateY, 
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
