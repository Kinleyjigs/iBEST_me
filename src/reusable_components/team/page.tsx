import React from "react";
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
    return (
        <div className="overflow-hidden mx-auto relative">
            <div className="text-2xl font-semibold text-center">Our Team</div>
            {/* Black box container with full screen width */}
            <div className="bg-white w-screen py-8 px-4 ">
                {/* Optional Heading */}
                {/* <h1 className="text-2xl font-semibold mb-4 text-white">Our Team</h1> */}

                {/* Container for infinite scrolling */}
                <div className="overflow-hidden relative">
                    <div className="w-full relative slide-track flex animate-scroll">
                        <div className="flex space-x-16 animate-loop-scroll">
                            {/* Original team members */}
                            {teamMembers.map((member, index) => (
                                <div key={index} className="relative w-40 min-h-48">
                                    <img src={member.img.src} alt={member.name} className="" />
                                    <div className="absolute inset-0 flex flex-col items-center justify-end text-white">
                                        <h1 className="text-lg font-semibold">{member.name}</h1>
                                        <h2 className="text-sm">{member.title}</h2>
                                    </div>
                                </div>
                            ))}
                            {/* Duplicate team members for seamless scrolling */}
                            {teamMembers.map((member, index) => (
                                <div key={index + teamMembers.length} className="relative w-40 min-h-48">
                                    <img src={member.img.src} alt={member.name} className="" />
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
