"use client"

import * as React from "react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { MdOutlineBusinessCenter } from "react-icons/md";
import { TbMoneybag } from "react-icons/tb";
import { GiArchiveResearch } from "react-icons/gi";
import { MdOutlineAnimation } from "react-icons/md";
import { TbWriting } from "react-icons/tb";
import { TbSpeakerphone } from "react-icons/tb";
import { LiaChalkboardTeacherSolid } from "react-icons/lia";
import { GrMultimedia } from "react-icons/gr";
import { MdDeveloperMode } from "react-icons/md";
import Footer from "../../src/reusable_components/footer/page";
import NavigationBar from "@/reusable_components/nav_bar/page"
import Logo from "../images/Website Pictures/logo.jpg"
import Statistics from "../reusable_components/statistics/page"
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

export default function Home() {
  return (
    <div className="bg-white">
      <div className="w-screen h-screen bg-white flow-root">
        <div className="w-screen h-24 bg-slate-400 ">
          <NavigationBar/>
        </div>
        <div className="w-full h-2/4 bg-[url('./images/building.jpg')] backdrop-saturate-125 bg-cover">
          <div className="w-full h-3/6 flex">
            <Avatar className="w-36 h-236 border-current	m-auto">
            <AvatarImage src={Logo.src} alt="@shadcn" />  
            </Avatar>
          </div>
          <div className="w-full h-3/6 m-auto">
              <h1 className="text-center text-4xl	 font-extrabold	text-white animate-slideLeft stoke-black">“To become an acclaimed institution </h1>
              <h1 className="text-center text-3xl font-semibold text-white animate-slideRight	">and one-stop learning center in</h1> 
              <h1 className="text-center text-3xl	font-semibold text-white animate-slideLeft"> Bhutan and beyond”</h1>  
          </div>
        </div>
        <div className="w-full h-2/4">
          <div className="w-full h-1/6 flex items-center justify-center">
            <h1 className="text-2xl font-semibold pt-5">Certified Training Institute Registered with </h1>
          </div>
          <div className="w-full h-5/6 flex items-center justify-center space-x-10">
            <Avatar className="w-48 h-48 border-current animate-slideLeft">
              <AvatarImage src="https://www.bmhc.gov.bt/wp-content/uploads/2023/07/tvet.png" alt="@shadcn" />
              <AvatarFallback>TVET</AvatarFallback>
            </Avatar>
            <Avatar className="w-48 h-44 border-current	mb-36">
              <AvatarImage src="https://www.bmf.bt/wp-content/uploads/2018/10/rgob-logo.png" alt="@shadcn" />
              <AvatarFallback>RGOB</AvatarFallback>
            </Avatar>
            <Avatar className="w-48 h-44 border-current animate-slideRight	">
              <AvatarImage src="https://vacancybt.b-cdn.net/wp-content/uploads/2019/02/www.health.gov_.bt_.png" alt="@shadcn" />
              <AvatarFallback>MOH</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </div>
      <div className="w-screen h-screen flex  flex-col items-center justify-center">
        <div className="w-full h-1/6 flex items-center justify-center ">
          <h1 className="text-2xl font-semibold text-blueDark pt-7">MISSIONS</h1>
        </div>
        <div className="w-full h-1/6  flex justify-center">
          <div className="w-2/5 h-2/3 bg-blue rounded flex items-center justify-center">
            <h1 className="font-medium">Empower individual, community, and organization.</h1>
          </div>
        </div>
        <div className="w-full h-1/6 flex justify-center">
          <div className="w-2/5 h-2/3 bg-blue rounded flex items-center justify-center">
            <h1 className="font-medium">Create enterprises and nurture entrepreneurs . </h1>
          </div>
        </div>
        <div className="w-full h-1/6 flex justify-center">
          <div className="w-2/5 h-2/3 bg-blue rounded flex items-center justify-center">
            <h1 className="font-medium">Contribute towards employment generation.</h1>
          </div>
        </div>
        <div className="w-full h-1/6 flex justify-center">
          <div className="w-2/5 h-2/3 bg-blue rounded flex items-center justify-center">
            <h1 className="font-medium">Develop and improve the rural economy.</h1>
          </div>
        </div>
        <div className="w-full h-1/6 bg-blue-100 flex justify-center">
          <div className="w-2/5 h-2/3 bg-blue rounded flex items-center justify-center">
            <h1 className="font-medium">Foster knowledge creation and development.</h1>
          </div>
        </div>
      </div>
      <div className="w-screen h-screen ">
        <div className="w-full h-1/6 flex items-center justify-center">
          <h1 className="text-2xl text-blueDark font-semibold">Our Expertise</h1>    
        </div>
        <div className="h-full w-full flex flex-row">
          <div className="h-full w-1/5 "></div>
          <div className="h-full w-3/5 ">
            <div className="w-full h-1/4 flex flex-row space-x-24">
              <div className="w-3/12 h-full bg-lightBlue rounded flex flex-col">
                <div className="h-3/4 w-full bg-lightBlue ">
                  <div className="w-full h-3/4 bg-lightBlue flex item-center justify-center pt-5 rounded-md">
                    <MdOutlineBusinessCenter className="w-24 h-24"/>
                  </div>
                  <div className="w-full h-1/4 bg-lightBlue flex items-center justify-center">
                    <h1>Business</h1>
                  </div>
                </div>
                <div className="h-1/4 w-full bg-white"></div>
              </div>
              <div className="w-3/12 h-full bg-lightBlue rounded flex flex-col">
                <div className="h-3/4 w-full bg-lightBlue">
                  <div className="w-full h-3/4 bg-lightBlue flex items-center justify-center pt-5">
                    <TbMoneybag className="h-24 w-24"/>
                  </div>
                  <div className="w-full h-1/4 bg-lightBlue flex items-center justify-center">
                    <h1>Finance</h1>
                  </div>
                </div>
                <div className="h-1/4 w-full bg-white"></div>
              </div>
              <div className="w-3/12 h-full bg-lightBlue rounded flex flex-col">
                <div className="h-3/4 w-full bg-lightBlue">
                  <div className="w-full h-3/4 bg-lightBlue flex items-center justify-center pt-5">
                    <GiArchiveResearch className="w-24 h-24" />
                  </div>
                  <div className="w-full h-1/4 bg-lightBlue flex items-center justify-center">
                    <h1>Research</h1>
                  </div>
                </div>
                <div className="h-1/4 w-full bg-white"></div>
              </div>
            </div>
            <div className="w-full h-10 "></div>
            <div className="w-full h-1/4 flex flex-row space-x-24">
              <div className="w-3/12 h-full bg-lightBlue rounded flex flex-col">
                <div className="h-3/4 w-full bg-lightBlue">
                  <div className="w-full h-3/4 bg-lightBlue flex items-center justify-center pt-5">
                    <MdOutlineAnimation className="w-24 h-24" />
                  </div>
                  <div className="w-full h-1/4 bg-lightBlue flex items-center justify-center">
                    <h1>Animation</h1>
                  </div>
                </div>
                <div className="h-1/4 w-full bg-white"></div>
              </div>
              <div className="w-3/12 h-full bg-lightBlue rounded flex flex-col">
                <div className="h-3/4 w-full bg-lightBlue">
                  <div className="w-full h-3/4 bg-lightBlue flex items-center justify-center pt-5 ">
                    <TbWriting className="w-24 h-24"/>
                  </div>
                  <div className="w-full h-1/4 bg-lightBlue flex items-center justify-center">
                    <h1>Writing</h1>
                  </div>
                </div>
                <div className="h-1/4 w-full bg-white"></div>
              </div>
              <div className="w-3/12 h-full bg-lightBlue rounded flex flex-col">
                <div className="h-3/4 w-full bg-lightBlue">
                  <div className="w-full h-3/4 bg-lightBlue flex items-center justify-center pt-5">
                    <TbSpeakerphone className="w-24 h-24"/>
                  </div>
                  <div className="w-full h-1/4 bg-lightBlue flex items-center justify-center">
                    <h1>Marketing</h1>
                  </div>
                </div>
                <div className="h-1/4 w-full bg-white"></div>
              </div>
            </div>
            <div className="w-full h-10"></div>
            <div className="w-full h-1/4 flex flex-row space-x-24">
              <div className="w-3/12 h-full bg-lightBlue rounded flex flex-col">
                <div className="h-3/4 w-full bg-lightBlue">
                  <div className="w-full h-3/4 bg-lightBlue flex items-center justify-center pt-5">
                    <LiaChalkboardTeacherSolid className="w-24 h-24"/>
                  </div>
                  <div className="w-full h-1/4 bg-lightBlue flex items-center justify-center">
                    <h1>Training</h1>
                  </div>
                </div>
                <div className="h-1/4 w-full bg-white"></div>
              </div>
              <div className="w-3/12 h-full bg-lightBlue rounded flex flex-col">
                <div className="h-3/4 w-full bg-lightBlue">
                  <div className="w-full h-3/4 bg-lightBlue flex items-center justify-center pt-5">
                    <GrMultimedia className="w-24 h-24"/>
                  </div>
                  <div className="w-full h-1/4 bg-lightBlue flex items-center justify-center">
                    <h1>Multimedia</h1>
                  </div>
                </div>
                <div className="h-1/4 w-full bg-white"></div>
              </div>
              <div className="w-3/12 h-full bg-lightBlue rounded flex flex-col">
                <div className="h-3/4 w-full bg-lightBlue">
                  <div className="w-full h-3/4 bg-lightBlue flex items-center justify-center pt-5">
                    <MdDeveloperMode className="w-24 h-24"/>
                  </div>
                  <div className="w-full h-1/4 bg-lightBlue flex items-center justify-center">
                    <h1>Development</h1>
                  </div>
                </div>
                <div className="h-1/4 w-full bg-white"></div>
              </div>
            </div>
          </div>
          <div className="h-full w-1/5"></div>
        </div>
      </div>
      <div className="flex flex-row justify-center">
        <div className="h-full w-5/12 flex items-center justify-center flex-col pt-20">
          <div className="w-10/12 h-2/6 bg-bblue	stroke-[#E8E3E3] flex items-center justify-center flex-col rounded-md animate-slideRight">
            <h1 className="text-2xl font-semibold pb-5">Did you know ?</h1>
            <p className="pb-5">iBEST INSTITUTE is a Registered Training <br /> Service Provider under</p>
              <ul className={"list-disc list-inside  pb-5"}>
                  <li>Department of Occupational Standards</li>
                  <li>Ministry of Labor and Human Resources</li>
                  <li>Royal Government of Bhutan.</li>
              </ul>
            <div className="flex flex-row pr-16 relative">
              <p className="text-xl">offers   </p><p className="text-xl relative drop-shadow-md hover:drop-shadow-xl"><a href="/courses" className="font-bold text-blueDark"> Tailor-Made Courses.</a></p>
            </div>
          </div>
          <h1 className="pt-20 font-semibold text-2xl">TESTIMONIALS</h1>
          <div className="w-full h-2/4 ">
          <Carousel className="w-full pt-8">
            <CarouselContent>
              {Array.from({ length: 3 }).map((_, index) => (
                <CarouselItem key={index}>
                  <div className="p-1">
                    <Card>
                      <CardContent className="flex aspect-square items-center justify-center p-6 flex-col">
                        {/* Block 1 */}
                        {index === 0 && (
                          <div className="w-full h-full flex flex-col justify-between">
                            <div className="h-3/5 rounded-lg bg-blue-50 bg-[url('./images/drKarma.jpg')] bg-cover"></div>
                            <div className="h-2/5 "> 
                              <h1 className="text-2xl text-black mt-2 text-center">Dr. Karma Phuntsho</h1>
                              <h2 className="text-lg text-black mt-2 text-center">President, Loden Foundation & Shejun</h2>
                              <h3 className="pt-5">
                                "The Legend of Pemi Tshewang Tashi, a project of the Loden entrepreneur Tharchen and his iBEST team, takes Bhutanese cinematography to a whole new level. Combining creativity and culture, innovation and history, art and entertainment, the film brings one of the most celebrated Bhutanese stories to the big screen in the form of a beautifully crafted animation.”
                              </h3>
                            </div>
                          </div>
                        )}
                        {/* Block 2 */}
                        {index === 1 && (
                          <div className="w-full h-full flex flex-col justify-between ">
                            <div className="h-3/5 rounded-lg bg-[url('./images/dasho1.png')] bg-cover"></div>
                            <div className="h-2/5 ">
                              <h1 className="text-2xl text-black mt-2 text-center">Dasho Penjore </h1>
                              <h2 className="text-lg text-black mt-2 text-center">Governor, RMA</h2>
                              <p className="pt-5">
                                "I want to thank you and your team for partnering with us for BEFIT 2019. We sincerely appreciate iBEST's support in organizing and making the event a success, especially for designing the promotional animation and aiding in social media outreach."                              </p>
                            </div>
                          </div>
                        )}
                        {/* Block 3 */}
                        {index === 2 && (
                          <div className="w-full h-full flex flex-col justify-between">
                            <div className="h-3/5 rounded-lg bg-pink-50 bg-[url('./images/passu.jpg')] bg-cover"></div>
                            <div className="h-2/5 bg-gray-50">
                            <h1 className="text-2xl text-black mt-2 text-center">Mr. Passang Tshering </h1>
                            <h2 className="text-lg text-black mt-2 text-center">Executive Director, Bhutan Toilet Organization</h2>
                              <p className="pt-5">
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
        
      </div>
      
      
              <Statistics />
      

      <Footer />
    </div>
    
  );
}