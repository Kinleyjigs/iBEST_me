import * as React from "react";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import Insta from "../../images/footer/instagram.png";
import Insta1 from "../../images/footer/instagram1.png";
import Facebook from "../../images/footer/facebook.png";
import Facebook1 from "../../images/footer/facebook1.png";
import Twitter from "../../images/footer/twitter.png";
import Twitter1 from "../../images/footer/twitter1.png";
import Linkedin from "../../images/footer/linkedin.png";
import Linkedin1 from "../../images/footer/linkedin1.png";
import Logo from "../../images/Website Pictures/logo.jpg"
import Link from "next/link";

const Footer: React.FC = () => {
    return (
        <div className="relative w-screen h-80 bg-sky-950 mt-20">
            <div className="absolute top-10">
                <div className="ml-48">
                <Link href="/">
                    <Avatar className="w-16 h-16">
                    <AvatarImage src={Logo.src} alt="@shadcn" />  
                    </Avatar>
                </Link>
                </div>
                <h1 className="text-white mt-2 ml-28">iBest Institute and Consultancy</h1>

                <div className="flex mt-14 ml-28 space-x-4">
                    {/* Instagram */}
                    <a href="https://www.instagram.com/ibest_institute/" target="_blank" rel="noopener noreferrer">
                    <div className="group">
                        <img src={Insta1.src} alt="Instagram" className="w-8 h-8 group-hover:hidden" />
                        <img src={Insta.src} alt="Instagram Hover" className="w-8 h-8 hidden group-hover:block" />
                    </div>
                    </a>
                    {/* Facebook */}
                    <a href="https://www.facebook.com/ibestinstitute/" target="_blank" rel="noopener noreferrer">
                    <div className="group">
                        <img src={Facebook1.src} alt="Facebook" className="w-8 h-8 group-hover:hidden" />
                        <img src={Facebook.src} alt="Facebook Hover" className="w-8 h-8 hidden group-hover:block" />
                    </div>
                    </a>
                    {/* Twitter */}
                    <a href="https://x.com/ibestbhutan" target="_blank" rel="noopener noreferrer">
                    <div className="group">
                        <img src={Twitter1.src} alt="Twitter" className="w-8 h-8 group-hover:hidden" />
                        <img src={Twitter.src} alt="Twitter Hover" className="w-8 h-8 hidden group-hover:block" />
                    </div>
                    </a>
                    {/* LinkedIn */}
                    <a href="https://www.linkedin.com/in/ibestbhutan/" target="_blank" rel="noopener noreferrer">
                    <div className="group">
                        <img src={Linkedin1.src} alt="LinkedIn" className="w-8 h-8 group-hover:hidden" />
                        <img src={Linkedin.src} alt="LinkedIn Hover" className="w-8 h-8 hidden group-hover:block" />
                    </div> 
                    </a> 
                </div>
            </div>
            <div className="flex justify-start ml-10 gap-x-14 text-white absolute top-14 left-96"> {/* Flexbox for alignment, ml for left margin, gap for spacing */}
                <div>
                    <h1 className="font-black hover:text-gray-400">
                        <a href="/">HOME</a>
                    </h1>
                    <h2 className="hover:text-gray-400">
                        <Link href="#mission">Mission</Link>
                    </h2>
                    <h3 className="hover:text-gray-400">
                        <Link href="#experties">Competencies</Link>
                    </h3>
                    <h4 className="hover:text-gray-400">
                        <Link href="#testimonials">Testimonials</Link>
                    </h4> 
                </div>
                <div>
                    <h1 className="font-black hover:text-gray-400">
                        <a href="/courses">SERVICES</a>
                    </h1>
                    <h2 className="hover:text-gray-400">
                        <a href="/courses">Courses</a>
                    </h2>
                    <h3 className="hover:text-gray-400">
                        <a href="/consultancy">Consultancy</a>
                    </h3> 
                </div>
                <div>
                    <h1 className="font-black hover:text-gray-400">
                        <a href="/aboutUs">ABOUT US</a>
                    </h1>
                    <h2 className="hover:text-gray-400">
                        <Link href="#vision">Vision</Link>
                    </h2>
                    <h3 className="hover:text-gray-400">
                        <Link href="#values"> Purpose & Values</Link>
                    </h3>
                    <h4 className="hover:text-gray-400">
                        <Link href="#Objectives">Objectives</Link>
                    </h4> 
                    <h5 className="hover:text-gray-400">
                        <Link href="#Team">Team</Link>
                    </h5>
                </div>
                <div >
                    <h1 className="font-black">Other iBest Websites</h1>
                    <h2 className="hover:text-gray-400">
                        <a href="https://www.ibestbhutan.com/">iBest Bhutan</a>
                    </h2>
                    <h3 className="hover:text-gray-400">
                        <a href="https://ibesttechnologies.bt/">iBest Techologies</a>
                    </h3>
                    <h4 className="hover:text-gray-400">
                        <a href="https://www.ibeststudios.com/">iBest Studios</a></h4> 
                </div>
            </div>
            <div className="absolute bottom-0 w-full text-center text-white pb-4">
                Copyright © iBEST Institute & Consultancy 2024
            </div>
    </div>
    );
};

export default Footer;

