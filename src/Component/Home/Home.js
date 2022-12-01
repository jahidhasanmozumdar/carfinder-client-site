import React from 'react';
import Banner from "./Banner/Banner";
import Brand from "./Brand/Brand";
import Features from "../Features/Features"
import Blog from '../Blog/Blog';
const Home = () => {
    return (
        <div>
            <Banner/>
            <Brand/>
            <Features/>
        </div>
    );
};

export default Home;