"use client";
import React, { useState } from "react";
import Sonam from "../../images/team/director.png";
import Rinchen from "../../images/team/CEO.png";
import Tharchen from "../../images/team/founder.png";
import Yeethob from "../../images/team/yeethob.png";
import Yeshey from "../../images/team/yeshey.png";
import Cheku from "../../images/team/cheku.png";
import Tenzin from "../../images/team/tenzin.png";
import Kinley from "../../images/team/kinley.png";

const teamMembers = [
    { name: "Sonam Tobgay", title: "Director", img: Sonam },
    { name: "Sonam Rinchen", title: "CEO", img: Rinchen },
    { name: "Tharchen", title: "CEO & Founder", img: Tharchen },
    { name: "Tenzin", title: "Operations Director", img: Tenzin },
    { name: "Cheku", title: "Chief of Technology", img: Cheku },
    { name: "Kinley", title: "Operations Manager", img: Kinley },
    { name: "Yeethob", title: "Technical Head", img: Yeethob },
    { name: "Yeshey", title: "Marketing Officer", img: Yeshey },
];

const Team = () => {
    const [isPaused, setIsPaused] = useState(false);

    const handleMouseEnter = () => {
        setIsPaused(true); // Pause the animation
    };

    const handleMouseLeave = () => {
        setIsPaused(false); // Resume the animation
    };

    return (
        <div className="overflow-hidden mx-auto relative">
            <div className="text-2xl font-semibold text-center"> {/* Reduced bottom margin */}
                Our Team
            </div>
            <div className="bg-white w-screen py-4 px-4"> {/* Reduced top padding */}
                
                <div className="overflow-hidden relative">
                    <div 
                        className={`w-full relative slide-track flex items-center animate-scroll ${isPaused ? 'paused-animation' : ''}`}
                        style={{ height: '300px' }} // Increased height to accommodate the hover effect
                    >
                        <div className="flex space-x-16">
                            {teamMembers.map((member, index) => (
                                <div 
                                    key={index} 
                                    className="relative w-40 min-h-48 transform transition-transform duration-300 hover:scale-110 hover:z-10" // Added hover scale and z-index
                                    onMouseEnter={handleMouseEnter}
                                    onMouseLeave={handleMouseLeave}
                                >
                                    <img 
                                        src={member.img.src} 
                                        alt={member.name} 
                                        className="w-full h-auto transform transition-transform duration-300" // Smooth transition
                                    />
                                    <div className="absolute inset-0 flex flex-col items-center justify-end text-white">
                                        <h1 className="text-lg font-semibold">{member.name}</h1>
                                        <h2 className="text-sm">{member.title}</h2>
                                    </div>
                                </div>
                            ))}
                            {teamMembers.map((member, index) => (
                                <div 
                                    key={index + teamMembers.length} 
                                    className="relative w-40 min-h-48 transform transition-transform duration-300 hover:scale-110 hover:z-10" // Added hover scale and z-index
                                    onMouseEnter={handleMouseEnter}
                                    onMouseLeave={handleMouseLeave}
                                >
                                    <img 
                                        src={member.img.src} 
                                        alt={member.name} 
                                        className="w-full h-auto transform transition-transform duration-300" // Smooth transition
                                    />
                                    <div className="absolute inset-0 flex flex-col items-center justify-end text-white">
                                        <h1 className="text-lg font-semibold">{member.name}</h1>
                                        <h2 className="text-sm">{member.title}</h2>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Team;
