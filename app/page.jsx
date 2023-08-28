"use client";


import {  signIn,  useSession,} from "next-auth/react";



const Nav = () => {




    return (
          <button
            type="button"
            onClick={() => {
              signIn("google", );
            }}
          >
            Sign in
          </button>


    );

};

export default Nav;
