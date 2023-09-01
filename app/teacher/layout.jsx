

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
        <>
            {children}
        </>
    );
};

export default Layout;
