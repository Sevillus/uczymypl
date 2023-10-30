"use client"
import HomePageTitle from "../components/pages/home/HomePageTitle";
import HomePageLessonManage from "../components/pages/home/HomePageLessonManage";
import HomePagePayments from "../components/pages/home/HomePagePayments";
import HomePageMoreInfo from "../components/pages/home/HomePageMoreInfo";
import React from "react";

import HomePageJoin from "../components/pages/home/HomePageJoin";


const HomePage = () => {

    return (
        <div className={"h-fit bg-gradient  text-white py-10 max-w-screen overflow-hidden lg:overflow-auto"}>
            <HomePageTitle />
            <HomePageLessonManage />
            <HomePagePayments />
            <HomePageMoreInfo />
            <HomePageJoin />
        </div>
    );
};

export default HomePage;