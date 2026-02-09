import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Code2, Award, Layers, ExternalLink, Github } from "lucide-react";
import geminiImg from "../assets/Certificates/gemini.png";
import NVIDIADLImg from "../assets/Certificates/NVIDIADL.png";
import NVIDIABERTImg from "../assets/Certificates/NVIDIABERT.png";
import AWSImg from "../assets/Certificates/AWS.jpg";

const PortfolioShowcase = () => {
    const [activeTab, setActiveTab] = useState("projects");

    // Data
    const projects = [
        {
            title: "E-Surat ISTTS",
            category: "Administration System",
            image: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=1000",
            desc: "A web-based document management system streamlining campus administration by integrating digital document workflows, enhancing efficiency and supporting the broader framework of internet application development.",
            tech: ["Laravel", "MySQL"],
            github: "https://github.com/AlexanderErick24/E-surat-ISTTS/tree/main/E-Surat-ISTTS",
            demo: "#"
        },
        {
            title: "Wei Hong Restaurant",
            category: "Restaurant Website",
            image: "https://images.unsplash.com/photo-1526318896980-cf78c088247c?auto=format&fit=crop&q=80&w=1000",
            desc: "A restaurant web application for managing food menus, and automated PDF report generation for cashier transactions. The system streamlined the restaurant’s workflow by integrating ordering and financial reporting into a cohesive, efficient digital platform.",
            tech: ["Laravel", "MySQL"],
            github: "https://github.com/nyamnyom/proyek-aplin",
            demo: "#"
        },
        {
            title: "Point of Sales Application",
            category: "Store Desktop Application",
            image: "https://images.unsplash.com/photo-1556740758-90de374c12ad?auto=format&fit=crop&q=80&w=1000",
            desc: "A cross-platform desktop application using Node.js and Electron, featuring a custom-designed UI and real-time POS system logic for seamless transaction processing.",
            tech: ["Electron JS", "React", "Tailwind"],
            github: "https://github.com/nyamnyom/proyek-acs",
            demo: "#"
        },
        {
            title: "Filmkan",
            category: "Movie Desktop Application",
            image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&q=80&w=1000",
            desc: "A cross-platform desktop application using Node.js and Electron, featuring a custom-designed UI and real-time POS system logic for seamless transaction processing.",
            tech: ["ReactJS, Electron"],
            github: "https://github.com/orangkeren111/projectPVsusah",
            demo: "#"
        }
    ];

    const certificates = [
        {
            title: "Gemini Certified University Student",
            issuer: "Google",
            date: "2026-2029",
            image: geminiImg,
            link: "https://edu.google.accredible.com/c932427b-db5a-47dc-9d26-9ba1742f1ca9#acc.LlkMRScm"
        },
        {
            title: "AWS Academy Graduate - Cloud Foundations",
            issuer: "Amazon Web Services Training and Certification",
            date: "2025-11-6",
            image: AWSImg,
            link: "https://www.credly.com/badges/2375f6d6-1f34-46e9-8656-0458848e4d6a/linked_in_profile"
        },
        {
            title: "Building Transformer-Based Natural Language Processing Applications",
            issuer: "NVIDIA",
            date: "2025-11-9",
            image: NVIDIABERTImg,
            link: "https://learn.nvidia.com/certificates?id=SsC3IN7QQOCXxgxJzxZsmw"
        },
        {
            title: "Building Transformer-Based Natural Language Processing Applications",
            issuer: "NVIDIA",
            date: "2025-07-15",
            image: NVIDIADLImg,
            link: "https://learn.nvidia.com/certificates?id=vU3gizKyTSCbP_Ci7cBQWg"
        }
    ];

    const techStack = [
        { name: "HTML", icon: "https://cdn.simpleicons.org/html5/E34F26" },
        { name: "CSS", icon: "https://cdn.simpleicons.org/css/1572B6" },
        { name: "JavaScript", icon: "https://cdn.simpleicons.org/javascript/F7DF1E" },
        { name: "Bootstrap", icon: "https://cdn.simpleicons.org/bootstrap/7952B3" },
        { name: "Tailwind", icon: "https://cdn.simpleicons.org/tailwindcss/06B6D4" },
        { name: "Material UI", icon: "https://cdn.simpleicons.org/mui/007FFF" },
        { name: "PHP", icon: "https://cdn.simpleicons.org/php/777BB4" },
        { name: "Laravel", icon: "https://cdn.simpleicons.org/laravel/FF2D20" },
        { name: "Blade", icon: "https://cdn.simpleicons.org/laravel/FF2D20" },
        { name: "Node.js", icon: "https://cdn.simpleicons.org/nodedotjs/339933" },
        { name: "React.js", icon: "https://cdn.simpleicons.org/react/61DAFB" },
        { name: "Electron JS", icon: "https://cdn.simpleicons.org/electron/47848F" },
        { name: "Java", icon: "https://cdn.simpleicons.org/openjdk/FFFFFF" }, // Using OpenJDK or Java icon if available. 'java' might be Oracle's red/blue. Let's try 'java'. If not, simpleicons has 'openjdk'. 'java' usually works on CDN.
        { name: "MySQL", icon: "https://cdn.simpleicons.org/mysql/4479A1" },
        { name: "Python", icon: "https://cdn.simpleicons.org/python/3776AB" }
    ];

    // const tabVariants = {
    //     active: { backgroundColor: "rgba(239, 68, 68, 0.2)", color: "#fca5a5", borderColor: "rgba(239, 68, 68, 0.5)" },
    //     inactive: { backgroundColor: "transparent", color: "#9ca3af", borderColor: "transparent" }
    // };

    return (
        <section id="portfolio" className="py-20 relative">
            <div className="max-w-7xl mx-auto px-6">

                {/* Header */}
                <div className="mb-14">
                    <div className="flex items-center gap-3 mb-8">
                        <span className="w-12 h-1 bg-blue-600 rounded-full"></span>
                        <span className="text-blue-600 text-lg font-semibold tracking-wider uppercase">
                            Portfolio Showcase
                        </span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">My Recent Work</h2>
                    <p className="text-gray-400 text-lg max-w-2xl leading-relaxed">
                        Explore my journey through projects, certifications, and technical expertise.
                        Each section represents a milestone in my continuous learning path.
                    </p>
                </div>

                {/* Tabs */}
                <div className="flex justify-start mb-12">
                    <div className="p-1 bg-gray-900/50 backdrop-blur-md rounded-2xl border border-white/5 inline-flex">
                        {[
                            { id: "projects", label: "Projects", icon: <Code2 size={20} /> },
                            { id: "certificates", label: "Certificates", icon: <Award size={20} /> },
                            { id: "stack", label: "Tech Stack", icon: <Layers size={20} /> }
                        ].map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`flex items-center gap-2 px-6 py-3 rounded-xl text-base font-medium transition-all duration-300 border ${activeTab === tab.id
                                    ? "bg-blue-600/20 text-blue-400 border-blue-500/30 shadow-[0_0_20px_rgba(59,130,246,0.2)]"
                                    : "text-gray-400 border-transparent hover:text-white hover:bg-white/5"
                                    }`}
                            >
                                {tab.icon}
                                {tab.label}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Content Area */}
                <AnimatePresence mode="wait">

                    {/* Projects Tab */}
                    {activeTab === "projects" && (
                        <motion.div
                            key="projects"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3 }}
                            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
                        >
                            {projects.map((project, index) => (
                                <div key={index} className="group relative rounded-2xl overflow-hidden bg-gray-900 border border-gray-800 aspect-[4/5] cursor-pointer hover:border-blue-500/50 transition-colors duration-500">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-60 group-hover:opacity-100"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent p-6 flex flex-col justify-end text-white">
                                        <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                            <p className="text-base font-medium text-blue-400 mb-2 tracking-wider uppercase">{project.category}</p>
                                            <h3 className="text-3xl font-bold mb-3 leading-tight text-white group-hover:text-blue-200 transition-colors">{project.title}</h3>
                                            <p className="text-gray-300 text-base line-clamp-2 mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                                                {project.desc}
                                            </p>
                                            <div className="flex flex-wrap gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-150 mb-6">
                                                {project.tech.map(t => (
                                                    <span key={t} className="px-3 py-1.5 bg-blue-500/10 text-blue-300 backdrop-blur-sm rounded text-xs uppercase tracking-wide border border-blue-500/20">
                                                        {t}
                                                    </span>
                                                ))}
                                            </div>

                                            {/* Action Buttons */}
                                            <div className="flex gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-200">
                                                <a href={project.github} className="flex-1 flex items-center justify-center gap-2 bg-gray-800 hover:bg-blue-600 text-white py-2.5 rounded-lg text-sm font-bold transition-colors">
                                                    <Github size={16} /> Code
                                                </a>
                                                {/* <a href={project.demo} className="flex-1 flex items-center justify-center gap-2 bg-gray-100 hover:bg-blue-400 text-gray-900 hover:text-white py-2.5 rounded-lg text-sm font-bold transition-colors">
                                                    <ExternalLink size={16} /> Demo
                                                </a> */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </motion.div>
                    )}

                    {/* Certificates Tab */}
                    {activeTab === "certificates" && (
                        <motion.div
                            key="certificates"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3 }}
                            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
                        >
                            {certificates.map((cert, index) => (
                                <div key={index} className="relative group rounded-2xl overflow-hidden border border-gray-800 bg-gray-900 shadow-2xl hover:border-blue-500/50 transition-colors">
                                    {/* Decorative ribbon/header */}
                                    <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-blue-500 to-purple-600 z-10" />

                                    <div className="aspect-[1.414/1] bg-gray-800 relative overflow-hidden">
                                        {/* Placeholder for Certificate Image */}
                                        <img
                                            src={cert.image}
                                            alt={cert.title}
                                            className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                                        />

                                        {/* Overlay action */}
                                        <div className="absolute inset-0 bg-gray-900/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-sm">
                                            <a
                                                href={cert.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="px-8 py-4 bg-white text-gray-900 font-bold rounded-full transform scale-90 group-hover:scale-100 transition-transform flex items-center gap-2 hover:bg-blue-50 text-base"
                                            >
                                                <ExternalLink size={20} />
                                                View Certificate
                                            </a>
                                        </div>
                                    </div>

                                    <div className="p-8 bg-gray-900 border-t border-gray-800">
                                        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">{cert.title}</h3>
                                        <p className="text-gray-400 text-base">{cert.issuer} • {cert.date}</p>
                                    </div>
                                </div>
                            ))}
                        </motion.div>
                    )}

                    {/* Tech Stack Tab */}
                    {activeTab === "stack" && (
                        <motion.div
                            key="stack"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3 }}
                            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6"
                        >
                            {techStack.map((tech, index) => (
                                <motion.div
                                    key={index}
                                    whileHover={{ y: -5 }}
                                    className="p-8 bg-gray-900/50 backdrop-blur-sm rounded-2xl border border-gray-800 hover:border-blue-500/50 flex flex-col items-center justify-center gap-4 group transition-all duration-300 hover:shadow-[0_0_20px_rgba(59,130,246,0.15)]"
                                >
                                    <div className="w-16 h-16 flex items-center justify-center transition-all duration-300 transform group-hover:scale-110">
                                        <img src={tech.icon} alt={tech.name} className="w-12 h-12 object-contain" />
                                    </div>
                                    <span className="text-base font-medium text-gray-400 group-hover:text-white transition-colors">
                                        {tech.name}
                                    </span>
                                </motion.div>
                            ))}
                        </motion.div>
                    )}

                </AnimatePresence>

            </div>
        </section>
    );
};

export default PortfolioShowcase;
