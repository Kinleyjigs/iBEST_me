import React from 'react';
import Image from 'next/image';
import myImage from '../../images/Website Pictures/aboutus.jpg';
import NavBar from '../../reusable_components/nav_bar/page'; 
import { Button } from "@/components/ui/button"




function MyComponent() {
    return (
        <div className='landingpage'>
            <NavBar />
            <div className="w-screen h-screen flex flex-col items-center justify-center">
                <div className="w-full h-2/5 bg-[url('./images/this.png')] bg-center bg-cover flex items-center justify-center mb-5">
                    <h1 className='font-extrabold text-3xl text-white'>Services</h1>
                </div>
                <div className="w-full h-20 flex items-center justify-center">
                    <h1 className='font-semibold text-2xl'> Why iBest</h1>
                </div>
                <div className="w-full h-20 flex items-center justify-center">
                    <Button className='w-1/6'>Services</Button><Button className='w-1/6 ml-5'>Consulyancy</Button>
                </div>
                <div className="w-3/5 h-2/6 mt-12 bg-[url('./images/co.png')] bg-cover bg-center"></div>
            </div>
            <div className="w-screen h-screen bg-yellow-200 flex items-center justify-center flex-col">
                <div className="w-3/5 h-full bg-green-100 flex items-center justify-center flex-col">
                    <div className='bg-bb space-y-5'>
                        <h1>With the increasing economic activities in the country, and most youth joining the workforce, the need to guide and assist young entrepreneurs and small business establishment is becoming a necessity!</h1>
                        <h1>Through iBEST Consultancy Services, with the team of energetic and enthusiastic experts, we provide our clients with real-time market studies and analysis through which project's feasibility are done. We advise and recommend our clients on the projects they want to execute and the pertinent business processes they have to integrate to make their projects successful.</h1>
                        <h1>Beyond business project proposal writing with strong financial background, we do help and write project proposals for grant applications which are mainly required by the Civil Society Organizations.</h1>
                    </div>
                    <h1 className='pt-10 pb-10'>OUR COMPETENCIES</h1>
                    <div className="w-full h-3/6 bg-black"></div>
                </div>
            </div>
            <div className="w-screen h-screen bg-red-200"></div>
            <div className="w-screen h-screen bg-pink-200"></div>            
        </div>      
    );
}

export default MyComponent;
