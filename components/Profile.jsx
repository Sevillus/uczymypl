"use client"
import React from 'react'
import {signOut, useSession} from "next-auth/react";
import {redirect} from "next/navigation";


const Profile = (props) => {
    const {name} = props
    const { data: session } = useSession()


        return (

            <div>
                <h1>{name}</h1>
                <button
                    type='button'
                    onClick={() => {
                        signOut({ callbackUrl: 'http://localhost:3000' });
                    }}
                    className='outline_btn'
                >
                    Wyloguj
                </button>
            </div>
        )



}
export default Profile
