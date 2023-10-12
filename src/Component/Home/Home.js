import React from 'react';
import Banner from "./Banner/Banner";
import Brand from "./Brand/Brand";
import Features from "../Features/Features"
import SellingData from '../SellingData/SellingData';
const Home = () => {
    return (
        <div>
            <Banner/>
            <Brand/>
            <Features/>
            <SellingData></SellingData>
        </div>
    );
};

export default Home;