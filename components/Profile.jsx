"use client";
import React, { useState } from "react";
import { signIn, signOut, useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import Image from "next/image";
import AddStudent from "./AddStudent";

const Profile = (props) => {
    const { name, img } = props;
    const [showMenu, setShowMenu] = useState(false);

    const clickHandler = () => {
        setShowMenu((prevShowMenu) => !prevShowMenu);
    };

    if (name) {
        return (
            <div>
                <div
                    className={"flex-between gap-3 cursor-pointer"}
                    onClick={clickHandler}
                >
                    <Image src={img} width={35} height={35} className={"rounded-full"} />
                    <h1>{name}</h1>
                </div>
                {showMenu && (
                    <div className={"absolute flex flex-col items-start gap-3"}>
                        <button>Ustawienia</button>
                        <button
                            type="button"
                            onClick={() => {
                                signOut({ callbackUrl: "http://localhost:3000" });
                            }}
                            className="outline_btn "
                        >
                            Wyloguj
                        </button>
                    </div>
                )}
            </div>
        );
    } else {
        return (
            <button
                type="button"
                onClick={() => {
                    signIn("google", { callbackUrl: `/` });
                }}
            >
                Zaloguj się
            </button>
        );
    }
};

export default Profile;
