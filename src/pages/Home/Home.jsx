import React from 'react';
import Header from "../../components/Header/Header.jsx";
import Hero from "../../components/Hero/Hero.jsx";
import './_Home.scss'
import Services from "../../components/Services/Services.jsx";
import Advantages from "../../components/Advantages/Advantages.jsx";
import Test from "../../components/Test/Test.jsx";
import Clients from "../../components/Clients/Clients.jsx";
import Tips from "../../components/Tips/Tips.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import Statistics from "../../components/Statistics/Statistics.jsx";

const Home = () => {
    return (
        <>
            <Header/>
            <Hero/>
            <Services/>
            <Advantages/>
            <Test/>
            <Statistics/>
            <Clients/>
            <Tips/>
            <Footer/>
        </>
    );
};

export default Home;