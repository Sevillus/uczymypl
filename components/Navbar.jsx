import React from 'react'
import Link from "next/link";

const Navbar = () => {
    return (
        <div className={"flex gap-7"}>
            <Link href={"/teacher/schedule"} className={"navbar__btn"}>Plan zajęc</Link>
            <Link href={"/teacher/students"} className={"navbar__btn"}>Uczniowie</Link>
            <Link href={"/teacher/history"} className={"navbar__btn"}>Historia</Link>
        </div>
    )
}
export default Navbar
