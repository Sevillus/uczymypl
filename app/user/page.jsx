

import React from 'react';
import {signOut, useSession} from "next-auth/react";
import {redirect} from "next/navigation";
import {getServerSession} from "next-auth";
import {authOptions} from "../api/auth/[...nextauth]/route";
import User from "../../models/user";



const MyPage =async () => {

    const session = await getServerSession(authOptions)

    const userRole = await User.findOne({ email: session?.user?.email })
        .then(user => {
            return user.role
        });




    return (
        <div>
            eloooooooo
        </div>
    );

};

export default MyPage;
