import MenuIcon from '@mui/icons-material/Menu';
import Link from "next/link";

const Navbar = () => {
    return (
        <div>
            <div className={"hidden lg:flex gap-7"}>
                <Link href={"/teacher/schedule"} className={"navbar__btn"}>Plan zajęc</Link>
                <Link href={"/teacher/students"} className={"navbar__btn"}>Uczniowie</Link>
                <Link href={"/teacher/history"} className={"navbar__btn"}>Historia</Link>
            </div>
        </div>
    )
}
export default Navbar
