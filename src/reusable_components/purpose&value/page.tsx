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
        <Tabs defaultValue="Purpose" className="w-[500px]" onValueChange={handleTabChange}>
            <TabsList className="flex w-full h-12 bg-sky-950">
                <TabsTrigger value="Purpose" className="flex-1 text-center text-lg text-white h-full">
                    Purpose
                </TabsTrigger>
                <TabsTrigger value="Values" className="flex-1 text-center text-lg text-white h-full">
                    Values
                </TabsTrigger>
            </TabsList>

            <div className="relative flex-grow h-[260px] overflow-hidden"> {/* Set a fixed height for the container */}
                <TabsContent value="Purpose" className={`absolute inset-0 transition-transform duration-500 ${activeTab === "Purpose" ? "translate-x-0" : slideDirection === "right" ? "translate-x-full" : "-translate-x-full"}`}>
                    <Card className="h-full">
                        <div className="text-black text-center mt-12 leading-8">
                            iBEST is dedicated towards improving the lives of <br /> 
                            our clients and communities around us and beyond <br /> 
                            through our excellence learning experience driven by <br /> 
                            research. Our maxim is “…aspire to learn more and apply”.
                        </div>
                    </Card>
                </TabsContent>
                <TabsContent value="Values" className={`absolute inset-0 transition-transform duration-500 ${activeTab === "Values" ? "translate-x-0" : slideDirection === "right" ? "-translate-x-full" : "translate-x-full"}`}>
                    <Card className="h-full">
                        <div className="ml-8 mt-8 leading-8">
                            <ul className="list-disc list-inside space-y-2"> {/* Added list styles */}
                                <li>Integrity: Uphold honesty and human values.</li>
                                <li>Boldness: Foster innovation and leadership.</li>
                                <li>Empathy: Build connections through understanding.</li>
                                <li>Social Responsibility: Contribute to community growth.</li>
                                <li>Trust: Prioritize transparency and accountability.</li>
                            </ul>
                        </div>
                    </Card>
                </TabsContent>
            </div>
        </Tabs>
    );
};

export default Purpose;
