import { DATA } from "@/data/port_data"
"use client";
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils";
import { DotPattern } from "@/components/ui/dot-pattern";
import HeroSection from "../components/heroSection"
import Portfoliocard from "../components/portfoliocard"
import Descibe from "../components/descibe"
// import abooutmecomponents from "../components/abooutmecomponents"
// import BlurFade from "@/components/ui/blur-fade";
// import { FadeText } from "@/components/ui/fade-text";
// import Markdown from "react-markdown";
export function main_page() {
    return (
        <>
            <main className="flex-none min-h-screen -z-10">
                <DotPattern
                    width={20}
                    height={20}
                    cx={1}
                    cy={1}
                    cr={1}
                    className={cn(
                        "[mask-image:linear-gradient(to_bottom_right,white,transparent,transparent)] ",
                    )}
                />
                <div className="hero relative flex flex-col items-center justify-center w-full py-5">
                    <section className="flex flex-col items-center justify-center w-full max-w-4xl ">
                        <div className="relative flex flex-col items-center justify-center w-full max-w-4xl  mx-auto">
                            <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
                                <HeroSection />
                                <Portfoliocard />
                                <Descibe />
                            </div>
                        </div>
                    </section>
                </div >
            </main >

        </>
    )
}
export default main_page
