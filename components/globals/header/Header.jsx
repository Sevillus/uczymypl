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
    <header className={"header"} >
      <MobileHeader toggleMenu={toggleMenu} name={name} img={img}/>
      <DesktopHeader name={name} img={img}/>
    </header>
  );
};

export default Header;
