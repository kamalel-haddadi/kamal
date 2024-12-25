import { DATA } from "@/data/port_data"
"use client";
import { Badge } from "@/components/ui/badge"
import Markdown from "react-markdown";
import JourneyStory from "./journeyStory.jsx"
// import { BorderBeam } from "@/components/ui/border-beam";
import ContactForm from "./contactfrom.jsx"

function descibe() {
    return (
        <>
            <div className="max-w-4xl w-full mx-auto px-4 py-8 md:pt-12 mb-5">
                <div className="flex flex-col md:flex-row gap-0">
                    {/* Name Section */}
                    <div className="w-full md:w-1/2  sm:text-left md:text-left 2xl:text-left lg:text-left xl:text-left mb-8 md:mb-0">
                        <h1 className="text-[#333333] mt-14">
                            <div className="text-5xl sm:text-5xl md:text-6xl lg:text-7xl font-normal mb-2" style={{ fontFamily: "Instrument Serif" }}>/{DATA.name}</div>
                            <div className="text-5xl sm:text-5xl md:text-6xl lg:text-7xl font-normal" style={{ fontFamily: "Instrument Serif" }}>&nbsp;El Haddadi</div>
                            <div className="text-xl font-normal" style={{ fontFamily: "Instrument Serif" }}>21 year's old</div>
                        </h1>
                    </div>

                    {/* Images Section */}
                    <div className="relative flex items-start">
                        <img
                            src="https://images.pexels.com/photos/29093742/pexels-photo-29093742.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            alt=""
                            width={400}
                            height={400}
                            className="w-full h-[300px] object-cover rounded-xl" />
                    </div>
                </div>
            </div>
            {/* <img src={DATA.avatarUrl} alt="Avatar" className="w-full h-[250px] object-cover rounded-lg transition-all duration-300 transform hover:scale-105" /> */}

            <div className=" about me relative flex items-center justify-center mx-auto w-full pt-4 px-4">{/* sm:py-16 lg:py-20*/}
                <div className="flex flex-col gap-10 items-center justify-center max-w-4xl mx-auto">
                    <div className="flex w-full flex-col sm:flex-row gap-4 sm:gap-5" >
                        <div className="felx w-[350px]">
                            <h3 className="text-lg font-medium text-[#1d1d1f]" style={{ fontFamily: "Archivo" }}>About</h3>
                        </div>
                        <div className="flex flex-col">
                            <Markdown className="text-[#333] max-w-full text-start !leading-7 text-md">
                                {DATA.summary}
                            </Markdown>
                            <JourneyStory />
                        </div>
                    </div>
                    <div className=" flex gap-32 text-[#acacac]">
                        <a>.</a>
                        <a>.</a>
                        <a>.</a>
                    </div>
                    <div className="w-full flex flex-col sm:flex-row gap-4 sm:gap-5">
                        <div className="flex w-[129px]">
                            <h3 className="text-lg font-medium text-[#1d1d1f] " style={{ fontFamily: "Archivo" }}>Skills</h3>
                        </div>
                        <div className="flex flex-wrap justify-start gap-2 sm:gap-4 text-md text-[#333]">
                            {DATA.skills.map((skill, index) => (
                                <Badge
                                    key={index}
                                    variant="Secondary"
                                    className="rounded-md px-4 py-1 text-[#333]"
                                >
                                    {skill}

                                </Badge>
                            ))}
                        </div>
                    </div>
                    <div className=" flex gap-32 text-[#acacac]">
                        <a>.</a>
                        <a>.</a>
                        <a>.</a>
                    </div>
                    <div className="w-full flex flex-col sm:flex-row gap-4 sm:gap-5 ">
                        <div className="flex items-start pt-4">
                            <div className="">
                                <h3 className="text-lg text-[#1d1d1f] font-medium" style={{ fontFamily: "Archivo" }}>Education</h3>
                            </div>
                        </div>
                        <div className="w-full ">
                            {DATA.education.map((edu, index) => (
                                <div
                                    key={index}
                                    className="w-full rounded-lg py-4"
                                >
                                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between">
                                        <div>
                                            <h3 className="text-lg text-[#1d1d1f] sm:text-xl font-medium mb-1">
                                                {edu.school}
                                            </h3>
                                            <p className="text-md text-[#333]">
                                                {edu.degree}
                                            </p>
                                        </div>
                                        <div className="text-md font-medium  text-green-600 mt-1 sm:mt-0">
                                            {edu.start}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className=" flex gap-32 text-[#acacac]">
                        <a>.</a>
                        <a>.</a>
                        <a>.</a>
                    </div>
                    <div className="w-full flex flex-col sm:flex-row gap-4 sm:gap-5">
                        <div className="flex w-[95px] items-start pt-4">
                            <h3 className="text-lg font-medium text-[#1d1d1f]" style={{ fontFamily: "Archivo" }}>Work</h3>
                        </div>
                        <div className="w-full">
                            {DATA.work.map((work, index) => (
                                <div
                                    key={index}
                                    className="w-full rounded-lg py-4 flex flex-col gap-2"
                                >
                                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between">
                                        <div>
                                            <h3 className=" text-[#1d1d1f] text-lg sm:text-xl font-medium mb-1">
                                                {work.company}
                                            </h3>
                                            <p className=" text-[#333] text-md ">
                                                {work.title}
                                            </p>
                                        </div>
                                        <div className=" text-green-600 text-md font-medium mt-1 sm:mt-0">
                                            {work.start}
                                        </div>
                                    </div>
                                    <p className=" text-[#333] text-md">
                                        {work.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className=" flex gap-32 text-[#acacac]">
                        <a>.</a>
                        <a>.</a>
                        <a>.</a>
                    </div>
                    <ContactForm />
                </div>
            </div>

        </>
    )
}
export default descibe