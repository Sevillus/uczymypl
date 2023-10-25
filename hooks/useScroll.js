import { useEffect, useState } from "react";

const useScroll = () => {
    const [scrolled, setScrolled] = useState(false);

    //hiding mobile menu when user is scrolling page
    useEffect(() => {
        const header = document.querySelector("header");

        function handleScroll() {
            if (window.scrollY > 0 && !scrolled) {
                setScrolled(true);
                header.classList.add("-top-12");
                header.classList.remove("top-0");
            } else if (window.scrollY === 0 && scrolled) {
                setScrolled(false);
                header.classList.add("top-0");
                header.classList.remove("-top-12");
            }
        }

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [scrolled]);
};

export default useScroll;
