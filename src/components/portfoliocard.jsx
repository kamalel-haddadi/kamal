import { DATA } from "@/data/port_data"
// import { ExternalLink } from 'lucide-react'
import { BorderBeam } from "@/components/ui/border-beam";
import defaultimg from "./defaultimg"
function portfoliocard() {
    return (
        <>
            <section className="py-12 px-4 dark:bg-gray-900">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl text-[#1d1d1f] sm:text-4xl md:text-5xl flex items-center justify-center font-medium leading-tight sm:leading-tight md:leading-snug lg:leading-snug xl:leading-snug animate-fade-in-up mb-5 text-center sm:text-left" style={{ fontFamily: "Archivo" }}>
                            Check out my strong project
                        </h2>
                        <p className="text-md text-[#1d1d1f] max-w-2xl mx-auto">
                            I've worked on a variety of projects, from simple websites to complex web applications, showcasing my expertise in modern web development.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {DATA.projects.map((project, index) => (
                            <a
                                key={index}
                                href={project.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group block text-[#1d1d1f]"
                            >
                                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transition-all duration-300 transform hover:scale-105">
                                    <div className="relative">
                                        <img
                                            src={project.image || defaultimg}
                                            alt={project.title}
                                            width={400}
                                            height={300}
                                            className="w-full h-48 object-cover"
                                        />
                                        <div className="absolute top-2 left-2">
                                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium   text-green-600   bg-green-100">
                                                {project.active ? 'Complated' : 'Not ompleted yet'}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="p-6">
                                        <div className="flex justify-between items-start mb-2">
                                            <h3 className="text-xl  font-medium text-[#1d1d1f]" style={{ fontFamily: "Archivo" }}>
                                                {project.title}
                                            </h3>
                                            {/* <div className="p-2 rounded-full transition-all duration-300 group-hover:bg-gray-100 dark:group-hover:bg-gray-700">
                                                <ExternalLink className="w-5 h-5 text-gray-600 dark:text-gray-300" />
                                            </div> */}
                                        </div>
                                        <p className="text-[#333] text-sm mb-4 hover:text-green-600">
                                            {project.description}
                                        </p>
                                        <div className="flex flex-wrap gap-2">
                                            {project.technologies.map((tech, techIndex) => (
                                                <span
                                                    key={techIndex}
                                                    className="text-xs font-medium text-[#1d1d1f] bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}
export default portfoliocard
