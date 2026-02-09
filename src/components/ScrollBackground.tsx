import { motion, useScroll, useTransform } from "framer-motion";

const ScrollBackground = () => {
    const { scrollYProgress } = useScroll();

    // Transform scroll progress to vertical movement
    // Moving the background partially to create a parallax-like effect or just movement
    const y = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);

    return (
        <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
            {/* Base dark background */}
            <div className="absolute inset-0 bg-gray-950" />

            {/* Animated Pattern */}
            <motion.div
                style={{ y }}
                className="absolute inset-0 opacity-[0.2]"
            >
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage: `radial-gradient(#ffffff 1px, transparent 1px)`,
                        backgroundSize: `40px 40px`
                    }}
                />
            </motion.div>

            {/* Dark gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-900/50 to-black pointer-events-none" />
        </div>
    );
};

export default ScrollBackground;
