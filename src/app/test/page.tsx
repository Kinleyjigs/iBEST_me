"use client"

import NavigationBar from "@/reusable_components/nav_bar/page"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Logo from "../../images/Website Pictures/logo.jpg"
import Footer from "../../reusable_components/footer/page"
import SmallNavBar from "../../reusable_components/small_navbar/page";
import NavBar from '../../reusable_components/nav_bar/page'; 
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import {
    Card,
    CardContent
} from "@/components/ui/card"
import Statistics from "@/reusable_components/statistics/page"

export default function Home() {
    return (

        <div className="bg-white">
            <div className="w-screen h-screen flex flex-col">
            <div className="hidden sm:block">
                <NavBar />
            </div>
                {/* <Header></Header> */}
                <div className="w-screen h-2/5 flex flex-col items-center justify-center  md:h-2/5 lg:h-2/4 bg-[url('./images/building.jpg')] lg:bg-cover  bg-cover">
                    <div className="w-32 h-32">
                    <Avatar className="w-full h-full border-current	m-auto">
                        <AvatarImage src={Logo.src} alt="@shadcn" />  
                    </Avatar>
                    </div>
                    <h1 className="text-center font-extrabold text-lg md:text-4xl lg:text-4xl	text-white animate-slideLeft stoke-black">“To become an acclaimed institution</h1>
                    <h1 className="text-center font-extrabold text-base md:text-3xl lg:text-3xl	text-white animate-slideLeft stoke-black">and one-stop learning center in</h1>
                    <h1 className="text-center font-extrabold text-base md:text-3xl lg:text-3xl	text-white animate-slideLeft stoke-black">Bhutan and beyond”</h1>
                </div>
                <div className="w-screen h-72 md:h-3/5 lg:">
                    <div className=" w-screen h-14 lg:h-1/6 md:h-32 flex items-center justify-center">
                        <h1 className="font-bold md:text-2xl lg:pt-5">Certified Training Institute Registered with</h1>
                    </div>
                    <div className="w-screen h-56 md:h-3/5 lg:h-5/6 flex items-center justify-center space-x-2 lg:space-x-10">
                        <Avatar className="w-28 md:w-48 md:h-48 h-28  border-current animate-slideLeft mt-14 md:mt-24">
                            <AvatarImage src="https://www.bmhc.gov.bt/wp-content/uploads/2023/07/tvet.png" alt="@shadcn" />
                            <AvatarFallback>TVET</AvatarFallback>
                        </Avatar>
                        <Avatar className="w-32 h-28 md:w-52 md:h-48 border-current	mb-24">
                            <AvatarImage src="https://www.bmf.bt/wp-content/uploads/2018/10/rgob-logo.png" alt="@shadcn" />
                            <AvatarFallback>RGOB</AvatarFallback>
                        </Avatar>
                        <Avatar className="w-28 h-28 md:w-48 md:h-48 border-current animate-slideRight mt-14 md:mt-24 lg:mt-28">
                            <AvatarImage src="https://vacancybt.b-cdn.net/wp-content/uploads/2019/02/www.health.gov_.bt_.png" alt="@shadcn" />
                            <AvatarFallback>MOH</AvatarFallback>
                        </Avatar>
                    </div>
                </div>
            </div>
            <div  className="w-screen h-screen flex flex-col items-center justify-center">
                <div className="w-screen h-1/6 flex items-center justify-center">
                    <h1 className="text-2xl font-semibold text-blueDark pt-7">Mission</h1>
                </div>
                <div className="w-screen h-1/6  flex justify-center">
                    <div className="w-72 md:w-3/5 lg:w-2/5 h-2/3 bg-blue rounded flex items-center justify-center">
                        <h1 className="font-medium text-center">Empower individual, community, and organization.</h1>
                    </div>
                </div>
                <div className="w-screen h-1/6 flex justify-center">
                    <div className="w-72 md:w-3/5 lg:w-2/5 h-2/3 bg-blue rounded flex items-center justify-center">
                        <h1 className="font-medium text-center">Create enterprises and nurture entrepreneurs .</h1>
                    </div>
                </div>
                <div className="w-screen h-1/6 flex justify-center">
                    <div className="w-72 md:w-3/5 lg:w-2/5 h-2/3 bg-blue rounded flex items-center justify-center">
                        <h1 className="font-medium text-center">Contribute towards employment generation.</h1>
                    </div>
                </div>
                <div className="w-screen h-1/6 flex justify-center">
                    <div className="w-72 md:w-3/5 lg:w-2/5 h-2/3 bg-blue rounded flex items-center justify-center">
                        <h1 className="font-medium text-center">Develop and improve the rural economy.</h1>
                    </div>
                </div>
                <div className="w-screen h-1/6  flex justify-center">
                    <div className="w-72 md:w-3/5 lg:w-2/5 h-2/3 bg-blue rounded flex items-center justify-center">
                        <h1 className="font-medium text-center">Foster knowledge creation and development.</h1>
                    </div>
                </div>
            </div>
            <div className="w-screen h-screen flex flex-col items-center justify-center">
                <div className="w-80 md:w-3/4 lg:w-3/5 h-screen  flex flex-col items-center justify-center space-y-14 md:space-y-24 lg:space-y-10">
                    <h1 className="text-2xl md:pt-20 lg:pt-5 text-blueDark font-semibold">Our Expertise</h1>
                    <div className="w-full h-32 md:h-48 lg:h-48 flex flex-row space-x-4 md:space-x-6 lg:space-x-24">
                        <div className="h-full w-24 md:w-44 lg:w-56 bg-blue rounded-lg md:rounded-xl drop-shadow-md "></div>
                        <div className="h-full w-24 md:w-44 lg:w-56 bg-blue rounded-lg md:rounded-xl drop-shadow-md "></div>
                        <div className="h-full w-24 md:w-44 lg:w-56 bg-blue rounded-lg md:rounded-xl drop-shadow-md "></div>
                    </div>
                    <div className="w-full h-32 md:h-48 lg:h-48 flex flex-row space-x-4 md:space-x-6 lg:space-x-24">
                        <div className="h-full w-24 md:w-44 lg:w-56 bg-blue rounded-lg md:rounded-xl drop-shadow-md "></div>
                        <div className="h-full w-24 md:w-44 lg:w-56 bg-blue rounded-lg md:rounded-xl drop-shadow-md "></div>
                        <div className="h-full w-24 md:w-44 lg:w-56  bg-blue rounded-lg md:rounded-xl drop-shadow-md "></div>
                    </div>
                    <div className="w-full h-32 md:h-48 lg:h-48 flex flex-row space-x-4 md:space-x-6 lg:space-x-24">
                        <div className="h-full w-24 md:w-44 lg:w-56 bg-blue rounded-lg md:rounded-xl drop-shadow-md "></div>
                        <div className="h-full w-24 md:w-44 lg:w-56 bg-blue rounded-lg md:rounded-xl drop-shadow-md "></div>
                        <div className="h-full w-24 md:w-44 lg:w-56 bg-blue rounded-lg md:rounded-xl drop-shadow-md "></div>
                    </div>
                </div>
            </div>
            <div className="w-screen h-screen flex flex-col items-center justify-center">
                <div className="w-9/12 mb-5 md:mb-14 lg:mb-10 md:w-1/2 h-2/5 bg-bblue stroke-[#E8E3E3] rounded-md animate-slideRight space-y-3 lg:space-y-5 flex flex-col items-center justify-center drop-shadow-md">
                    <h1 className="font-semibold text-xl md:text-3xl">Did you know ?</h1>
                    <p className="pl-2 md:text-xl md:pl-3 lg:pl-20">iBEST INSTITUTE is a Registered Training Service Provider under</p>
                    <ul className={"list-disc list-inside  pl-2 md:pl-0 "}>
                        <li className="text-sm md:text-lg">Department of Occupational Standards</li>
                        <li className="text-sm md:text-lg">Ministry of Labor and Human Resources</li>
                        <li className="text-sm md:text-lg">Royal Government of Bhutan.</li>
                    </ul>
                    <div className="flex flex-row pr-24 lg:pr-10 relative text-xl">
                        <p className="text-sm md:text-xl">offers  </p><p className="text-sm md:text-xl relative drop-shadow-md hover:drop-shadow-xl"><a href="/courses" className="font-bold text-blueDark"> Tailor-Made Courses.</a></p>
                    </div>
                </div>
                <h1 className="font-semibold text-2xl lg:text-3xl text-blueDark pb-5">Testimonials</h1>
                <div className="w-11/12 md:w-8/12 lg:w-1/3 h-2/5 ">
                    <Carousel className="w-full pt-8">
                        <CarouselContent>
                        {Array.from({ length: 3 }).map((_, index) => (
                            <CarouselItem key={index}>
                            <div className="p-1">
                                <Card>
                                <CardContent className="flex aspect-square items-center justify-center p-6 flex-col">
                                    {/* Block 1 */}
                                    {index === 0 && (
                                    <div className="w-full h-full flex flex-col">
                                        <div className="h-28 w-72 md:w-full md:h-44 rounded bg-[url('./images/drKarma.jpg')] bg-cover"></div>
                                        <div className="h-2/5 "> 
                                        <h1 className=" text-black text-sm md:text-xl lg:text-lg text-center pt-3"><strong>Dr. Karma Phuntsho</strong></h1>
                                        <h2 className="text-xs md:text-lg text-black lg:text-lg text-center pb-3">President, Loden Foundation & Shejun</h2>
                                        <h3 className=" text-xs md:text-lg lg:text-base">"The Legend of Pemi Tshewang Tashi, a project of the Loden entrepreneur Tharchen and his iBEST team, takes Bhutanese cinematography to a whole new level. Combining creativity and culture, innovation and history, art and entertainment, the film brings one of the most celebrated Bhutanese stories to the big screen in the form of a beautifully crafted animation.”</h3>
                                        </div>
                                    </div>
                                    )}
                                    {/* Block 2 */}
                                    {index === 1 && (
                                    <div className="w-full h-full flex flex-col">
                                        <div className="h-28 w-72 md:w-full md:h-44 rounded bg-[url('./images/dasho1.png')] bg-cover"></div>
                                        <div className="h-2/5 ">
                                        <h1 className="text-black text-sm md:text-xl text-center pt-3"><strong>Dasho Penjore</strong></h1>
                                        <h2 className="text-xs md:text-lg text-black text-center pb-">Governor, RMA</h2>
                                        <p className="text-xs md:text-lg">
                                            "I want to thank you and your team for partnering with us for BEFIT 2019. We sincerely appreciate iBEST's support in organizing and making the event a success, especially for designing the promotional animation and aiding in social media outreach."                              </p>
                                        </div>
                                    </div>
                                    )}
                                    {/* Block 3 */}
                                    {index === 2 && (
                                    <div className="w-full h-full flex flex-col">
                                        <div className="h-28 w-72 md:w-full md:h-44 rounded bg-[url('./images/passu.jpg')] bg-cover"></div>
                                        <div className="h-2/5">
                                        <h1 className="text-black text-sm md:text-xl text-center pt-3"><strong>Mr. Passang Tshering</strong></h1>
                                        <h2 className="text-xs text-black text-center pb-3">Executive Director, Bhutan Toilet Organization</h2>
                                        <p className="text-xs md:text-lg">
                                            "With The Legend of Pemi Tshewang Tashi now in cinemas, it showcases the incredible talent of our youth, driven by more than just training but a true tharchenian push. It's our country's best animation yet, possibly the longest, and stands proudly alongside global standards."                              </p>
                                        </div>
                                    </div>
                                    )}
                                </CardContent>
                                </Card>
                            </div>
                            </CarouselItem>
                        ))}
                        </CarouselContent>
                        <CarouselPrevious />
                        <CarouselNext />
                    </Carousel>
                </div>
            </div>
            <div className="w-screen h-screen ">
                <div className="w-screen h-1/6 "></div>
                <Statistics />
            </div>
            <Footer/>
            <SmallNavBar/>
        </div>  
    )
}

