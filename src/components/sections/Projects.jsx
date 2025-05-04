
export const Projects = () => {
    return (
        <section 
        id="projects"
        className="min-h-screen flex items-center justify-center py-20"
        >
            
        <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center "> 
                Projects 
                </h2>
                <div className="gird grid-cols-1 md:grid-cols-4 gap-6">

                    <div className="p-6 rounded-xl border-white/10 hover:translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                        <h3 className="text-xl font-bold mb-2">
                           <strong> FlyNowOverSeas Website </strong></h3>
                            <p className="text-gray-400 mb-4 ">Created a professional and user-friendly platform for Fly Now Overseas that significantly </p>
                                <p className="text-gray-400 mb-4 ">improved user engagement and streamlined the lead generation process.
                                </p>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {["HTML", "CSS","JavaScript", "Bootstrap", "Python", "SQL", "Git"].map((tech, key) => (
                                         <span 
                                         key={key}
                                         className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                          hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
             
                                          {tech}
                                          </span>

                                    ))}
                                </div>
                                <div className="flex justify-between items-center">
                                    <a href="https://flynowoverseas.com/"
                                    className=" py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                          text-blue-400 hover:text-blue-300 transition-colors my-4 ">View Project 
                                          </a>
                                          <a href="https://github.com/Prathyukatta?tab=repositories"
                                    className=" py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                          text-blue-400 hover:text-blue-300 transition-colors my-4 ">GitHub 
                                          </a>
                                    
                                   
                                </div>

                        
                    </div>
                    <div className="p-6 rounded-xl border-white/10 hover:translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                        <h3 className="text-xl font-bold mb-2">
                           <strong> BT foods Website </strong></h3>
                            <p className="text-gray-400 mb-4 ">Delivered a visually appealing and responsive website for BT Foods, </p>
                            <p className="text-gray-400 mb-4 "> effectively showcasing products and enhancing the brand’s online presence.
                                </p>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {["HTML", "CSS","JavaScript", "Bootstrap", "Python", "SQL", "Git"].map((tech, key) => (
                                         <span 
                                         key={key}
                                         className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                          hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
             
                                          {tech}
                                          </span>

                                    ))}
                                </div>
                                <div className="flex justify-between items-center">
                                    <a href="https://balatradeelite.com/"
                                    className=" py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                          text-blue-400 hover:text-blue-300 transition-colors my-4 ">View Project 
                                          </a>
                                          <a href="https://github.com/Prathyukatta?tab=repositories"
                                    className=" py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                          text-blue-400 hover:text-blue-300 transition-colors my-4 ">GitHub 
                                          </a>
                                    
                                   
                                </div>
                                </div>
                                
                    
                    
                                <div className="p-6 rounded-xl border-white/10 hover:translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                        <h3 className="text-xl font-bold mb-2">
                           <strong>Online e Voting  System</strong></h3>
                            <p className="text-gray-400 mb-4 ">Developed a secure and user-friendly online e-Voting  </p>
                                <p className="text-gray-400 mb-4 ">system to ensure transparent and efficient election processes.
                                </p>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {["HTML", "CSS","JavaScript", "Bootstrap", "Python", "SQL"].map((tech, key) => (
                                         <span 
                                         key={key}
                                         className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                          hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
             
                                          {tech}
                                          </span>

                                    ))}
                                </div>
                                <div className="flex justify-between items-center">
                                    <a href="https://right2vote.in/"
                                    className=" py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                          text-blue-400 hover:text-blue-300 transition-colors my-4 ">View Project 
                                          </a>
                                          <a href="https://github.com/Prathyukatta?tab=repositories"
                                    className=" py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                          text-blue-400 hover:text-blue-300 transition-colors my-4 ">GitHub 
                                          </a>
                                    
                                   
                                </div>
                                </div>
                            

            
        <div className="p-6 rounded-xl border-white/10 hover:translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                        <h3 className="text-xl font-bold mb-2">
       
                           <strong> Personal Portfolio </strong></h3>
                            <p className="text-gray-400 mb-4 ">Built a high-performance single-page application with seamless</p>
                                <p className="text-gray-400 mb-4 "> navigation and optimized user experience.
                                </p>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {["HTML","JavaScript", "Tailwindcss", "React" ].map((tech, key) => (
                                         <span 
                                         key={key}
                                         className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                          hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
             
                                          {tech}
                                          </span>

                                    ))}
                                </div>
                                <div className="flex justify-between items-center">
                                    <a href="https://prathyukatta.github.io/Portfolio/"
                                    className=" py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                          text-blue-400 hover:text-blue-300 transition-colors my-4 ">View Project 
                                          </a>
                                          <a href="https://github.com/Prathyukatta?tab=repositories"
                                    className=" py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                          text-blue-400 hover:text-blue-300 transition-colors my-4 ">GitHub 
                                          </a>
                                    
                                   
                                </div>

                        
                    </div>
                    
                    

                </div>
                </div>
    
        
        </section>
    )
}