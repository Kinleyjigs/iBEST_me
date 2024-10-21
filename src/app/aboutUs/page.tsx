import React from 'react';
import NavBar from '../../reusable_components/nav_bar/page'; 
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Footer from "../../reusable_components/footer/page";
import Team from "../../reusable_components/team/page"

import {
    Card,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    ResizableHandle,
    ResizablePanel,
    ResizablePanelGroup,
} from "@/components/ui/resizable"
function MyComponent() {
    return (
        <div>
            <div className="w-screen h-screen">
                <NavBar />
                <div className="w-full h-2/6 bg-[url('./images/traning.jpg')] bg-cover flex items-center justify-center text-white">
                    <h1 className='text-3xl font-bold'>About Us</h1>
                </div>
                <div className="w-full h-3/6 bg-bb flex flex-row">
                    <div className="w-1/2 h-full bg-[url('./images/about.png')] bg-cover bg-bottom"></div>
                    <div className="w-1/2 h-full bg-bb flex items-center justify-center">
                        <div>
                            <h1 className='text-2xl font-semibold pt-10 pb-5'>Our Vision</h1>
                            <h1 className='text-xl animate-slideRight'>“To become an acclaimed institution</h1>
                            <h1 className='text-xl'>and one-stop learning center in Bhutan</h1>
                            <h1 className='text-xl animate-slideRight'>and beyond”</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-screen h-screen flex flex-col items-center justify-center space-y-24">
                <Tabs defaultValue="account" className="w-2/5">
                    <TabsList className="grid w-full grid-cols-2 bg-blueDark">
                        <TabsTrigger value="purpose">Our Purpose</TabsTrigger>
                        <TabsTrigger value="values">Our Values</TabsTrigger>
                    </TabsList>
                    <TabsContent value="purpose">
                        <Card>
                        <CardHeader className='flex items-center justify-center space-y-4'>
                            <CardTitle>Our Purpose</CardTitle>
                            <CardDescription>
                            <p className='text-blueDark'>iBEST is dedicated towards improving the lives of <br /> our clients and communities around us and beyond <br /> through our excellence learning experience driven by <br /> research. Our maxim is “…aspire to learn more and apply”.</p>
                            </CardDescription>
                        </CardHeader>
                        </Card>
                    </TabsContent>
                    <TabsContent value="values">
                        <Card>
                        <CardHeader className=' flex items-center justify-center space-y-4'>
                            <CardTitle>Our Values</CardTitle>
                            <CardDescription>
                                <ul className={"list-disc list-inside space-y-4"} >
                                    <li>Integrity: Uphold honesty and human values.</li>
                                    <li>Boldness: Foster innovation and leadership.</li>
                                    <li>Empathy: Build connections through understanding.</li>
                                    <li>Social Responsibility: Contribute to community growth.</li>
                                    <li>Trust: Prioritize transparency and accountability.</li>
                                </ul>
                            </CardDescription>
                        </CardHeader>
                        </Card>
                    </TabsContent>
                </Tabs>
                <h1 className='text-2xl font-semibold'>OUR OBJECTIVES</h1>
                <div className="w-4/5 h-2/5 flex flex-row">
                    <div className="w-2/5 h-full flex items-center justify-center">
                        <ResizablePanelGroup direction="vertical" className="h-full w-4/6 rounded-lg border  bg-slate-500">
                            <ResizablePanel defaultSize={50}>
                                <div className="flex h-full items-center justify-center p-6 bg-[url('./images/one.jpg')] bg-cover">
                                </div>
                            </ResizablePanel>
                            <ResizableHandle />
                            <ResizablePanel defaultSize={50}>
                                <div className="flex h-full items-center justify-center p-6 flex-col">
                                    <h1 className='text-white'>Clear Pathways Between Training Programs</h1><br />
                                    <p className='text-white'>Emphasize collaboration among courses to ensure trainees and employers understand program objectives and outcomes.</p>
                                </div>
                            </ResizablePanel>
                        </ResizablePanelGroup>
                    </div>
                    <div className="w-1/5 h-full"></div>
                    <div className="w-2/5 h-full flex items-center justify-center">
                        <ResizablePanelGroup direction="vertical" className="h-full w-4/6 rounded-lg border  bg-slate-500">
                            <ResizablePanel defaultSize={50}>
                                <div className="flex h-full items-center justify-center p-6 bg-[url('./images/two.jpg')] bg-cover">
                                </div>
                            </ResizablePanel>
                            <ResizableHandle />
                            <ResizablePanel defaultSize={50}>
                                <div className="h-full items-center justify-center p-6 flex flex-col">
                                    <h1 className='text-white'>Single Point of Contact</h1><br />
                                    <p className='text-white'>Highlight the  institute's role in providing a transparent interface between practice, policy, education, and research.</p>
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
                                <div className="flex h-full items-center justify-center p-6 bg-[url('./images/three.jpg')] bg-cover">
                                </div>
                            </ResizablePanel>
                            <ResizableHandle />
                            <ResizablePanel defaultSize={50}>
                                <div className="flex h-full items-center justify-center p-6 flex-col">
                                    <h1 className='text-white'>Meet Workforce Development Needs</h1><br />
                                    <p className='text-white'>Showcase the institute's efforts to provide rapid-response workforce training for corporate corporate and government agencies.</p>
                                </div>
                            </ResizablePanel>
                        </ResizablePanelGroup>
                    </div>
                    <div className="w-1/5 h-full"></div>
                    <div className="w-2/5 h-full flex items-center justify-center">
                        <ResizablePanelGroup direction="vertical" className="h-full w-4/6 rounded-lg border  bg-slate-500">
                            <ResizablePanel defaultSize={50}>
                                <div className="flex h-full items-center justify-center p-6 bg-[url('./images/four.jpg')] bg-cover">
                                </div>
                            </ResizablePanel>
                            <ResizableHandle />
                            <ResizablePanel defaultSize={50}>
                                <div className="h-full items-center justify-center p-6 flex flex-col">
                                    <h1 className='text-white'>Promote Innovative Research and Training</h1><br />
                                    <p className='text-white'>Describe the interdisciplinary and collaborative research opportunities offered by the institute.</p>
                                </div>
                            </ResizablePanel>
                        </ResizablePanelGroup>
                    </div>
                </div>
                <div className="w-4/5 h-2/5 flex flex-row">
                    <div className="w-2/5 h-full flex items-center justify-center">
                        <ResizablePanelGroup direction="vertical" className="h-full w-4/6 rounded-lg border  bg-slate-500">
                            <ResizablePanel defaultSize={50}>
                                <div className="flex h-full items-center justify-center p-6 bg-[url('./images/five.jpg')] bg-cover">
                                </div>
                            </ResizablePanel>
                            <ResizableHandle />
                            <ResizablePanel defaultSize={50}>
                                <div className="flex h-full items-center justify-center p-6 flex-col">
                                    <h1 className='text-white'>Leadership in Industry</h1><br />
                                    <p className='text-white'>Focus on the institute's role in providing leadership through advocacy, seminars, and training, particularly in tourism and hospitality.</p>
                                </div>
                            </ResizablePanel>
                        </ResizablePanelGroup>
                    </div>
                    <div className="w-1/5 h-full"></div>
                    <div className="w-2/5 h-full flex items-center justify-center">
                        <ResizablePanelGroup direction="vertical" className="h-full w-4/6 rounded-lg border  bg-slate-500">
                            <ResizablePanel defaultSize={50}>
                                <div className="flex h-full items-center justify-center p-6 bg-[url('./images/six.jpg')] bg-cover">
                                </div>
                            </ResizablePanel>
                            <ResizableHandle />
                            <ResizablePanel defaultSize={50}>
                                <div className="h-full items-center justify-center p-6 flex flex-col">
                                    <h1 className='text-white'>Professional Development and Consultancy</h1><br />
                                    <p className='text-white'>Highlight the innovative professional development and consultancy services available.</p>
                                </div>
                            </ResizablePanel>
                        </ResizablePanelGroup>
                    </div>
                </div>
            </div>
            <div className="w-screen h-screen flex flex-col space-y-16 items-center justify-center">
                <div className="w-4/5 h-2/5 flex flex-row">
                <div className="w-2/5 h-full flex items-center justify-center pb-10">
                        <ResizablePanelGroup direction="vertical" className="h-full w-4/6 rounded-lg border  bg-slate-500">
                            <ResizablePanel defaultSize={50}>
                                <div className="flex h-full items-center justify-center p-6 bg-[url('./images/seven.webp')] bg-cover">
                                </div>
                            </ResizablePanel>
                            <ResizableHandle />
                            <ResizablePanel defaultSize={50}>
                                <div className="flex h-full items-center justify-center p-6 flex-col">
                                    <h1 className='text-white'>Encourage Economic Development</h1><br />
                                    <p className='text-white'>Describe initiatives aimed at developing rural entrepreneurs and supporting agricultural exports.</p>
                                </div>
                            </ResizablePanel>
                        </ResizablePanelGroup>
                    </div>
                    
                </div>

                <Team />

                </div>
                <Footer />
        </div>
    );
}

export default MyComponent;
