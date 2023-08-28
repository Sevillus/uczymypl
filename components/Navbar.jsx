import React from 'react'
import Link from "next/link";

const Navbar = () => {
    return (
        <div className={"flex gap-7"}>
            <Link href={"/user/agenda"} className={"navbar__btn"}>Terminarz</Link>
            <Link href={"/user/students"} className={"navbar__btn"}>Uczniowie</Link>
            <Link href={"/user/materials"} className={"navbar__btn"}>Materiały</Link>
        </div>
    )
}
export default Navbar
