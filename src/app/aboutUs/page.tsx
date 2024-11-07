"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import logo from "../images/logo1.jpg"
import Footer from "@/reusable_components/footer/page"

import SmallNavBar from "../../reusable_components/small_navbar/page";
import TestNavbar from "../../reusable_components/Navbar/page"

export default function TestPage(){
    return (
        <div className="landingpage flex flex-col">
            <div className="hidden sm:block pt-6">
                <TestNavbar />
            </div>

            {/* ABOUT US PAGE */}
            <div className="w-screen h-screen flex flex-col">
                <div className="w-screen h-2/5 sm:h-3/5 mdx:h-3/5 lg:h-3/5   bg-[url('./images/aboutus.png')] bg-cover bg-center flex items-center justify-center ">
                    <h1 className="text-white font-extrabold text-3xl md:text-6xl lg:text-4xl mdx:text-6xl">ABOUT US</h1>
                </div>

            </div>
            <div className="w-screen h-screen"></div>
            <div className="w-screen h-screen"></div>


            <div>

            </div>


            <SmallNavBar />
        </div>
    )
}