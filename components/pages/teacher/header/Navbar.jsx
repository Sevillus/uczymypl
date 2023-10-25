import MenuIcon from '@mui/icons-material/Menu';
import Link from "next/link";
import MobileMenu from "./MobileMenu";

const Navbar = () => {
    return (
        <div>
            <div className={"hidden lg:flex gap-7"}>
                <Link href={"/dashboard"} className={"navbar__btn"}>Strona główna</Link>
                <Link href={"/dashboard/schedule"} className={"navbar__btn"}>Plan zajęc</Link>
                <Link href={"/dashboard/students"} className={"navbar__btn"}>Uczniowie</Link>
                <Link href={"/dashboard/history"} className={"navbar__btn"}>Historia</Link>
            </div>
        </div>
    )
}
export default Navbar
