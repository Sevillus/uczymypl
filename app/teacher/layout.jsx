import {getServerSession} from "next-auth";
import {authOptions} from "../api/auth/[...nextauth]/route";
import {redirect} from "next/navigation";


const Layout = async ({ children }) => {
    const session = await getServerSession(authOptions)


    if (!session  ) {
        redirect('/')
    }

    return (
        <div className={"padding-x lg:overflow-hidden overflow-hidden"} >
            {children}
        </div>
    );
};

export default Layout;