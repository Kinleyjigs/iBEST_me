"use client"

import * as React from "react"
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

const footer= () => {
    return (
        <div className="footer mt-20 mr-20 bg-cyan-900">
            <div className="border w-32 h-32 flex items-center justify-center">
                <h1 className="ml-20 ">Get skilled today for a bright future!</h1>

                <h2 className=" ml-20 icons flex space-x-4 ">
                    <FaInstagram />
                    <FaFacebook />  
                    <FaXTwitter />
                    <FaLinkedin />
                </h2>
            
            </div>

            
            
        </div>

    )
}
export default footer;
