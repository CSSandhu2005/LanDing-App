import Image from "next/image";
import Logo from "@/assets/logosaas.png";

import X from "@/assets/social-x.svg";
import Pin from "@/assets/social-pin.svg";
import Link from "@/assets/social-linkedin.svg";
import You from "@/assets/social-youtube.svg";
import Insta from "@/assets/social-insta.svg";

export const Footer = () => {
  return (
    <footer className="bg-black text-[#BCBCBC] text-sm py-10 text-center">
      <div className="container">
        <div className="inline-flex relative before:content-[''] before:top-2 before:bottom-0 
        before:blur before:w-full before:bg-[linear-gradient(to_right,#F87BFF,#FB92CF,#FFDD9B,#C2F0B1,#2FB8FE)] before:absolute">
          <Image src={Logo} alt="Saas Logo" width={40} className="relative"/>
        </div>
        <nav className="flex flex-col mt-6 gap-6 md:flex-row md:justify-center">
          <a href="#">About</a>
          <a href="#">Features</a>
          <a href="#">Customer</a>
          <a href="#">Pricing</a>
          <a href="#">Careers</a>
          <a href="#">About-Us</a>
        </nav>
        <div className="flex gap-6 justify-center my-6">
          <X />
          <Pin />
          <Link />
          <You />
          <Insta />
        </div>
        <p>
          &copy; 2025 Made My Chiranjeev Singh Sandhu
        </p>
      </div>
    </footer>
  );
};
