import React from 'react';


import {getServerSession} from "next-auth";
import {redirect} from "next/navigation";
import {authOptions} from "../api/auth/[...nextauth]/route";
import Header from "../../components/Header";




const Layout = async ({ children }) => {

    const session = await getServerSession(authOptions)


    if (!session || session?.user.role !== "teacher" ) {
        redirect('/')
    }
    return (
        <div className={"padding-y padding-x"}>
            <Header
            name={session?.user.name}
            />
            <main>
                {children}
            </main>
            <footer>

            </footer>
        </div>
    );
};

export default Layout;
