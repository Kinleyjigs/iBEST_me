"use client"
import * as React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";

const Purpose: React.FC = () => {
    const [activeTab, setActiveTab] = React.useState("Purpose"); // Track the active tab
    const [slideDirection, setSlideDirection] = React.useState("right"); // Track the slide direction

    const handleTabChange = (value: string) => {
        setActiveTab(value);
        // Determine the slide direction
        setSlideDirection(value === "Purpose" ? "right" : "left");
    };

    return (
        <Tabs defaultValue="Purpose" className="w-80  md:w-[500px] mdx:w-[700px] lg:w-[600px]" onValueChange={handleTabChange}>
            <TabsList className="flex w-full h-12 mdx:h-20 lg:h-16 bg-sky-950">
                <TabsTrigger value="Purpose" className="flex-1 text-center mdx:text-4xl lg:text-3xl text-lg text-white h-full">
                    Purpose
                </TabsTrigger>
                <TabsTrigger value="Values" className="flex-1 text-center text-lg mdx:text-4xl lg:text-3xl text-white h-full">
                    Values
                </TabsTrigger>
            </TabsList>

            <div className="relative flex-grow h-[260px] mdx:h-[400px] lg:h-[300px] overflow-hidden"> {/* Set a fixed height for the container */}
                <TabsContent value="Purpose" className={`absolute inset-0 transition-transform duration-500 ${activeTab === "Purpose" ? "translate-x-0" : slideDirection === "right" ? "translate-x-full" : "-translate-x-full"}`}>
                    <Card className="h-full">
                        <div className="text-black text-base md:text-xl mdx:text-3xl md:p-10 text-center m-5 lg:text-2xl leading-8">
                            iBEST is dedicated towards improving the lives of 
                            our clients and communities around us and beyond 
                            through our excellence learning experience driven by 
                            research. Our maxim is “…aspire to learn more and apply”.
                        </div>
                    </Card>
                </TabsContent>
                <TabsContent value="Values" className={`absolute inset-0 transition-transform duration-500 ${activeTab === "Values" ? "translate-x-0" : slideDirection === "right" ? "-translate-x-full" : "translate-x-full"}`}>
                    <Card className="h-full">
                        <div className="ml-8 mt-3 mdx:mt-5 leading-8">
                            <ul className="list-disc text-base md:text-lg md:space-y-3 mdx:text-3xl lg:text-2xl lg:space-y-1 list-inside "> {/* Added list styles */}
                                <li><strong>Integrity:</strong> Uphold honesty and human values.</li>
                                <li><strong>Boldness:</strong> Foster innovation and leadership.</li>
                                <li><strong>Empathy:</strong> Build connections through understanding.</li>
                                <li><strong>Social Responsibility:</strong> Contribute to community growth.</li>
                                <li><strong>Trust:</strong> Prioritize transparency and accountability.</li>
                            </ul>
                        </div>
                    </Card>
                </TabsContent>
            </div>
        </Tabs>
    );
};

export default Purpose;
