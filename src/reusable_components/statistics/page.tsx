import React, { useState, useEffect } from "react";
import CountUp from 'react-countup';
import Employee from "../../images/statistics/employee.png";
import Services from "../../images/statistics/services_provided.png";
import Rate from "../../images/statistics/rate.png";

const Statistics: React.FC = () => {
    const [startCount, setStartCount] = useState(false);

    // Start counting when the component mounts
    useEffect(() => {
        setStartCount(true);
    }, []); // Empty dependency array ensures this runs once on mount

    return (
        <div className="w-screen h-1/3 flex flex-col items-center  pt-20">
            <div className="flex justify-center w-2/3 ">
                {/* Statistics Section */}
                <div className="w-11/12 flex justify-center items-center space-x-10">
                    {/* Employee Statistic */}
                    <div className="flex flex-col w-1/3 items-center space-y-4 h-full">
                        <div className="w-12 h-12 md:w-20 md:h-20">
                            <img src={Employee.src} alt="Employee" />
                        </div>
                        <p className="text-base md:text-xl pt-2 text-gray-600">Employee</p>
                        <div className="flex items-baseline">
                            <span className="text-3xl font-extrabold text-blue-600 pt-10 lg:pt-">
                                <CountUp 
                                    start={10} // Starting count
                                    end={100} // Ending count
                                    duration={5} 
                                    delay={0} 
                                    style={{ width: '60px', display: 'inline-block' }}
                                />
                            </span>
                            <span className="text-3xl font-extrabold text-blue-600 ml-1">+</span>
                        </div>
                    </div>
                    {/* Services Provided Statistic */}
                    <div className="flex flex-col items-center w-1/3 space-y-4 h-full">
                        <div className="w-12 h-12 md:w-20 md:h-20">
                            <img src={Services.src} alt="Services Provided" />
                        </div>
                        <p className="text-base md:text-xl text-gray-600">Services Provided</p>
                        <div className="flex items-baseline">
                            <span className="text-3xl font-extrabold text-blue-600 pt-6">
                                <CountUp 
                                    start={10} 
                                    end={100} 
                                    duration={5} 
                                    delay={0} 
                                    style={{ width: '60px', display: 'inline-block' }}
                                />
                            </span>
                            <span className="text-3xl font-extrabold text-blue-600">+</span>
                        </div>
                    </div>

                    {/* Client Satisfaction Rate Statistic */}
                    <div className="flex flex-col w-1/3 h-full items-center  space-y-4">
                        <div className="w-12 h-12 md:w-20 md:h-20">
                            <img src={Rate.src} alt="Client Satisfaction Rate" />
                        </div>
                        <p className="text- md:text-xl text-gray-600 align-middle">Client Satisfaction Rate</p>
                        <div className="flex items-baseline">
                            <span className="text-3xl font-extrabold text-blue-600 mb-7 lg:pt-5">
                                <CountUp 
                                    start={10} 
                                    end={100} 
                                    duration={5} 
                                    delay={0} 
                                    style={{ width: '60px', display: 'inline-block' }}
                                />
                            </span>
                            <span className="text-3xl font-extrabold text-blue-600 ml-1">%</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Statistics;
