
export const About = () => {

    const frontendskills = ["React", "HTML", "CSS", "JavaScript/TypeScript", "Bootstrap"];
    const backendskills = ["Node.js", "Python", "AWS", "MongoDB", "SQL"];


    return (
    <section id="about" className="min-h-screen flex items-center justify-center py-20"
    
    >
        <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
                About Me
            </h2>
            <div className="rounded-xl p-8 border-white/10 border hover:translate-y-1 transition-all">
            <p className="text-gray-300 mb-6">
                Passionate developer with expertise in building scalable web 
                applications and creating innovative solutions.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                    <h3 className="text-xl font-bold mb-4">Frontend</h3>
                    <div className="flex flex-wrap gap-2">
                        {frontendskills.map((tech, key) => (
                            <span 
                            key={key}
                            className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                             hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">

                             {tech}
                             </span>

                        
                        ))}

                    </div>
                </div>
                <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Backend</h3>
                <div className="flex flex-wrap gap-2">
                        {backendskills.map((tech, key) => (
                            <span 
                            key={key}
                            className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                             hover:shadow-[0_2px_8px_rgba(59,130,2246.0.2)] transition">

                             {tech}
                             </span>
                              ))}

                             </div>
                             
                </div>
                    


            </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">🎓 Education</h3>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                    <li>
                        <strong>B.Tech in Computer Science and Engineering</strong> - Amrita Sai Institute of Science and Technology (2020 - 2024)
                        <strong> CGPA:8.0 </strong>

                    </li>
                    <li>
                        Relevant Coursework: Data Structures, Web Development, Cloud Computing...
                    </li>
                    
                </ul>
                </div>
                <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">💼 Work Experience</h3>
                <div className="space-y-4 tect-gray-300">
                    <div>
                        <h4 className="font-semibold"> Frontend Developer Intern at InboxTales (Sep'2024 -Mar'2025) </h4>
                        <p> Built dynamic, responsive web applications using advanced Frontend technologies to deliver seamless and engaging user experiences.
                        </p>
                    </div>
                    <div>
                        <h4 className="font-semibold">Python Intern at Brainovision Solutions (Jan'2024 -May'2024) </h4>
                        <p> Developed backend scripts and automated tasks using Python, contributing to efficient data processing and streamlined workflows.
                        </p>
                    </div>
                    <div>
                        <h4 className="font-semibold"> Web Development at 1stop.ai (Jul'2024 -Nov'2024) </h4>
                        <p> Designed and developed responsive web pages using HTML, CSS, JavaScript, and Bootstrap to enhance user engagement and site functionality.
                        </p>
                    </div>
                </div>
                </div>
            </div>
            

        </div>

    </section>
);
}