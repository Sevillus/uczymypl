"use client";
import useBurgerMenu from "../../../hooks/useBurgerMenu";
import useScroll from "../../../hooks/useScroll";
import MobileHeader from "./mobile/MobileHeader";
import DesktopHeader from "./desktop/DesktopHeader";

const Header = ({ session }) => {
  const name = session?.user.name;
  const img = session?.user.image;
  const { toggleMenu } = useBurgerMenu();
  useScroll();

  return (
    <header className={"flex flex-col lg:flex-row lg:justify-between fixed lg:sticky top-0 w-full h-24 lg:h-fit padding-x lg:py-4 bg-slate-700 text-white ease-out duration-300 z-50 "} >
      <MobileHeader toggleMenu={toggleMenu} name={name} img={img}/>
      <DesktopHeader name={name} img={img}/>
    </header>
  );
};

export default Header;
