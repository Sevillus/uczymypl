import React from 'react'
import Image from "next/image";

const HomePageLessonManage = () => {
    return (
        <section className={"w-full h-[700px]"}>
            <h2 className={"text-2xl lg:text-4xl font-semibold my-10 border-b-2 py-4"}>Zarządzaj swoimi zajęciami</h2>
            <div className={"flex flex-column lg:flex-row lg:justify-between gap-10"}>
                <div className={"w-full lg:w-4/12 flex-column gap-10"}>
                    <p className={"text-lg lg:text-2xl lg:leading-10 text-slate-200 pl-4"}>
                        Dzięki naszej stronie internetowej,
                        możesz z łatwością monitorować kiedy oraz z kim masz poszczególne spotkanie, czy uczeń zapłacił za zajęcia
                        oraz jak blisko jesteś ukończenia miesięcznego targetu.
                    </p>
                </div>
                <div className={"relative"}>
                    <Image src={"/dashboard.jpg"} alt={"dashboard"} width={"500"} height={"700"}  className={"shadow-2xl rounded-lg scale-75 lg:scale-100 border-4 border-black"}/>
                    <Image src={"/mobile.jpg"} alt={"dashboard"} width={"200"} height={"200"}  className={"shadow-2xl rounded-lg -bottom-32 -left-10 lg:-left-32 absolute scale-50 lg:scale-100 border-2 border-black"}/>
                </div>
            </div>
        </section>
    )
}
export default HomePageLessonManage
