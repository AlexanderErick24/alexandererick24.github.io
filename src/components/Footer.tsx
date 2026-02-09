import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer: React.FC = () => {
    return (
        <footer className="bg-gray-900 border-t border-gray-800 py-12 relative z-10">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                    <div className="flex items-center gap-2">
                        <img
                            src="https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?auto=format&fit=crop&q=80&w=200&h=200"
                            alt="Logo"
                            className="w-10 h-10 rounded-lg object-cover"
                        />
                        <span className="text-2xl font-bold text-white block mb-2">Portfolio</span>
                    </div>

                    <div className="flex items-center gap-6">
                        <a href="https://github.com/AlexanderErick24" className="text-gray-400 hover:text-white transition-colors">
                            <Github size={20} />
                        </a>
                        <a href="https://www.linkedin.com/in/alexander-erick24" className="text-gray-400 hover:text-white transition-colors">
                            <Linkedin size={20} />
                        </a>
                        <a href="mailto:alexandererick2425@gmail.com" className="text-gray-400 hover:text-white transition-colors">
                            <Mail size={20} />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
