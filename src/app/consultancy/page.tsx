import React from 'react';
import Image from 'next/image';
import myImage from '../../images/Website Pictures/aboutus.jpg';
import NavBar from '../../reusable_components/nav_bar/page'; 
import { Button } from "@/components/ui/button"
import pic1 from '../images/1.jpeg'
import pic2 from '../images/2.jpg'
import pic3 from '../images/3.jpeg'
import pic4 from '../images/4.webp'
import pic5 from '../images/5.jpg'
import pic6 from '../images/6.jpg'
import pic7 from '../images/7.jpg'
import pic8 from '../images/8.jpg'
import pic9 from '../images/9.webp'
import pic10 from '../images/10.webp'
import pic11 from '../images/11.webp'
import pic12 from '../images/12.png'
import pic13 from '../images/13.jpg'
import pic14 from '../images/14.jpg'
import pic15 from '../images/15.jpg'
import ibestPic from '../images/ib.jpg'
import {
    ResizableHandle,
    ResizablePanel,
    ResizablePanelGroup,
} from "@/components/ui/resizable"
import Footer from "../../reusable_components/footer/page";

function MyComponent() {
    return (
        <div className='landingpage'>
            <NavBar />
            <div className="w-screen h-screen flex flex-col items-center justify-center bg-red-50">
                <div className="w-full h-3/5 bg-[url('./images/this.png')] bg-center bg-cover flex items-center justify-center mb-5">
                    <h1 className='font-extrabold text-3xl text-white'>Services</h1>
                </div>
                <div className="w-full h-20 flex items-center justify-center">
                    <h1 className='font-semibold text-2xl'> Why iBest</h1>
                </div>
                <div className="w-full h-20 flex items-center justify-center">
                    <Button className='w-1/6'><a href="/courses">Courses</a></Button><Button className='w-1/6 ml-5'><a href="/consultancy">Consultancy</a></Button>
                </div>
                <div className="w-3/5 h-2/6 mt-12 bg-[url('./images/co.png')] bg-cover bg-center"></div>
            </div>
            <div className="w-screen h-screen flex items-center justify-center flex-col">
                <div className="w-3/5 h-full flex items-center justify-center flex-col">
                    <div className='space-y-5'>
                        <h1>With the increasing economic activities in the country, and most youth joining the workforce, the need to guide and assist young entrepreneurs and small business establishment is becoming a necessity!</h1>
                        <h1>Through iBEST Consultancy Services, with the team of energetic and enthusiastic experts, we provide our clients with real-time market studies and analysis through which project's feasibility are done. We advise and recommend our clients on the projects they want to execute and the pertinent business processes they have to integrate to make their projects successful.</h1>
                        <h1>Beyond business project proposal writing with strong financial background, we do help and write project proposals for grant applications which are mainly required by the Civil Society Organizations.</h1>
                    </div>
                    <h1 className='pt-10 pb-10 text-2xl font-semibold'>OUR COMPETENCIES</h1>
                    <div className="w-full h-3/6 flex flex-col space-y-14">
                        <div className="w-full h-1/4 flex flex-row space-x-8">
                            <div className="w-2/12 h-full rounded bg-cover bg-center relative group">
                                <Image 
                                    src={pic1} 
                                    alt="" 
                                    className="relative shadow-none transition-all duration-300 cursor-pointer w-full h-full rounded"
                                />
                                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                                    <p className="text-white text-center">I have been hovered</p>
                                </div>
                            </div>
                            <div className="w-2/12 h-full rounded bg-cover bg-center relative group">
                                <Image 
                                    src={pic2} 
                                    alt="" 
                                    className="relative shadow-none transition-all duration-300 cursor-pointer w-full h-full rounded"
                                />
                                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                                    <p className="text-white text-center">I have been hovered</p>
                                </div>
                            </div>
                            <div className="w-2/12 h-full rounded bg-cover bg-center relative group">
                                <Image 
                                    src={pic3} 
                                    alt="" 
                                    className="relative shadow-none transition-all duration-300 cursor-pointer w-full h-full rounded"
                                />
                                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                                    <p className="text-white text-center">I have been hovered</p>
                                </div>
                            </div>
                            <div className="w-2/12 h-full rounded bg-cover bg-center relative group">
                                <Image 
                                    src={pic4} 
                                    alt="" 
                                    className="relative shadow-none transition-all duration-300 cursor-pointer w-full h-full rounded"
                                />
                                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                                    <p className="text-white text-center">I have been hovered</p>
                                </div>
                            </div>
                            <div className="w-2/12 h-full rounded bg-cover bg-center relative group">
                                <Image 
                                    src={pic5} 
                                    alt="" 
                                    className="relative shadow-none transition-all duration-300 cursor-pointer w-full h-full rounded"
                                />
                                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                                    <p className="text-white text-center">I have been hovered</p>
                                </div>
                            </div>
                        </div>
                        <div className="w-full h-1/4 flex flex-row space-x-8">
                        <div className="w-2/12 h-full rounded bg-cover bg-center relative group">
                                <Image 
                                    src={pic6} 
                                    alt="" 
                                    className="relative shadow-none transition-all duration-300 cursor-pointer w-full h-full rounded"
                                />
                                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                                    <p className="text-white text-center">I have been hovered</p>
                                </div>
                            </div>
                            <div className="w-2/12 h-full rounded bg-cover bg-center relative group">
                                <Image 
                                    src={pic10} 
                                    alt="" 
                                    className="relative shadow-none transition-all duration-300 cursor-pointer w-full h-full rounded"
                                />
                                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                                    <p className="text-white text-center">I have been hovered</p>
                                </div>
                            </div>
                            <div className="w-2/12 h-full rounded bg-cover bg-center relative group">
                                <Image 
                                    src={pic8} 
                                    alt="" 
                                    className="relative shadow-none transition-all duration-300 cursor-pointer w-full h-full rounded"
                                />
                                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                                    <p className="text-white text-center">I have been hovered</p>
                                </div>
                            </div>
                            <div className="w-2/12 h-full rounded bg-cover bg-center relative group">
                                <Image 
                                    src={pic9} 
                                    alt="" 
                                    className="relative shadow-none transition-all duration-300 cursor-pointer w-full h-full rounded"
                                />
                                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                                    <p className="text-white text-center">I have been hovered</p>
                                </div>
                            </div>
                            <div className="w-2/12 h-full rounded bg-cover bg-center relative group">
                                <Image 
                                    src={pic7} 
                                    alt="" 
                                    className="relative shadow-none transition-all duration-300 cursor-pointer w-full h-full rounded"
                                />
                                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                                    <p className="text-white text-center">I have been hovered</p>
                                </div>
                            </div>
                        </div>
                        <div className="w-full h-1/4 flex flex-row space-x-8">
                            <div className="w-2/12 h-full rounded bg-cover bg-center relative group">
                                <Image 
                                    src={pic11} 
                                    alt="" 
                                    className="relative shadow-none transition-all duration-300 cursor-pointer w-full h-full rounded"
                                />
                                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                                    <p className="text-white text-center">I have been hovered</p>
                                </div>
                            </div>
                            <div className="w-2/12 h-full rounded bg-cover bg-center relative group">
                                <Image 
                                    src={pic12} 
                                    alt="" 
                                    className="relative shadow-none transition-all duration-300 cursor-pointer w-full h-full rounded"
                                />
                                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                                    <p className="text-white text-center">I have been hovered</p>
                                </div>
                            </div>
                            <div className="w-2/12 h-full rounded bg-cover bg-center relative group">
                                <Image 
                                    src={pic13} 
                                    alt="" 
                                    className="relative shadow-none transition-all duration-300 cursor-pointer w-full h-full rounded"
                                />
                                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                                    <p className="text-white text-center">I have been hovered</p>
                                </div>
                            </div>
                            <div className="w-2/12 h-full rounded bg-cover bg-center relative group">
                                <Image 
                                    src={pic14} 
                                    alt="" 
                                    className="relative shadow-none transition-all duration-300 cursor-pointer w-full h-full rounded"
                                />
                                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                                    <p className="text-white text-center">I have been hovered</p>
                                </div>
                            </div>
                            <div className="w-2/12 h-full rounded bg-cover bg-center relative group">
                                <Image 
                                    src={pic15} 
                                    alt="" 
                                    className="relative shadow-none transition-all duration-300 cursor-pointer w-full h-full rounded"
                                />
                                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                                    <p className="text-white text-center">I have been hovered</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-screen h-screen flex items-center justify-center">
                <div className="w-3/5 h-full flex items-center justify-center flex-col space-y-10">
                    <h1 className='text-2xl font-semibold'>OUR EXPERIENCES</h1> 
                    <h1 className=''>Since the humble inception of our company, iBESTers as a team have delivered numerous successful project proposals to set up businesses of various categories. Our clients go as far as Trashigang in the far eastern region to Bumthang, Trongsa, and Zhemgang in the center to Sarpang and Samtse in the south to the western dzongkhags.</h1>
                    <div className="w-full h-2/6  flex flex-row">
                        <div className="w-2/5 h-full rounded">
                            <ResizablePanelGroup direction="vertical" className="h-full w-4/6 rounded-lg border  bg-slate-500">
                                <ResizablePanel defaultSize={50}>
                                    <div className="flex h-full items-center justify-center p-6 bg-[url('./images/c1.jpg')] bg-cover">
                                    </div>
                                </ResizablePanel>
                                <ResizableHandle />
                                <ResizablePanel defaultSize={50}>
                                    <div className="h-full items-center justify-center p-6 flex flex-col">
                                        <p className='text-white'>We have assisted our satisfied clients through the simple process of availing trade license and environmental clearances.</p>
                                    </div>
                                </ResizablePanel>
                            </ResizablePanelGroup>
                        </div>
                        <div className="w-1/5 h-full"></div>
                        <div className="w-2/5 h-full">
                            <ResizablePanelGroup direction="vertical" className="h-full w-4/6 rounded-lg border  bg-slate-500">
                                <ResizablePanel defaultSize={50}>
                                    <div className="flex h-full items-center justify-center p-6 bg-[url('./images/cc2.webp')] bg-cover">
                                    </div>
                                </ResizablePanel>
                                <ResizableHandle />
                                <ResizablePanel defaultSize={50}>
                                    <div className="h-full items-center justify-center p-6 flex flex-col">
                                        <p>We mentor clients from setup to operation, and they continue to seek our expertise.</p>
                                    </div>
                                </ResizablePanel>
                            </ResizablePanelGroup>
                        </div>
                    </div>
                    <h1 >We've successfully established FDI projects and helped agencies secure funding from relevant organizations. Our services include feasibility studies, OMP development, and creating business plans for government entities. Additionally, we provide design, translation, and editing support for our clients' publications.</h1>
                </div>
            </div>
            <div className="w-screen  bg-pink-200">
                <Footer />
            
            </div>            
        </div>      
    );
}

export default MyComponent;
