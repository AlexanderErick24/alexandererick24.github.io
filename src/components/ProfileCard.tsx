import React, { useRef } from "react";
import { motion, useMotionTemplate, useMotionValue, useSpring } from "framer-motion";
import { User } from "lucide-react";
import profileImg from "../assets/profile.JPG";

const ProfileCard: React.FC = () => {
    const ROTATION_RANGE = 20; // How much it tilts
    const HALF_ROTATION_RANGE = ROTATION_RANGE / 2;

    const ref = useRef<HTMLDivElement>(null);

    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const xSpring = useSpring(x);
    const ySpring = useSpring(y);

    const transform = useMotionTemplate`rotateX(${xSpring}deg) rotateY(${ySpring}deg)`;

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!ref.current) return;

        const rect = ref.current.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;

        const mouseX = (e.clientX - rect.left) * ROTATION_RANGE;
        const mouseY = (e.clientY - rect.top) * ROTATION_RANGE;

        const rX = (mouseY / height - HALF_ROTATION_RANGE) * -1;
        const rY = mouseX / width - HALF_ROTATION_RANGE;

        x.set(rX);
        y.set(rY);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                transformStyle: "preserve-3d",
                transform,
            }}
            className="relative w-full max-w-[420px] aspect-[9/14] rounded-[30px] bg-gradient-to-br from-indigo-500/30 to-purple-500/30 p-[1px] cursor-pointer"
        >
            {/* Outline Glow */}
            <div className="absolute inset-0 rounded-[30px] bg-gradient-to-br from-blue-400 to-purple-600 opacity-50 blur-sm" />

            <div
                className="relative h-full w-full rounded-[29px] bg-[#0c1220] overflow-hidden flex flex-col items-center justify-between pt-4 pb-8 border border-white/10 shadow-2xl"
                style={{
                    transform: "translateZ(50px)",
                    transformStyle: "preserve-3d",
                }}
            >
                {/* Top Text Content */}
                <div className="text-center z-10" style={{ transform: "translateZ(30px)" }}>
                    <h2 className="text-3xl font-bold text-white tracking-wide drop-shadow-lg">Alexander Erick</h2>
                    <p className="text-gray-400 text-sm font-medium tracking-wider uppercase mt-1">Web Developer</p>
                </div>

                {/* Main Photo */}
                <div
                    className="absolute inset-x-0 bottom-0 top-20 z-0 flex items-end justify-center overflow-hidden"
                    style={{ transform: "translateZ(20px)" }}
                >
                    <img
                        src={profileImg}
                        alt="Profile"
                        className="w-full h-full object-cover object-center scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0c1220] via-transparent to-transparent opacity-90" />
                </div>


                {/* Bottom Card */}
                <div
                    className="w-[94%] h-20 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 flex items-center justify-between px-6 z-20 shadow-lg gap-4"
                    style={{ transform: "translateZ(40px)" }}
                >
                    <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-blue-500 to-purple-500 flex items-center justify-center shrink-0">
                            <span className="text-white text-xs font-bold">AE</span>
                        </div>
                        <div className="text-left">
                            <p className="text-white text-sm font-bold whitespace-nowrap">@erick</p>
                            <p className="text-green-400 text-xs">Online</p>
                        </div>
                    </div>
                    <a href="#contact">
                        <button className="px-5 py-2.5 bg-white/10 hover:bg-white/20 text-white text-xs font-bold rounded-lg border border-white/10 transition-colors flex items-center gap-2 whitespace-nowrap">
                            Contact Me
                        </button>
                    </a>
                </div>

            </div>
        </motion.div>
    );
};

export default ProfileCard;
