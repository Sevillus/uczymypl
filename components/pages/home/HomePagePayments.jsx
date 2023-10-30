import React from 'react'
import ProgressBar from "../teacher/dashboard/ProgressBar";

const HomePagePayments = () => {
    return (
        <section className={"w-full  relative"}>
            <div class="custom-shape-divider-bottom-1698653926">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
                </svg>
            </div>
            <div className={"bg-slate-50 text-black py-20"}>
                <div className={"w-full py-4 px-6 lg:px-56"}>
                    <h2 className={"text-2xl lg:text-4xl font-semibold  border-b-2 py-4  text-center  "}>Monitoruj płatności</h2>
                    <div className={"w-full flex flex-col lg:flex-row lg:justify-between py-10"}>
                        <p className={"w-full lg:w-8/12 text-lg lg:text-2xl lg:leading-10  pl-4"}>Kontrolowanie zarobków z Uczymy.pl jest bajecznie proste. Zaznacz czy uczeń zapłacił za zajęcia i zbliż się do wypełnienie swojego targetu.</p>
                        <ProgressBar  userTarget={5000} earnedThisMonth={5000} isLoading={true} homePage={true}/>
                    </div>
                </div>
            </div>
            <div class="custom-shape-divider-top-1698653878">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
                </svg>
            </div>
        </section>
    )
}
export default HomePagePayments
