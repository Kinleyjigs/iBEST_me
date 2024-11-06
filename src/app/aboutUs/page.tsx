"use client"
import React from "react";
import NavBar from '../../reusable_components/nav_bar/page'; 
import Purpose from "../../reusable_components/purpose&value/page"
import SmallNavBar from "../../reusable_components/small_navbar/page";
import Footer from "../../reusable_components/footer/page"
import About from "../../images/Website Pictures/Training Pictures/20170527_122654.jpg"

function MyComponent() {
    return (
        <div className="">
            <div className="hidden sm:block pt-6">
                <NavBar />
            </div>
            <div className="w-full ">
                <img src={About.src} alt="About" className="w-screen h-96" />

            
            </div>


            <SmallNavBar />
        </div>

    );
}

export default MyComponent;