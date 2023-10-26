import React from 'react'
import Image from "next/image";

const UserProfile = ( {name, img, clickHandler } ) => {
    return (
        <div
            className={"flex-between gap-3 cursor-pointer"}
            onClick={clickHandler}
        >
            <Image
                src={img}
                width={35}
                height={35}
                alt={"profile image"}
                className={"rounded-full"}
            />
            <h1>{name}</h1>
        </div>
    )
}
export default UserProfile
