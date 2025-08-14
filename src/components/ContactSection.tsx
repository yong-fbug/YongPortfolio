import { Download, Github, Linkedin, Mail } from "lucide-react";


export const ContactSection = () => {
    return (
        <div>
            <div className="flex gap-8 mb-8">
                <a href="https://github.com/yong-fbug" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <Github className="w-7 h-7 hover:text-blue-600 transition" />
                </a>
                <a href="https://linkedin.com/in/jaspher-flores" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Linkedin className="w-7 h-7 hover:text-blue-600 transition" />
                </a>
                <a href="mailto:jaspherflores2001@gmail.com" aria-label="Email">
                <Mail className="w-7 h-7 hover:text-blue-600 transition" />
                </a>
            </div>
            <a
            href="/resume/Jaspher_Flores_Resume.pdf" 
            download
            className="flex items-center gap-2 px-5 py-3 border border-zinc-300 dark:border-zinc-700 rounded-md hover:bg-zinc-100 dark:hover:bg-zinc-800 transition"
            aria-label="Download Resume"
        >
            <Download className="w-5 h-5" />
            Download Resume
        </a>
        </div>
    );
};