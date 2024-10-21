import React from 'react';
import NavBar from '../../reusable_components/nav_bar/page'; 
import { Button } from "@/components/ui/button"
import Footer from '@/reusable_components/footer/page';
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
                <div className="w-full h-3/5 bg-[url('./images/courses1.png')] bg-center bg-cover flex items-center justify-center mb-5">
                    <h1 className='font-extrabold text-3xl text-white'>Services</h1>
                </div>
                <div className="w-full h-20 flex items-center justify-center">
                    <h1 className='font-semibold text-2xl'> Courses</h1>
                </div>
                <div className="w-full h-20 flex items-center justify-center relative">
                    <Button className='w-1/6 relative drop-shadow-md hover:drop-shadow-xl'><a href="/courses">Courses</a></Button><Button className='w-1/6 ml-5 relative drop-shadow-md hover:drop-shadow-xl'><a href="/consultancy">Consultancy</a></Button>
                </div>
                <div className="w-full h-1/5 flex flex-col items-center justify-end space-y-5 relative">
                    <div className="w-2/5 h-16 bg-lightBlue rounded flex items-center justify-center relative drop-shadow-md hover:drop-shadow-xl">
                        <h1>Life Skills Courses</h1>
                    </div>
                    <div className="w-2/5 h-16 bg-lightBlue rounded flex items-center justify-center relative drop-shadow-md hover:drop-shadow-xl">
                        <h1>Leadership Courses </h1>
                    </div>
                </div>
            </div>     
            <div className="w-screen h-screen flex items-center justify-center">
                <div className="w-2/5 h-full space-y-5 ">
                    <div className="w-full h-16 bg-lightBlue rounded mt-5 flex items-center justify-center relative drop-shadow-md hover:drop-shadow-xl">
                        <h1>Management Courses</h1>
                    </div>
                    <div className="w-full h-16 bg-lightBlue rounded flex items-center justify-center relative drop-shadow-md hover:drop-shadow-xl">
                        <h1>Accounting and Financial Courses</h1>
                    </div>
                    <div className="w-full h-16 bg-lightBlue rounded flex items-center justify-center relative drop-shadow-md hover:drop-shadow-xl">
                        <h1>Entrepreneurship Courses</h1>
                    </div>
                    <div className="w-full h-16 bg-lightBlue rounded flex items-center justify-center relative drop-shadow-md hover:drop-shadow-xl">
                        <h1>Multimedia Courses</h1>
                    </div>
                    <div className="w-full h-16 bg-lightBlue rounded flex items-center justify-center relative drop-shadow-md hover:drop-shadow-xl">
                        <h1>Film Studies Courses</h1>
                    </div>
                    <div className="w-full h-16 bg-lightBlue rounded flex items-center justify-center relative drop-shadow-md hover:drop-shadow-xl">
                        <h1>Technical and Engineering Courses</h1>
                    </div>
                    <div className="w-full h-16 bg-lightBlue rounded flex items-center justify-center relative drop-shadow-md hover:drop-shadow-xl">
                        <h1>IT Courses</h1>
                    </div>
                    <div className="w-full h-56 flex items-center justify-center animate-slideRight">
                        <h1 className='text-2xl font-semibold pt-36'>Courses Available</h1>
                    </div>
                </div>
            </div>          
            <div className="w-screen h-screen flex flex-col space-y-16 items-center justify-center">
                <div className="w-4/5 h-2/5 flex flex-row">
                    <div className="w-2/5 h-full flex items-center justify-center">
                        <ResizablePanelGroup direction="vertical" className="h-full w-4/6 rounded-lg border  bg-slate-500">
                            <ResizablePanel defaultSize={50}>
                                <div className="flex h-full items-center justify-center p-6 bg-[url('./images/lifeSkill.jpg')] bg-cover">
                                </div>
                            </ResizablePanel>
                            <ResizableHandle />
                            <ResizablePanel defaultSize={50}>
                                <div className="flex h-full items-center justify-center p-6 flex-col">
                                    <h1 className='text-white'>Life Skills Courses</h1><br />
                                    <p className='text-white'>The life skills course equips trainees with key concepts and practical skills, emphasizing modern applications and strategies.</p>
                                </div>
                            </ResizablePanel>
                        </ResizablePanelGroup>
                    </div>
                    <div className="w-1/5 h-full"></div>
                    <div className="w-2/5 h-full flex items-center justify-center">
                        <ResizablePanelGroup direction="vertical" className="h-full w-4/6 rounded-lg border  bg-slate-500">
                            <ResizablePanel defaultSize={50}>
                                <div className="flex h-full items-center justify-center p-6 bg-[url('./images/leader.png')] bg-cover">
                                </div>
                            </ResizablePanel>
                            <ResizableHandle />
                            <ResizablePanel defaultSize={50}>
                                <div className="h-full items-center justify-center p-6 flex flex-col">
                                    <h1 className='text-white'> Leadership Courses</h1><br />
                                    <p className='text-white'>Our leadership courses empower trainees enhancing soft skills and establishing personality benchmarks for any career, fostering leadership abilities and promoting personal growth.</p>
                                </div>
                            </ResizablePanel>
                        </ResizablePanelGroup>
                    </div>
                </div>
                <div className="w-4/5 h-2/5 flex flex-row">
                    <div className="w-2/5 h-full flex items-center justify-center">
                        <ResizablePanelGroup direction="vertical" className="h-full w-4/6 rounded-lg border  bg-slate-500">
                            <ResizablePanel defaultSize={50}>
                                <div className="flex h-full items-center justify-center p-6 bg-[url('./images/management.jpeg')]  bg-center bg-cover">
                                </div>
                            </ResizablePanel>
                            <ResizableHandle />
                            <ResizablePanel defaultSize={50}>
                                <div className="flex h-full items-center justify-center p-6 flex-col">
                                    <h1 className='text-white'>Management Courses</h1><br />
                                    <p className='text-white'>Our management courses equip trainees with essential skills in communication, planning, organizing, leading, and decision making for effective management.</p>
                                </div>
                            </ResizablePanel>
                        </ResizablePanelGroup>
                    </div>
                    <div className="w-1/5 h-full"></div>
                    <div className="w-2/5 h-full flex items-center justify-center">
                        <ResizablePanelGroup direction="vertical" className="h-full w-4/6 rounded-lg border  bg-slate-500">
                            <ResizablePanel defaultSize={50}>
                                <div className="flex h-full items-center justify-center p-6 bg-[url('./images/finance.jpg')] bg-cover">
                                </div>
                            </ResizablePanel>
                            <ResizableHandle />
                            <ResizablePanel defaultSize={50}>
                                <div className="h-full items-center justify-center p-6 flex flex-col">
                                    <h1 className='text-white'>Accounting and Financial Courses</h1><br />
                                    <p className='text-white'>Our accounting and financial management courses provide practical and theoretical knowledge, enabling trainees to analyze financial situations and apply skills in today's market.</p>
                                </div>
                            </ResizablePanel>
                        </ResizablePanelGroup>
                    </div>
                </div>
            </div>
            <div className="w-screen h-screen flex flex-col space-y-16 items-center justify-center">
                <div className="w-4/5 h-2/5 flex flex-row">
                    <div className="w-2/5 h-full flex items-center justify-center">
                        <ResizablePanelGroup direction="vertical" className="h-full w-4/6 rounded-lg border  bg-slate-500">
                            <ResizablePanel defaultSize={50}>
                                <div className="flex h-full items-center justify-center p-6 bg-[url('./images/en.jpeg')] bg-cover">
                                </div>
                            </ResizablePanel>
                            <ResizableHandle />
                            <ResizablePanel defaultSize={50}>
                                <div className="flex h-full items-center justify-center p-6 flex-col">
                                    <h1 className='text-white'>Entrepreneurship Courses</h1><br />
                                    <p className='text-white'>Our entrepreneurship courses teach the essential concepts and skills for business success, focusing on sales, marketing, and management while developing a business.</p>
                                </div>
                            </ResizablePanel>
                        </ResizablePanelGroup>
                    </div>
                    <div className="w-1/5 h-full"></div>
                    <div className="w-2/5 h-full flex items-center justify-center">
                        <ResizablePanelGroup direction="vertical" className="h-full w-4/6 rounded-lg border  bg-slate-500">
                            <ResizablePanel defaultSize={50}>
                                <div className="flex h-full items-center justify-center p-6 bg-[url('./images/media.jpg')] bg-cover">
                                </div>
                            </ResizablePanel>
                            <ResizableHandle />
                            <ResizablePanel defaultSize={50}>
                                <div className="h-full items-center justify-center p-6 flex flex-col">
                                    <h1 className='text-white'>Multimedia Courses</h1><br />
                                    <p className='text-white'>As a leading multimedia company, iBEST offers courses where trainees learn from experts, gaining hands-on experience with tools and equipment to create exceptional multimedia content.</p>
                                </div>
                            </ResizablePanel>
                        </ResizablePanelGroup>
                    </div>
                </div>
                <div className="w-4/5 h-2/5 flex flex-row">
                    <div className="w-2/5 h-full flex items-center justify-center">
                        <ResizablePanelGroup direction="vertical" className="h-full w-4/6 rounded-lg border  bg-slate-500">
                            <ResizablePanel defaultSize={50}>
                                <div className="flex h-full items-center justify-center p-6 bg-[url('./images/flim.jpg')] bg-cover">
                                </div>
                            </ResizablePanel>
                            <ResizableHandle />
                            <ResizablePanel defaultSize={50}>
                                <div className="flex h-full items-center justify-center p-6 flex-col">
                                    <h1 className='text-white'>Film Studies Courses</h1><br />
                                    <p className='text-white'>This course covers the fundamentals of film and video production, blending theory with hands-on practice. Trainees learn the basics of filmmaking and explore the film and cinema industry..</p>
                                </div>
                            </ResizablePanel>
                        </ResizablePanelGroup>
                    </div>
                    <div className="w-1/5 h-full"></div>
                    <div className="w-2/5 h-full flex items-center justify-center">
                        <ResizablePanelGroup direction="vertical" className="h-full w-4/6 rounded-lg border  bg-slate-500">
                            <ResizablePanel defaultSize={50}>
                                <div className="flex h-full items-center justify-center p-6 bg-[url('./images/mo.jpg')] bg-cover">
                                </div>
                            </ResizablePanel>
                            <ResizableHandle />
                            <ResizablePanel defaultSize={50}>
                                <div className="h-full items-center justify-center p-6 flex flex-col">
                                    <h1 className='text-white'>Technical and Engineering Courses</h1><br />
                                    <p className='text-white'>iBEST Engineering and Technology courses blend theory and practical skills, focusing on essential tools and mechanics for operational and maintenance skills in today's tech-driven world.</p>
                                </div>
                            </ResizablePanel>
                        </ResizablePanelGroup>
                    </div>
                </div>
            </div>
            <div className="w-screen h-screen flex flex-col space-y-16 items-center justify-center">
                <div className="w-full h-2/5 flex flex-row">
                    <div className="w-32 h-80 bg-white"></div>
                    <div className="w-96 h-full bg-white">
                        <ResizablePanelGroup direction="vertical" className="h-full w-4/6 rounded-lg border  bg-slate-500">
                            <ResizablePanel defaultSize={50}>
                                <div className="flex h-full items-center justify-center p-6 bg-[url('./images/ict.jpg')] bg-cover"></div>
                            </ResizablePanel>
                            <ResizableHandle />
                            <ResizablePanel defaultSize={50}>
                                <div className="flex h-full items-center justify-center p-6 flex-col">
                                    <h1 className='text-white'>IT Courses</h1><br />
                                    <p className='text-white'>iBEST Engineering and Technology courses equip trainees with essential operational skills for today’s tech-driven world, blending theory and practical learning.</p>
                                </div>
                            </ResizablePanel>
                        </ResizablePanelGroup>
                    </div>
                </div>
                <div className="w-full h-1/5 "></div>
                <div className="w-full h-2/5 ">
                    <Footer />
                </div>
            </div>          
        </div>      
    );
}

export default MyComponent;
