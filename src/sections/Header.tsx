import ArrowRight from "@/assets/arrow-right.svg";
import Image from "next/image";
import Logo from "@/assets/logosaas.png";
import Menu from "@/assets/menu.svg";
export const Header = () => {
  return (
    <header className="sticky top-0 backdrop-blur-sm z-20">
      <div className="flex justify-center items-center py-3 bg-black text-white text-sm gap-3">
        <p className="text-white/60 hidden md:inline">
          Download your notes and boost your marks
        </p>
        <div className="inline-flex items-center gap-1">
          <h1>Get Started For Free</h1>
          <ArrowRight className="h-4 w-4 inline-flex items-center justify-center" />
        </div>
      </div>
      <div className="py-5">
        <div className="container">
          <div className="flex items-center justify-between">
            <Image src={Logo} height={40} width={40} alt="saas logo" />
            <Menu className="inline-flex justify-center items-center h-5 w-5 md:hidden" />
            <nav className="hidden md:flex gap-6 text-black/60 items-center">
              <a href="#">About</a>
              <a href="#">Features</a>
              <a href="#">Notes</a>
              <a href="#">Updates</a>
              <a href="#">Help</a>
              <button className="bg-black px-4 py-2 rounded-lg text-white font-medium inline-flex items-center justify-center tracking-tight">
                Get For Free
              </button>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
