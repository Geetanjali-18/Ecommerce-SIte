import HomeBanner from "../../Components/HomeBanner";
import HomeProducts from "../../Components/HomeProducts";
import HomeCat from "../../Components/HomeCat";
import NewsLetterSection from "../../Components/NewsLetterSection";

const Home = ()=>{
    return(
        <>
        <HomeBanner></HomeBanner>
        <HomeCat></HomeCat>
        <HomeProducts></HomeProducts>
        <NewsLetterSection></NewsLetterSection>
        </>
    )
}

export default Home;