import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import ProfileCard from "../components/ProfileCard";
import Typewriter from "typewriter-effect";

// Floating Badge Component
const FloatingBadge = ({ text, className, delay }: { text: string, className: string, delay: number }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{
            opacity: 1,
            y: [0, -15, 0],
        }}
        transition={{
            duration: 3,
            repeat: Infinity,
            delay: delay,
            ease: "easeInOut"
        }}
        className={`absolute z-20 hidden lg:block px-5 py-2 rounded-full bg-gray-900/90 backdrop-blur-xl border border-blue-500/30 text-blue-300 text-sm font-semibold shadow-[0_0_15px_rgba(59,130,246,0.2)] hover:border-blue-400 hover:shadow-[0_0_20px_rgba(59,130,246,0.4)] transition-all cursor-default ${className}`}
    >
        {text}
    </motion.div>
);

const Hero = () => {
    return (
        <section id="home" className="min-h-screen relative flex items-center justify-center pt-20 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 w-full">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="flex-1 text-center md:text-left"
                >
                    <div className="flex flex-col lg:flex-row items-center gap-12 justify-between w-full">
                        {/* Text Content - Wider Space */}
                        <div className="flex-[1.5] lg:flex-[2] text-center lg:text-left z-10 w-full">
                            <h1 className="text-blue-400 font-bold tracking-wide mb-4 uppercase">
                                {/* Business Information System Student */}
                                Business Information System Student | Aspiring Data Analyst
                                {/* Hi, I’m Alexander Erick */}
                            </h1>
                            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight h-[160px] md:h-[180px] lg:h-auto">
                                <Typewriter
                                    options={{
                                        // strings: [
                                        //     'Learning by <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Building</span> Projects',
                                        //     'Iterating on  <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Ideas</span>',
                                        //     'Applying Concepts into <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Practice</span>',
                                        // ],
                                        strings: [
                                            'Turning by <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Data</span> into Insights',
                                            'Analyzing Patterns & <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Trends</span>',
                                            'Building <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Data-Driven</span> Solutions',
                                        ],
                                        autoStart: true,
                                        loop: true,
                                        deleteSpeed: 50,
                                        delay: 80,
                                    }}
                                />
                            </h1>
                            <p className="text-gray-400 text-lg md:text-xl mb-8 max-w-3xl mx-auto lg:mx-0 leading-relaxed">
                                {/* 6th-semester Business Information System student at Institut Sains dan Teknologi Terpadu Surabaya (ISTTS)
                                with a strong interest in web development. I enjoy building responsive and user-friendly web
                                applications while continuously learning modern technologies. */}
                                Focused on data analysis, data visualization, and extracting actionable insights from complex datasets. Experienced in data cleaning, exploratory data analysis (EDA), and building dashboards to support data-driven decision making.
                            </p>

                            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
                                <a
                                    href="#projects"
                                    className="group px-8 py-3 bg-blue-600 text-white rounded-full font-medium flex items-center justify-center gap-2 hover:bg-blue-700 transition-all border border-blue-500 shadow-lg shadow-blue-500/25"
                                >
                                    View Project
                                    <ArrowRight
                                        size={20}
                                        className="group-hover:translate-x-1 transition-transform"
                                    />
                                </a>
                                <a
                                    href="#contact"
                                    className="px-8 py-3 bg-gray-800 text-white rounded-full font-medium flex items-center justify-center gap-2 hover:bg-gray-700 transition-all border border-gray-700 hover:border-gray-600"
                                >
                                    Donwload CV
                                </a>
                            </div>
                        </div>

                        {/* Profile Card - Smaller Space */}
                        <div className="flex-1 flex justify-center lg:justify-end w-full max-w-lg mx-auto relative lg:h-[600px] items-center">
                            {/* Floating Badges */}
                            <FloatingBadge text="Python 🐍" className="top-[15%] -left-12 lg:left-0" delay={0} />
                            <FloatingBadge text="SQL 🗄️" className="top-[25%] -right-12 lg:-right-20" delay={1.5} />
                            {/* <FloatingBadge text="Tailwind 🎨" className="bottom-[30%] -left-6" delay={0.8} /> */}
                            <FloatingBadge text="Excel 📈" className="bottom-[20%] -right-8 lg:-right-16" delay={2.2} />
                            <FloatingBadge text="Power BI 📊" className="bottom-[20%] -left-8 lg:left-4" delay={0.8} />

                            <div className="relative z-10">
                                <ProfileCard />
                            </div>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 1 }}
                    className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce"
                >
                    <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center p-2">
                        <div className="w-1 h-3 bg-gray-400 rounded-full animate-scroll" />
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
