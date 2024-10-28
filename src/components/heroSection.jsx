import { Badge } from "@/components/ui/badge"
import { DATA } from "@/data/port_data"
import ShimmerButton from "@/components/ui/shimmer-button";
// import Kamal_Elhaddadi from "../assets/Kamal El-haddadi FR.pdf"
import Kamal_Elhaddadi from "../assets/Kamal El-haddadi_lastversion.pdf"
function heroSection() {

    return (
        <>
            <div className="relative z-20 w-full py-[100px]">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col items-center justify-center max-w-4xl mx-auto space-y-6 sm:space-y-8 md:space-y-10">
                        <div className="flex flex-col items-center justify-center space-y-4">
                            <div className="animate-fade-in-up">
                                <Badge variant="outline" className="text-sm sm:text-sm text-[#1d1d1f]">
                                    {`Hi there, This is ${DATA.name.split(" ")[0]} 👋`}
                                </Badge>
                            </div>
                            <h1
                                className="text-4xl text-[#1d1d1f] sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-medium text-center leading-tight sm:leading-tight md:leading-tight lg:leading-tight xl:leading-tight animate-fade-in-up"
                                style={{ fontFamily: "Archivo" }}
                            >
                                Junior front end developer whit backend knowledge, based in morocco Tangier{" "}
                                {/* <span className="underline underline-offset-4 decoration-orange-600 decoration-2">
                                    tangier
                                </span> */}
                            </h1>
                            <p className="max-w-2xl mt-2 text-[#333] text-sm sm:text-base md:text-md text-center animate-fade-in-up">
                                Seasoned digital artisan with 3 years of crafting visually compelling narratives that captivate audiences and breathe life into pixels.
                            </p>

                            <div className="flex items-center gap-2 justify-center pt-6">
                                <a
                                    href={Kamal_Elhaddadi}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2"
                                // download="Kamal_Elhaddadi.pdf"
                                >
                                    <ShimmerButton asChild variant="outline" className="shadow-md">
                                        View my resume
                                    </ShimmerButton>
                                </a>
                                <a href="https://x.com/HaddaadiKamal" className="px-6 py-4 rounded-full hover:bg-slate-100">
                                    <svg height="15" color="#ea580c" fill="" viewBox="0 0 1200 1227" width="15" xmlns="http://www.w3.org/2000/svg"><path d="M714.163 519.284L1160.89 0H1055.03L667.137 450.887L357.328 0H0L468.492 681.821L0 1226.37H105.866L515.491 750.218L842.672 1226.37H1200L714.137 519.284H714.163ZM569.165 687.828L521.697 619.934L144.011 79.6944H306.615L611.412 515.685L658.88 583.579L1055.08 1150.3H892.476L569.165 687.854V687.828Z"></path></svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}

export default heroSection