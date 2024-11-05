"use client"

import React from 'react';
import NavBar from '../../reusable_components/nav_bar/page'; 
import { Button } from "@/components/ui/button"
import Footer from "../../reusable_components/footer/page"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import logo from "../images/logo1.jpg"
import SmallNavBar from "../../reusable_components/small_navbar/page";
import {
    ResizableHandle,
    ResizablePanel,
    ResizablePanelGroup,
} from "@/components/ui/resizable"
function MyComponent() {
    return (
        <div className='landingpage'>
            <NavBar />
            <div className="w-screen h-screen flex flex-col">
                <div className="w-full h-3/5 bg-[url('./images/courses1.png')] bg-center bg-cover flex items-center justify-center ">
                    <h1 className='font-extrabold text-4xl text-white'>Courses</h1>
                </div>
                <div className="w-full h-2/5 flex flex-col items-center justify-center relative ">
                    <div className="w-full h-auto bg-blue-500 text-white py-10 px-5 flex justify-center items-center">
                        <div className="text-center space-y-4 max-w-4xl">
                            <h1 className="text-4xl font-bold text-black">Welcome to iBEST INSTITUTE</h1>
                            <p className="text-lg text-black">
                                One of Bhutan's elite, QMS-certified training hubs, recognized by the Ministry of Labour and Human Resources. Our expert-led courses aren’t just about knowledge, they’re about real-world impact. We break the boundaries of traditional learning, taking you beyond the classroom for hands-on, next-level skills.
                            </p>
                            <p className="text-lg font-semibold text-black">
                                Ready to stay ahead of the game? Join our dynamic programs designed to meet today's fast-evolving workforce demands!
                            </p>
                        </div>
                    </div>
                </div>
            </div>    
            <div className="w-screen h-screen flex items-center justify-center">
                <div className="w-2/5 h-full space-y-3 ">
                    <div className="w-full h-20 bg-lightBlue rounded flex items-center justify-center relative drop-shadow-md hover:drop-shadow-xl">
                        <h1><a href="#one">Life Skills Courses</a></h1>
                    </div>
                    <div className="w-full h-20 bg-lightBlue rounded flex items-center justify-center relative drop-shadow-md hover:drop-shadow-xl">
                        <h1><a href="#one">Leadership Courses</a></h1>
                    </div>
                    <div className="w-full h-20 bg-lightBlue rounded mt-5 flex items-center justify-center relative drop-shadow-md hover:drop-shadow-xl">
                        <h1><a href="#two">Management Courses</a></h1>
                    </div>
                    <div className="w-full h-20 bg-lightBlue rounded flex items-center justify-center relative drop-shadow-md hover:drop-shadow-xl">
                        <h1><a href="#two">Accounting and Financial Courses</a></h1>
                    </div>
                    <div className="w-full h-20 bg-lightBlue rounded flex items-center justify-center relative drop-shadow-md hover:drop-shadow-xl">
                        <h1><a href="#three">Entrepreneurship Courses</a></h1>
                    </div>
                    <div className="w-full h-20 bg-lightBlue rounded flex items-center justify-center relative drop-shadow-md hover:drop-shadow-xl">
                        <h1><a href="#three">Multimedia Courses</a></h1>
                    </div>
                    <div className="w-full h-20 bg-lightBlue rounded flex items-center justify-center relative drop-shadow-md hover:drop-shadow-xl">
                        <h1><a href="#four">Film Studies Courses</a></h1>
                    </div>
                    <div className="w-full h-20 bg-lightBlue rounded flex items-center justify-center relative drop-shadow-md hover:drop-shadow-xl">
                        <h1><a href="#four">Technical and Engineering Courses</a></h1>
                    </div>
                    <div className="w-full h-20 bg-lightBlue rounded flex items-center justify-center relative drop-shadow-md hover:drop-shadow-xl">
                        <h1><a href="#five">IT Courses</a></h1>
                    </div>
                </div>
            </div>
            <div id='one' className="w-screen h-screen flex flex-row items-center justify-center relative">
                <div className="w-1/2 h-4/5 m-5 bg-gray-50 rounded-2xl flex flex-col space-y-2 items-center justify-center relative drop-shadow-md hover:drop-shadow-xl border border-slate-300 hover:border-indigo-300">
                    <div className="w-11/12 h-1/3 rounded-2xl bg-[url('./images/iBEST_files/lifeSkill.jpg')] bg-cover"></div>
                    <div className="w-11/12 h-3/5 flex flex-col space-y-3">
                    <div className="h-1/6 flex items-center pl-5">
                        <div className="h-10 w-10 rounded-full border border-gray-300 overflow-hidden flex items-center justify-center">
                            <Avatar className="w-full h-full border-current">
                                <AvatarImage src={logo.src} alt="@shadcn" />
                                <AvatarFallback>iBEST</AvatarFallback>
                            </Avatar>
                        </div>
                        <div className="ml-5">
                            <p className="font-light text-sm">iBest Institute</p>
                            </div>
                        </div>
                        <div className="w-full h-5/6 bg-gray-100 flex flex-col space-y-4 p-5 rounded-2xl">
                            <h1 className="font-bold text-xl">Life Skills Courses</h1>
                            <p className="font-bold">What You'll Learn:</p>
                            <ul className="list-disc list-inside space-y-2">
                                <li><strong>Integrity:</strong> Uphold honesty and human values.</li>
                                <li><strong>Boldness:</strong> Foster innovation and leadership.</li>
                                <li><strong>Empathy:</strong> Build connections through understanding.</li>
                                <li><strong>Social Responsibility:</strong> Contribute to community growth.</li>
                                <li><strong>Trust:</strong> Prioritize transparency and accountability.</li>
                            </ul>
                            <p className="font-bold">Who This Course Is For:</p>
                            <p className="text-sm">Ideal for anyone seeking to improve personal and professional skills.</p>
                        </div>
                    </div>
                </div>
                <div className="w-1/2 h-4/5 m-5 bg-gray-50 rounded-2xl flex flex-col space-y-2 items-center justify-center relative drop-shadow-md hover:drop-shadow-xl border border-slate-300 hover:border-indigo-300">
                    <div className="w-11/12 h-1/3 rounded-2xl bg-[url('./images/iBEST_files/leaders.jpg')] bg-cover"></div>
                    <div className="w-11/12 h-3/5 flex flex-col space-y-3">
                    <div className="h-1/6 flex items-center pl-5">
                        <div className="h-10 w-10 rounded-full border border-gray-300 overflow-hidden flex items-center justify-center">
                            <Avatar className="w-full h-full border-current">
                                <AvatarImage src={logo.src} alt="@shadcn" />
                                <AvatarFallback>iBEST</AvatarFallback>
                            </Avatar>
                        </div>
                        <div className="ml-5">
                            <p className="font-light text-sm">iBest Institute</p>
                            </div>
                        </div>
                        <div className="w-full h-5/6 bg-gray-100 flex flex-col space-y-4 p-5 rounded-2xl">
                            <h1 className="font-bold text-xl">Leadership Courses</h1>
                            <p className="font-bold">What You'll Learn:</p>
                            <ul className="list-disc list-inside space-y-2">
                                <li><strong>Leadership Empowerment</strong>: Essential tools for leadership.</li>
                                <li><strong>Soft Skills Development</strong>: Enhance professional growth.</li>
                                <li><strong>Personality Benchmarks</strong>: Set standards for any career.</li>
                                <li><strong>Leadership Foundation</strong>: Build a strong leadership base.</li>
                                <li><strong>Personal Growth</strong>: Promote overall development.</li>
                            </ul>
                            <p className="font-bold">Who This Course Is For:</p>
                            <p className="text-sm">Ideal for anyone seeking to improve personal and professional skills.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div id='two' className="w-screen h-screen flex flex-row items-center justify-center relative">
                <div className="w-1/2 h-4/5 m-5 bg-gray-50 rounded-2xl flex flex-col space-y-2 items-center justify-center relative drop-shadow-md hover:drop-shadow-xl border border-slate-300 hover:border-indigo-300">
                    <div className="w-11/12 h-1/3 rounded-2xl bg-[url('./images/man.jpg')] bg-cover bg-center"></div>
                    <div className="w-11/12 h-3/5 flex flex-col space-y-3">
                    <div className="h-1/6 flex items-center pl-5">
                        <div className="h-10 w-10 rounded-full border border-gray-300 overflow-hidden flex items-center justify-center">
                            <Avatar className="w-full h-full border-current">
                                <AvatarImage src={logo.src} alt="@shadcn" />
                                <AvatarFallback>iBEST</AvatarFallback>
                            </Avatar>
                        </div>
                        <div className="ml-5">
                            <p className="font-light text-sm">iBest Institute</p>
                            </div>
                        </div>
                        <div className="w-full h-5/6 bg-gray-100 flex flex-col space-y-4 p-5 rounded-2xl">
                            <h1 className="font-bold text-xl">Management Courses</h1>
                            <p className="font-bold">What You'll Learn:</p>
                            <ul className="list-disc list-inside space-y-2">
                                <li><strong>Management Package:</strong> Essential for decision-making roles.</li>
                                <li><strong>Communication Skills:</strong> Master effective communication.</li>
                                <li><strong>Planning & Organizing:</strong> Key strategies for efficiency.</li>
                                <li><strong>Leadership:</strong> Develop vital leadership skills.</li>
                                <li><strong>Management Functions:</strong> Core management processes.</li>
                            </ul>
                            <p className="font-bold">Who This Course Is For:</p>
                            <p className="text-sm">Ideal for anyone seeking to improve personal and professional skills.</p>
                        </div>
                    </div>
                </div>
                <div className="w-1/2 h-4/5 m-5 bg-gray-50 rounded-2xl flex flex-col space-y-2 items-center justify-center relative drop-shadow-md hover:drop-shadow-xl border border-slate-300 hover:border-indigo-300">
                    <div className="w-11/12 h-1/3 rounded-2xl bg-[url('./images/fin.JPG')] bg-center bg-cover"></div>
                    <div className="w-11/12 h-3/5 flex flex-col space-y-3">
                    <div className="h-1/6 flex items-center pl-5">
                        <div className="h-10 w-10 rounded-full border border-gray-300 overflow-hidden flex items-center justify-center">
                            <Avatar className="w-full h-full border-current">
                                <AvatarImage src={logo.src} alt="@shadcn" />
                                <AvatarFallback>iBEST</AvatarFallback>
                            </Avatar>
                        </div>
                        <div className="ml-5">
                            <p className="font-light text-sm">iBest Institute</p>
                            </div>
                        </div>
                        <div className="w-full h-5/6 bg-gray-100 flex flex-col space-y-4 p-5 rounded-2xl">
                            <h1 className="font-bold text-xl">Accounting and Financial Courses</h1>
                            <p className="font-bold">What You'll Learn:</p>
                            <ul className="list-disc list-inside space-y-2">
                                <li><strong>Financial Management: </strong>Build confidence in management.</li>
                                <li><strong>Accounting Insights:</strong> Practical and theoretical concepts.</li>
                                <li><strong>Active Learning:</strong> Engage for deeper understanding.</li>
                                <li><strong>Financial Analysis:</strong> Address complex challenges.</li>
                                <li><strong>Market Skills:</strong> Apply knowledge in real-world scenarios.</li>
                            </ul>
                            <p className="font-bold">Who This Course Is For:</p>
                            <p className="text-sm">Ideal for anyone seeking to improve personal and professional skills.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div id='three' className="w-screen h-screen flex flex-row items-center justify-center relative">
                <div className="w-1/2 h-4/5 m-5 bg-gray-50 rounded-2xl flex flex-col space-y-2 items-center justify-center relative drop-shadow-md hover:drop-shadow-xl border border-slate-300 hover:border-indigo-300">
                    <div className="w-11/12 h-1/3 rounded-2xl bg-[url('./images/le.JPG')] bg-cover"></div>
                    <div className="w-11/12 h-3/5 flex flex-col space-y-3">
                    <div className="h-1/6 flex items-center pl-5">
                        <div className="h-10 w-10 rounded-full border border-gray-300 overflow-hidden flex items-center justify-center">
                            <Avatar className="w-full h-full border-current">
                                <AvatarImage src={logo.src} alt="@shadcn" />
                                <AvatarFallback>iBEST</AvatarFallback>
                            </Avatar>
                        </div>
                        <div className="ml-5">
                            <p className="font-light text-sm">iBest Institute</p>
                            </div>
                        </div>
                        <div className="w-full h-5/6 bg-gray-100 flex flex-col space-y-4 p-5 rounded-2xl">
                            <h1 className="font-bold text-xl">Entrepreneurship Courses</h1>
                            <p className="font-bold">What You'll Learn:</p>
                            <ul className="list-disc list-inside space-y-2">
                                <li><strong>Entrepreneurial Concepts:</strong> Learn principles and skills.</li>
                                <li><strong>Diverse Courses:</strong> Explore business real applications.</li>
                                <li><strong>Empowered Decisions:</strong> Analyze marketing effectively.</li>
                                <li><strong>Critical Thinking:</strong> Make informed decisions.</li>
                                <li><strong>Business Planning:</strong> Formulate a robust business plan.</li>
                            </ul>
                            <p className="font-bold">Who This Course Is For:</p>
                            <p className="text-sm">Ideal for anyone seeking to improve personal and professional skills.</p>
                        </div>
                    </div>
                </div>
                <div className="w-1/2 h-4/5 m-5 bg-gray-50 rounded-2xl flex flex-col space-y-2 items-center justify-center relative drop-shadow-md hover:drop-shadow-xl border border-slate-300 hover:border-indigo-300">
                    <div className="w-11/12 h-1/3 rounded-2xl bg-[url('./images/multi.JPG')] bg-cover"></div>
                    <div className="w-11/12 h-3/5 flex flex-col space-y-3">
                    <div className="h-1/6 flex items-center pl-5">
                        <div className="h-10 w-10 rounded-full border border-gray-300 overflow-hidden flex items-center justify-center">
                            <Avatar className="w-full h-full border-current">
                                <AvatarImage src={logo.src} alt="@shadcn" />
                                <AvatarFallback>iBEST</AvatarFallback>
                            </Avatar>
                        </div>
                        <div className="ml-5">
                            <p className="font-light text-sm">iBest Institute</p>
                            </div>
                        </div>
                        <div className="w-full h-5/6 bg-gray-100 flex flex-col space-y-4 p-5 rounded-2xl">
                            <h1 className="font-bold text-xl">Multimedia Courses</h1>
                            <p className="font-bold">What You'll Learn:</p>
                            <ul className="list-disc list-inside space-y-2">
                                <li><strong>Expert Learning:</strong> Learn from industry professionals.</li>
                                <li><strong>Wide Course Range:</strong> Explore diverse multimedia solutions.</li>
                                <li><strong>Hands-On Practice:</strong> Gain practical skills with equipment.</li>
                                <li><strong>Creative Development:</strong> Create extraordinary content.</li>
                                <li><strong>Trusted Leader:</strong> Experience a top multimedia company.</li>
                            </ul>
                            <p className="font-bold">Who This Course Is For:</p>
                            <p className="text-sm">Ideal for anyone seeking to improve personal and professional skills.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div id='four' className="w-screen h-screen flex flex-row items-center justify-center relative">
                <div className="w-1/2 h-4/5 m-5 bg-gray-50 rounded-2xl flex flex-col space-y-2 items-center justify-center relative drop-shadow-md hover:drop-shadow-xl border border-slate-300 hover:border-indigo-300">
                    <div className="w-11/12 h-1/3 rounded-2xl bg-[url('./images/TEP.jpg')] bg-cover"></div>
                    <div className="w-11/12 h-3/5 flex flex-col space-y-3">
                    <div className="h-1/6 flex items-center pl-5">
                        <div className="h-10 w-10 rounded-full border border-gray-300 overflow-hidden flex items-center justify-center">
                            <Avatar className="w-full h-full border-current">
                                <AvatarImage src={logo.src} alt="@shadcn" />
                                <AvatarFallback>iBEST</AvatarFallback>
                            </Avatar>
                        </div>
                        <div className="ml-5">
                            <p className="font-light text-sm">iBest Institute</p>
                            </div>
                        </div>
                        <div className="w-full h-5/6 bg-gray-100 flex flex-col space-y-4 p-5 rounded-2xl">
                            <h1 className="font-bold text-xl">Film Studies Courses</h1>
                            <p className="font-bold">What You'll Learn:</p>
                            <ul className="list-disc list-inside space-y-2">
                                <li><strong>Fundamentals:</strong> Basics of film and video production.</li>
                                <li><strong>Theoretical & Practical:</strong> Theory meets hands-on learning.</li>
                                <li><strong>Key Aspects:</strong> Essential filmmaking elements.</li>
                                <li><strong>Practical Experience:</strong> Hands-on skill development.</li>
                                <li><strong>Cinematic Journey:</strong> Explore film and cinema production.</li>
                            </ul>
                            <p className="font-bold">Who This Course Is For:</p>
                            <p className="text-sm">Ideal for anyone seeking to improve personal and professional skills.</p>
                        </div>
                    </div>
                </div>
                <div className="w-1/2 h-4/5 m-5 bg-gray-50 rounded-2xl flex flex-col space-y-2 items-center justify-center relative drop-shadow-md hover:drop-shadow-xl border border-slate-300 hover:border-indigo-300">
                    <div className="w-11/12 h-1/3 rounded-2xl bg-[url('./images/finance.jpg')] bg-cover"></div>
                    <div className="w-11/12 h-3/5 flex flex-col space-y-3">
                    <div className="h-1/6 flex items-center pl-5">
                        <div className="h-10 w-10 rounded-full border border-gray-300 overflow-hidden flex items-center justify-center">
                            <Avatar className="w-full h-full border-current">
                                <AvatarImage src={logo.src} alt="@shadcn" />
                                <AvatarFallback>iBEST</AvatarFallback>
                            </Avatar>
                        </div>
                        <div className="ml-5">
                            <p className="font-light text-sm">iBest Institute</p>
                            </div>
                        </div>
                        <div className="w-full h-5/6 bg-gray-100 flex flex-col space-y-4 p-5 rounded-2xl">
                            <h1 className="font-bold text-xl">Technical and Engineering Courses</h1>
                            <p className="font-bold">What You'll Learn:</p>
                            <ul className="list-disc list-inside space-y-2">
                                <li><strong>Relevant Courses:</strong> Key areas in engineering field.</li>
                                <li><strong>Operational Skills:</strong> Basic maintenance techniques.</li>
                                <li><strong>Theoretical Knowledge:</strong> Concepts of tools and mechanics.</li>
                                <li><strong>Combined Learning:</strong> Theory and practical approaches.</li>
                                <li><strong>Essential Skills:</strong> Skills for a tech-driven world.</li>
                            </ul>
                            <p className="font-bold">Who This Course Is For:</p>
                            <p className="text-sm">Ideal for anyone seeking to improve personal and professional skills.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div id='five' className="w-screen h-screen flex flex-col items-center justify-center relative">
                <div className="w-1/2 h-4/5 m-5 bg-gray-50 rounded-2xl flex flex-col space-y-2 items-center justify-center relative drop-shadow-md hover:drop-shadow-xl border border-slate-300 hover:border-indigo-300">
                    <div className="w-11/12 h-1/3 rounded-2xl bg-[url('./images/it.JPG')] bg-cover"></div>
                    <div className="w-11/12 h-3/5 flex flex-col space-y-3">
                    <div className="h-1/6 flex items-center pl-5">
                        <div className="h-10 w-10 rounded-full border border-gray-300 overflow-hidden flex items-center justify-center">
                            <Avatar className="w-full h-full border-current">
                                <AvatarImage src={logo.src} alt="@shadcn" />
                                <AvatarFallback>iBEST</AvatarFallback>
                            </Avatar>
                        </div>
                        <div className="ml-5">
                            <p className="font-light text-sm">iBest Institute</p>
                            </div>
                        </div>
                        <div className="w-full h-5/6 bg-gray-100 flex flex-col space-y-4 p-5 rounded-2xl">
                            <h1 className="font-bold text-xl">ICT Courses</h1>
                            <p className="font-bold">What You'll Learn:</p>
                            <ul className="list-disc list-inside space-y-2">
                                <li><strong>IT Education:</strong> Systems, hardware, and operating systems.</li>
                                <li><strong>Basic Skills:</strong> Proficient in Word, PowerPoint, and Excel.</li>
                                <li><strong>Advanced Topics:</strong> Learn digital analytics and programming.</li>
                                <li><strong>Digital Skills:</strong> Essential for today’s tech landscape.</li>
                                <li><strong>Blended Learning:</strong> Integrates online and traditional methods.</li>
                            </ul>
                            <p className="font-bold">Who This Course Is For:</p>
                            <p className="text-sm">Ideal for anyone seeking to improve personal and professional skills.</p>
                        </div>
                    </div>
                </div>
            </div>  
            <div>
                <Footer />
                <SmallNavBar />
            </div>       
        </div>      
    );
}

export default MyComponent;
