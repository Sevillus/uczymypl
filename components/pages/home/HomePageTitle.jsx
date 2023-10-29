import React from 'react'
import LoginIcon from "@mui/icons-material/Login";

const HomePageTitle = () => {
    return (
        <section className={"w-full flex-center  h-[700px] "}>
            <div className={"w-12/12 flex-center"}>
                <div className={"w-full lg:w-5/12 flex-column  items-center gap-6"}>
                    <h1 className={"font-damion text-6xl lg:text-8xl font-normal"}>Uczymy.pl</h1>
                    <p className={"text-2xl leading-10 text-center text-slate-200"}>Łączymy wszystkie niezbędna narzędzia oraz zadania korepetytora w jednym miejscu. Nie zwlekaj, załóż w pełni darmowe konto już dziś i ułatw sobie prace!</p>
                    <div className={"w-full flex-center"}>
                        <button className={"border p-4 rounded-lg flex gap-4 hover:translate-x-6 easy-in-out duration-300"}>
                            Bezpłatna Rejestracja
                            <LoginIcon />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default HomePageTitle
