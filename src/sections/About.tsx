import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { Code2, Award, GraduationCap, ArrowUpRight } from "lucide-react";

// Stat Badge Component
const StatBadge = ({ icon, label, value, desc, delay }: { icon: ReactNode, label: string, value: string, desc: string, delay: number }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay }}
            viewport={{ once: true }}
            className="relative p-5 rounded-2xl bg-gray-900/40 backdrop-blur-md border border-white/5 hover:border-white/10 transition-all group overflow-hidden"
        >
            <div className="flex items-center justify-between gap-4 relative z-10">
                <div className="flex items-center gap-4">
                    <div className="p-3 rounded-full bg-blue-500/10 text-blue-400 group-hover:bg-blue-500/20 transition-colors shrink-0">
                        {icon}
                    </div>
                    <div>
                        <h4 className="text-xl font-bold text-white group-hover:text-blue-200 transition-colors mb-1">{label}</h4>
                        <p className="text-xs text-gray-500 line-clamp-1">{desc}</p>
                    </div>
                </div>

                <div className="text-right shrink-0">
                    <span className="block text-3xl font-bold text-white leading-tight">{value}</span>
                    <div className="flex items-center gap-1 justify-end mt-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                        <span className="text-[10px] text-gray-400 uppercase tracking-wider">Live</span>
                    </div>
                </div>
            </div>

            {/* Bottom Animated Line */}
            <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-transparent overflow-hidden">
                <motion.div
                    className="h-full bg-gradient-to-r from-blue-500 to-purple-500"
                    initial={{ width: "0%" }}
                    whileInView={{ width: "100%" }}
                    transition={{ duration: 1.5, delay: delay + 0.2, ease: "circOut" }}
                />
            </div>

            <ArrowUpRight className="absolute top-3 right-3 text-gray-700/50 group-hover:text-white/20 transition-colors" size={14} />
        </motion.div>
    );
};

// Timeline Item Component
const TimelineItem = ({ year, title, place, desc, delay }: { year: string, title: string, place: string, desc: string, delay: number }) => (
    <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay }}
        viewport={{ once: true }}
        className="relative pl-8 border-l-2 border-gray-800 hover:border-blue-500/50 transition-colors py-2 group"
    >
        <div className="absolute -left-[9px] top-6 w-4 h-4 rounded-full bg-gray-900 border-2 border-blue-500 group-hover:bg-blue-500 transition-colors" />
        <span className="text-sm text-blue-400 font-mono mb-1 block">{year}</span>
        <h4 className="text-lg font-bold text-white group-hover:text-blue-200 transition-colors">{title}</h4>
        <p className="text-sm text-gray-400 font-medium mb-2">{place}</p>
        <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
    </motion.div>
);

const About = () => {
    return (
        <section id="about" className="py-20 relative">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <div className="flex items-center gap-2 mb-8">
                        <span className="w-12 h-1 bg-blue-600 rounded-full"></span>
                        <span className="text-blue-600 font-medium tracking-wider uppercase">
                            About Me
                        </span>
                    </div>

                    <div className="grid md:grid-cols-2 gap-16 items-start">
                        {/* Left Column: Intro */}
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold text-white mt-2">Who Am I?</h2>
                            <h3 className="text-xl md:text-2xl font-bold text-blue-400 mb-6">
                                I'm Alexander Erick, a Business Information System Student & Data Enthusiast
                            </h3>
                            <div className="space-y-6 text-gray-300 leading-relaxed text-lg">
                                <p>
                                    {/* With a background in Business Information Systems has given me a unique perspective on web development. I don't just write code; I design systems that solve real-world business problems, from database efficiency to streamlined user workflows */}
                                    With a background in Business Information Systems, I focus on analyzing data to generate actionable insights for business decision-making. I am particularly interested in data cleaning, exploratory data analysis (EDA), and transforming raw datasets into structured, meaningful information.
                                </p>
                                <p>
                                    {/* Through coursework, Administrative Assistant - Rector's Secretariat, and student organization activities,
                                    I have developed an understanding of how systems are designed, implemented,
                                    and improved through iterative processes. */}
                                    Through academic coursework, my role as Administrative Assistant at the Rector’s Secretariat, and various organizational responsibilities, I have worked with structured records, documentation systems, and data validation processes that strengthened my analytical thinking and attention to detail.
                                </p>
                                <p>
                                    I am currently seeking a Data Analyst internship opportunity where I can apply statistical reasoning, data visualization skills, and business analysis capabilities in a professional environment.
                                </p>
                            </div>
                        </div>

                        {/* Right Column: Stat Badges (Vertical Stack) */}
                        <div className="grid grid-cols-1 gap-6">
                            <StatBadge
                                icon={<Code2 size={24} />}
                                label="Total Projects"
                                value="5"
                                desc="EDA, dashboards, and analytics case studies"
                                delay={0.2}
                            />
                            <StatBadge
                                icon={<Award size={24} />}
                                label="Certificates"
                                value="4"
                                desc="Professional skills validated"
                                delay={0.4}
                            />
                            <StatBadge
                                icon={<GraduationCap size={24} />}
                                label="Academic Experience"
                                value="3"
                                desc="Continuous learning journey"
                                delay={0.6}
                            />
                        </div>
                    </div>

                    {/* Timeline - Full Width Bottom (Horizontal) */}
                    <div className="mt-16 bg-gray-900/30 p-8 rounded-2xl border border-white/5 backdrop-blur-sm">
                        <h3 className="text-xl font-bold text-white mb-8 flex items-center gap-2">
                            <span className="text-blue-500">#</span> My Journey
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <TimelineItem
                                year="Aug 2023 - Present"
                                title="Administrative Assistant - Rector's Secretariat"
                                place="ISTTS (Surabaya)"
                                desc="Managed institutional records, prepared official documents, and maintained structured datasets for partnerships and scholarship programs. Contributed to organizing and validating data for internal reporting and information systems."
                                delay={0.2}
                            />
                            <TimelineItem
                                year="2023 - 2025"
                                title="Chairperson Catholic Student Association (KMK) – ISTTS"
                                place="Campus Activity Unit"
                                desc="Led cross-functional teams and coordinated multiple programs with strict timelines. Oversaw internal systems, documentation, and digital communication processes."
                                delay={0.4}
                            />
                            <TimelineItem
                                year="2024 - 2025"
                                title="Public Relations Coordinator "
                                place="IEEE Student Branch ISTTS"
                                desc="Coordinated event documentation, managed participant databases, and supported communication analytics for outreach programs and workshops."
                                delay={0.6}
                            />
                            <TimelineItem
                                year="2024-2025"
                                title="Member – University & Community Partnership Department"
                                place="Student Executive Board (BEM) ISTTS"
                                desc="Handled partnership documentation, tracked collaboration records, and supported data organization for external institutional engagement initiatives."
                                delay={0.8}
                            />
                            <TimelineItem
                                year="2025"
                                title="Secretary & Treasurer Google IOX Surabaya"
                                place="Community"
                                desc="Managed financial records, budget tracking, and structured documentation for event operations, ensuring accuracy and transparency in reporting."
                                delay={0.8}
                            />
                            <TimelineItem
                                year="2025-2026"
                                title="Coordinator of Internal Development & Events"
                                place="HIMA SIB ISTTS"
                                desc="Oversaw internal development programs, tracked participation metrics, and evaluated event outcomes using structured documentation and reporting methods."
                                delay={0.8}
                            />
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
