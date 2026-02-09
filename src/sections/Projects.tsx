import React from "react";
import { Github, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

const Projects: React.FC = () => {
    const projects = [
        {
            title: "Project One",
            description: "A comprehensive e-commerce solution built with React and Node.js. Features include user authentication, payment processing, and admin dashboard.",
            tags: ["React", "Node.js", "MongoDB", "Tailwind"],
            github: "https://github.com",
            demo: "https://demo.com",
            image: "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=1000",
        },
        {
            title: "Project Two",
            description: "Real-time chat application using Socket.io. Supports private messaging, group chats, and file sharing with end-to-end encryption.",
            tags: ["TypeScript", "Socket.io", "Express", "Redis"],
            github: "https://github.com",
            demo: "https://demo.com",
            image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=1000",
        },
        {
            title: "Project Three",
            description: "Task management dashboard with drag-and-drop functionality using React Beautiful DnD. Includes data visualization with Recharts.",
            tags: ["React", "Redux", "Material UI", "Firebase"],
            github: "https://github.com",
            demo: "https://demo.com",
            image: "https://images.unsplash.com/photo-1540350394557-8d14678e7f91?auto=format&fit=crop&q=80&w=1000",
        }
    ];

    return (
        <section id="projects" className="py-20 relative">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <div className="flex items-center gap-2 mb-8">
                        <span className="w-12 h-1 bg-blue-600 rounded-full"></span>
                        <span className="text-blue-600 font-medium tracking-wider uppercase">Portfolio</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-white mt-2">Recent Projects</h2>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
                        {projects.map((project, index) => (
                            <motion.div
                                key={index}
                                whileHover={{ y: -10 }}
                                className="group bg-gray-800 rounded-2xl overflow-hidden border border-gray-700 hover:border-blue-500/50 transition-all duration-300"
                            >
                                <div className="relative h-48 overflow-hidden">
                                    <div className="absolute inset-0 bg-blue-600/20 group-hover:bg-transparent transition-colors duration-300" />
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                                    />
                                </div>

                                <div className="p-6">
                                    <div className="flex gap-2 mb-4">
                                        {project.tags.map((tag) => (
                                            <span key={tag} className="text-xs font-medium px-2.5 py-1 bg-blue-500/10 text-blue-400 rounded-full">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                                    <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                                        {project.description}
                                    </p>

                                    <div className="flex items-center gap-4 pt-4 border-t border-gray-700">
                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors text-sm"
                                        >
                                            <Github size={16} />
                                            Code
                                        </a>
                                        <a
                                            href={project.demo}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2 text-gray-300 hover:text-blue-400 transition-colors text-sm"
                                        >
                                            <ExternalLink size={16} />
                                            Live Demo
                                        </a>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Projects;
