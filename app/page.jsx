import {useSession} from "next-auth/react";
import {getServerSession} from "next-auth";
import {authOptions} from "./api/auth/[...nextauth]/route";
import {redirect} from "next/navigation";


const HomePage = async () => {

    const session = await getServerSession(authOptions)
    const userRole = session?.user.role

    if(userRole === "student" || userRole === "teacher"){
        redirect(`/${userRole}`)
    }
    if(session && !userRole){
        redirect('/createaccount')
    }


    return (
          <div>
              Siema
          </div>


    );

};

export default HomePage;
