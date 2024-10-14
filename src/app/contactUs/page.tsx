"use client";

import React from 'react';
import { useState } from 'react';   
import NavBar from '../../reusable_components/nav_bar/page'; 
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { LuPhoneCall } from "react-icons/lu";
import { CgMail } from "react-icons/cg";
import { GrLocation } from "react-icons/gr";

function MyComponent() {

    const [email, setEmail]= useState('');

    const handleSubmit = async(e) => {
        e.preventDefault();
        console.log(email);
    };
    
    return (
        <div className='contact us'>
            <NavBar />

            <h1 className="text-3xl font-bold mt-9 text-center">Contact Us</h1>
            <div className="flex items-start justify-start min-h-screen mt-9 ml-40 space-x-20 ">
                
                <div className="w-96 space-y-4">
                <form onSubmit={handleSubmit}>
                    <Input type="text" placeholder="Name" />
                    <Input type="email" placeholder="Email" onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)} />
                    <Input type="number" placeholder="Phone Number" />
                    <Input type="text" placeholder="Messages" />

                    <Button variant="outline" className="w-24 bg-cyan-900 hover:bg-cyan-600 hover:text-white text-white">SEND</Button>

                </form>
                </div>

            {/* ADDRESS */}
            <div className="space-y-4 w-7/12">
                <h1 className='text-2xl'>Address</h1>

                <h2><span className="flex items-center"><LuPhoneCall className="mr-3 text-xl "/> +975 02 33 96 07</span></h2>
                <h3><span className="flex items-center"><CgMail className="mr-3 text-xl"/> ibestbhutan@gamil.com</span></h3>
                <h3><span className="flex items-center"><GrLocation className="mr-3 text-xl"/>Changzamtog, Zamdo Lam, Thimphu-Babesa,Expressway Thimphu</span></h3>

            </div>
            
            </div>

            
        </div>
    );
}

export default MyComponent;
