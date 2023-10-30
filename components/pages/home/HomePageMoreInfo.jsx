import React from 'react'
import Image from "next/image";
import HomePageMoreInfoBox from "./HomePageMoreInfoBox";

const HomePageMoreInfo = () => {
    return (
        <section className={ "w-full px-6 lg:px-56 "}>
            <h2 className={"text-2xl lg:text-4xl font-semibold my-10 border-b-2 py-4 flex gap-4 items-center"}>Osiągaj więcej z Uczymy.pl</h2>
            <p className={"lg:w-5/12 lg:leading-10 text-slate-200 text-lg lg:text-2xl"}>
                Intuicyjne funkcje Uczymy.pl zapewniają każdemu możliwość szybkiego konfigurowania i dostosowania przepływu pracy.
            </p>
            <div className={"mt-10 grid grid-rows-1 gap-10 md:grid-cols-2 xl:flex lg:justify-between w-full"}>
                <HomePageMoreInfoBox>
                    <Image className={"z-10"} src={"/schedule.png"} alt={"schedule icon"} width={"100"} height={"100"}></Image>
                    <h2 className={"text-2xl border-b-2 py-2"}>Plan zajęć </h2>
                    <p className={"leading-8 text-lg  "}>
                        Aplikacja generuje dla Ciebie prywatny plan zajęć w skali tygodnia. Nie musisz się już troszczyć żeby tworzyć go samodzielnie.
                    </p>
                </HomePageMoreInfoBox>
                <HomePageMoreInfoBox>
                    <Image src={"/team_6404687.png"} alt={"team icon"} width={"100"} height={"100"}></Image>
                    <h2 className={"text-2xl border-b-2 py-2"}>Baza uczniów</h2>
                    <p className={"leading-8 text-lg"}>
                        Dodawaj, usuwaj, modyfikuj swoją bazę uczniów. W wersji podstawowej brak maksymalnej ilości uczniów.
                    </p>
                </HomePageMoreInfoBox>
                <HomePageMoreInfoBox>
                    <Image className={"z-10"} src={"/cash.png"} alt={"team icon"} width={"100"} height={"100"}></Image>
                    <h2 className={"text-2xl border-b-2 py-2"}>Motywacja </h2>
                    <p className={"leading-8 text-lg  "}>
                        Graficzne przedstawienie zarobków w skali miesiąca, będzie Ci przypominać by nie zwalniać tempa.
                    </p>
                </HomePageMoreInfoBox>
            </div>
        </section>
    )
}
export default HomePageMoreInfo
