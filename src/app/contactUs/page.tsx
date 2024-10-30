"use client";
import React, { useState, useEffect } from 'react';   
import NavBar from '../../reusable_components/nav_bar/page'; 
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { LuPhoneCall } from "react-icons/lu";
import { CgMail } from "react-icons/cg";
import { GrLocation } from "react-icons/gr";
import dynamic from 'next/dynamic';
import Footer from "../../reusable_components/test_footer/page"
import SmallNavBar from "../../reusable_components/small_navbar/page";

const ReCAPTCHA = dynamic(() => import('react-google-recaptcha'), { ssr: false });

function MyComponent() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');
    const [capVal, setCapVal] = useState('');
    const [isFormValid, setIsFormValid] = useState(false);
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        // Ensure components that depend on the browser are mounted
        setIsMounted(true);
    }, []);
    
    useEffect(() => {
        // Check if all fields are filled
        setIsFormValid(!!name && !!email && !!phone && !!message && !!capVal);
    }, [name, email, phone, message, capVal]);
    
    const handleSubmit = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        if (!capVal) {
            alert("Please complete the reCAPTCHA");
            return;
        }
        // Send the message here
        console.log({ name, email, phone, message });
    };

    return (
        <div className='contact-us'>
            <div className="hidden sm:block">
                <NavBar />
            </div>
            <h1 className="text-3xl font-semibold text-center mb-6 ">Contact Us</h1>
            <div className="flex flex-col sm:flex-row items-start justify-start mt-9 ml-36 space-y-8 sm:space-y-0 sm:space-x-40 text-base leading-relaxed">
                <div className="w-96 flex flex-col sm:h-w-5/6">
                    <form onSubmit={handleSubmit}>
                        <Input
                            type="text "
                            placeholder="Name"
                            className="mb-4 "
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                        <Input
                            type="email"
                            placeholder="Email"
                            className="mb-4 h-10"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <Input
                            type="text"
                            placeholder="Phone Number"
                            className="mb-4 h-10"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                        />
                        <textarea
                            placeholder="Message"
                            className="mb-4 h-28 w-full resize-none p-2 border rounded-md focus:outline-none focus:border-black"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                        />
                        {isMounted && (
                            <ReCAPTCHA
                                sitekey="6Lf23WEqAAAAAFcJbC3unv-Q7TW7ASXozeZfHme9"
                                onChange={(token: any) => setCapVal(token || '')}
                            />
                        )}
                        {!isFormValid && (
                            <p className="text-red-500 mb-4">Please fill in all fields to enable reCAPTCHA</p>
                        )}
                        <Button
                            variant="outline"
                            className="w-24 bg-cyan-900 hover:bg-cyan-600 hover:text-white text-white"
                            disabled={!isFormValid}
                        >
                            SEND
                        </Button>
                    </form>
                </div>
                {/* ADDRESS */}
                <div className="space-y-4 w-full sm:w-7/12">
                    <h1 className='text-2xl'>Address</h1>
                    <h2>
                        <span className="flex items-center">
                            <LuPhoneCall className="mr-3 text-xl" /> +975 02 33 96 07
                        </span>
                    </h2>
                    <h3>
                        <span className="flex items-center">
                            <CgMail className="mr-3 text-xl" /> ibestbhutan@gmail.com
                        </span>
                    </h3>
                    <h3>
                        <span className="flex items-center">
                            <GrLocation className="mr-3 text-xl" /> Changzamtog, Zamdo Lam, Thimphu-Babesa, Expressway Thimphu
                        </span>
                    </h3>
                </div>
            </div>
            {/* Map iframe */}
            {isMounted && (
                <div className="w-5/6 ml-32 mt-20 rounded-lg overflow-hidden">
                    <iframe 
                        width="100%" 
                        height="600" 
                        className="rounded-lg" 
                        src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=ibest,%20thimphu+(ibest)&amp;t=h&amp;z=17&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                    >
                    </iframe>
                </div>
            )}
            <Footer />
            <SmallNavBar />
        </div>
    );
}

export default MyComponent;
