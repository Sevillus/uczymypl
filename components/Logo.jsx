import React from 'react'
import Link from "next/link";

const Logo = () => {
    return (
        <Link className={"Logo navbar__btn"} href={"/user"}>Uczymy.pl</Link>
    )
}
export default Logo
