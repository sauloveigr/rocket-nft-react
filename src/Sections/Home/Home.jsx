import React from "react";
import HomeSection from "./styled.js";
import GridComponent from "./HomeGrid/HomeGrid.styled";
import HomeTitlesComponent from "./HomeTitles/HomeTitles";

const Home = () => {
    return (
        <>
            <HomeSection>
                <HomeTitlesComponent/>
                <GridComponent/>
            </HomeSection>
        </>
    );
};

export default Home;
