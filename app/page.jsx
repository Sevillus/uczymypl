import HomePageTitle from "../components/pages/home/homePageTitle";
import Image from "next/image";

const HomePage = () => {

    return (
        <div className={"h-fit bg-gradient px-56 text-white"}>
            <HomePageTitle />
            <h2 className={"text-4xl font-semibold"}>Zarządzaj swoimi zajęciami</h2>
            <div className={"w-full h-[700px] flex-between"}>
                <div className={"w-4/12 flex-column gap-10"}>

                    <p className={"text-2xl leading-10 text-slate-200 pl-4"}>
                        Dzięki naszej stronie internetowej,
                        możesz z łatwością monitorować kiedy oraz z kim masz poszczególne spotkanie, czy uczeń zapłacił za zajęcia
                        oraz jak blisko jesteś ukończenia miesięcznego targetu.
                    </p>
                </div>
                <Image src={"/dashboard.jpg"} alt={"dashboard"} width={"1100"} height={"1000"} />
            </div>
        </div>
    );
};

export default HomePage;