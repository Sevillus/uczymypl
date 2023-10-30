import React from 'react'

const HomePageMoreInfoBox = (props) => {
    return (
        <div className={"w-full lg:w-3/12 py-10 px-6  flex-center shadow-2xl rounded-lg box__bg-gradient hover:scale-105 easy-in-out duration-300"}>
            <div className={"w-full flex-column  gap-4 relative bg-slate-50 rounded-lg px-6 shadow-2xl py-10 text-black"}>
                {props.children}
            </div>
        </div>
    )
}
export default HomePageMoreInfoBox
