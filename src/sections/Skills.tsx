import React from "react";
import { motion } from "framer-motion";

const Skills: React.FC = () => {
    const skills = {
        Frontend: ["React", "TypeScript", "Tailwind CSS", "Next.js", "Redux", "HTML5/CSS3"],
        Backend: ["Node.js", "Express", "PostgreSQL", "MongoDB", "REST APIs"],
        Tools: ["Git", "VS Code", "Docker", "Figma", "Postman", "Vercel"]
    };

    return (
        <section id="skills" className="py-20 relative">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <div className="flex items-center gap-2 mb-8">
                        <span className="w-12 h-1 bg-blue-600 rounded-full"></span>
                        <span className="text-blue-600 font-medium tracking-wider uppercase">Skills</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">My Skills</h2>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
                        {Object.entries(skills).map(([category, items]) => (
                            <div key={category} className="bg-gray-800/30 p-6 rounded-2xl border border-gray-700 hover:border-gray-600 transition-colors">
                                <h3 className="text-xl font-bold text-white mb-6 text-center border-b border-gray-700 pb-4">
                                    {category}
                                </h3>
                                <div className="flex flex-wrap gap-2 justify-center">
                                    {items.map((skill) => (
                                        <span
                                            key={skill}
                                            className="px-4 py-2 bg-gray-900 text-gray-300 rounded-lg text-sm border border-gray-700 hover:border-blue-500/50 hover:text-blue-400 transition-all cursor-default"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Skills;
