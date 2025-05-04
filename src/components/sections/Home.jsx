


export const Home = () => {
    return (
    <section id="home" className="min-h-screen flex items-center justify-center relative"
    >
     
    
     <div className="text-center z-10 px-4">
       
        <h1 className="text-6xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-cyan-600 bg-clip-text text-transparent leading-right">
            Hi, I'm Prathyusha</h1>

        <p className="text-gray-400 text-4g mb-8 max-w-lg max-auto">
        I am a passionate Full Stack Developer with hands-on experience in building scalable, 
        cloud-ready web applications. Proficient in modern frontend technologies like React.js, 
        JavaScript, and Bootstrap, and backed by solid backend skills in Node.js and Python 
        I specialize in creating responsive, user-centric interfaces, integrating RESTful APIs, 
        and developing secure backend services. With a strong foundation in version 
        control, and DevOps tools like AWS and Git, 
         Currently expanding my capabilities in embedded systems and AI-driven applications.
        </p>

        <div className="flex justify-center space-x-4">
            <a href="#projects" className="bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 
            hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.4)]"
            >
                View Projects</a>
                <a href="https://www.linkedin.com/in/katta-prathyusha-912601258" className="border-blue-500/50 text-blue-500 py-3 px-6 rounded font-medium transition-all duration-200
                hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.2)] hover:bg-blue-500/10"
            >
                Contact Me</a>
                <a href="/Resume.pdf" className="border-blue-500/50 text-blue-500 py-3 px-6 rounded font-medium transition-all duration-200
                hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.2)] hover:bg-blue-500/10"
            >
                Download CV</a>

        </div>


     </div>
     
     

    </section>
);
};
