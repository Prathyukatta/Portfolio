import { useRef } from 'react';
import emailjs from '@emailjs/browser'
import { useState } from 'react';
export const Contact = () => {
    const form = useRef();

    const [fromData, seFormData] = useState({
        name: "",
        email:"",
        message:"",
    });
    const SERVICE_ID = "service_auicm9h"
    const TEMPLATE_ID = "template_7bc9nbs"
    const PUBLIC_KEY = "VtSfhkV89AbfW9QHW";
    const handleSubmit = (e) => {
        e.preventDefault();
        const templateParams = {
            name: fromData.name,
            email: fromData.email,
            message: fromData.message,
        };
        emailjs
        .sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
        .then((result) => {
            
            alert("Message Sent!");
            console.log(result.text);
        })
        .catch((error) => {
            console.error("EmailJS error:", error);
            alert(`Oops! Something went wrong: ${error.text || error}`);
            

        });
};

        
       
    return (
        <section
        id="contact"
        className="min-h-screen flex items-center justify-center py-20"
        >
            <div className="px-4 w-150">
                <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">Get In Touch</h2>
                <form ref={form}
                className="space-y-6"  onSubmit={handleSubmit}>
                    <div className="relative">
                        <input type="text" 
                        id="name" 
                        name="from_name" 
                        required 
                        value={fromData.name}
                        className="w-full sm:w-[500px] bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                       placeholder="Name..."
                       onChange={(e) => seFormData({...fromData, name: e.target.value})}
                       
                       
                       />
                        
                    </div>
                    
             
                    <div className="relative">
                        <input type="text" 
                        id="email" 
                        name="email" 
                        required 
                        value={fromData.email}
                        className="w-full sm:w-[500px] bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                       placeholder="example@gmail.com"
                       onChange={(e) => seFormData({...fromData, email: e.target.value})}
                       />


                     </div> 
                     <div className="relative">
                        <textarea
                        id="messsage" 
                        name="message" 
                        required 
                        value={fromData.message}
                        rows={5} 
                        className="w-full sm:w-[500px] bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                       placeholder="Your Message..."
                       onChange={(e) => seFormData({...fromData, message: e.target.value})}
                       />

                     </div> 
                     <button type="submit" className="w-full bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden
                    hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]">Send Message</button>


                </form>
            </div>
        </section>

    );
};