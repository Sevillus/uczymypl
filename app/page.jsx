import HomePageTitle from "../components/pages/home/HomePageTitle";
import HomePageLessonManage from "../components/pages/home/HomePageLessonManage";
import HomePagePayments from "../components/pages/home/HomePagePayments";
import HomePageMoreInfo from "../components/pages/home/HomePageMoreInfo";


const HomePage = () => {

    return (
        <div className={"h-fit bg-gradient  text-white py-10"}>
            <HomePageTitle />
            <HomePageLessonManage />
            <HomePagePayments />
            <HomePageMoreInfo />
        </div>
    );
};

export default HomePage;