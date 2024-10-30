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
        
        <div className=" aboulute flex-col">
            <div className="text-black text-4xl font-semibold text-center mb-8">
                Statistics
            </div>
            <div className="flex justify-center space-x-10">
                {/* Statistics Section */}
                <div className="flex justify-center items-center space-x-10">
                    {/* Employee Statistic */}
                    <div className="flex flex-col items-center space-y-4 p-10">
                        <div className="w-28 h-24">
                            <img src={Employee.src} alt="Employee" />
                        </div>
                        <p className="text-lg text-gray-600">Employee</p>
                        <div className="flex items-baseline">
                            <span className="text-6xl font-extrabold text-blue-600">
                                <CountUp 
                                    start={10} // Starting count
                                    end={100} // Ending count
                                    duration={5} 
                                    delay={0} 
                                    style={{ width: '95px', display: 'inline-block' }}
                                />
                            </span>
                            <span className="text-6xl font-extrabold text-blue-600 ml-1">+</span>
                        </div>
                    </div>

                    {/* Services Provided Statistic */}
                    <div className="flex flex-col items-center space-y-4 p-10">
                        <div className="w-28 h-24">
                            <img src={Services.src} alt="Services Provided" />
                        </div>
                        <p className="text-lg text-gray-600">Services Provided</p>
                        <div className="flex items-baseline">
                            <span className="text-6xl font-extrabold text-blue-600">
                                <CountUp 
                                    start={10} 
                                    end={100} 
                                    duration={5} 
                                    delay={0} 
                                    style={{ width: '95px', display: 'inline-block' }}
                                />
                            </span>
                            <span className="text-6xl font-extrabold text-blue-600 ml-1">+</span>
                        </div>
                    </div>

                    {/* Client Satisfaction Rate Statistic */}
                    <div className="flex flex-col items-center space-y-4 p-10">
                        <div className="w-28 h-24">
                            <img src={Rate.src} alt="Client Satisfaction Rate" />
                        </div>
                        <p className="text-lg text-gray-600">Client Satisfaction Rate</p>
                        <div className="flex items-baseline">
                            <span className="text-6xl font-extrabold text-blue-600">
                                <CountUp 
                                    start={10} 
                                    end={100} 
                                    duration={5} 
                                    delay={0} 
                                    style={{ width: '95px', display: 'inline-block' }}
                                />
                            </span>
                            <span className="text-6xl font-extrabold text-blue-600 ml-1">%</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Statistics;
