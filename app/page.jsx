import HomePageTitle from "../components/pages/home/HomePageTitle";
import HomePageLessonManage from "../components/pages/home/HomePageLessonManage";

const HomePage = () => {

    return (
        <div className={"h-fit bg-gradient px-6 lg:px-56 text-white"}>
            <HomePageTitle />
            <HomePageLessonManage />
        </div>
    );
};

export default HomePage;