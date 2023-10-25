import { useEffect, useState } from "react";

const useBurgerMenu = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    useEffect(() => {
        const menu = document.querySelector(".burgerMenu");
        if (menu) {
            if (isMenuOpen) {
                menu.classList.add("show");
            } else {
                menu.classList.remove("show");
            }
        }
    }, [isMenuOpen]);
    return {
        toggleMenu,
    };
};

export default useBurgerMenu;