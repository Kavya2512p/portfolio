import React from 'react'
import { motion } from 'framer-motion'

import { Typewriter } from "react-simple-typewriter";


export default function Hero() {
    const handleDownload = () => {
        const resumeUrl = "/resume.pdf"; 
        const link = document.createElement("a");
        link.href = resumeUrl;
        link.setAttribute("download", "Kavya_Prasannan_Resume.pdf"); 
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };
    return (
        <div className='relative overflow-clip md:mb-0 lg:mb-13 min-h-screen text-white bg-[linear-gradient(to_bottom,#000,#071E18_35%,#208A65_67%,#35FB8E_85%)]'>
            <div
                className="absolute bg-black w-[2400px] h-[1000px] rounded-[50%] left-1/2 -translate-x-1/2 
                      bg-[radial-gradient(closest-side,#000_85%,#249974)] top-[450px]
                      border-[1px] border-[#8CD6DE]/30"
            />
            <div className="container relative mx-auto px-4 pt-12 pb-24">
                <div className="flex flex-col items-center justify-center text-center z-10">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        className="relative mb-8 mt-24"
                    >
                        <div className="absolute inset-0 bg-gradient-to-b from-emerald-500/20 to-transparent rounded-full blur-3xl"></div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-2xl"
                    >
                        <h1 className="text-6xl md:text-7xl mt-7 font-cursive tracking-tighter mb-4">
                            Hey, I am <br />
                            <span className="text-emerald-400 my-9 block font-bold">
                                <Typewriter
                                    words={["Kavya Prasannan"]}
                                    loop={0} 
                                    cursor
                                    cursorStyle="|"
                                    typeSpeed={100}
                                    deleteSpeed={50} 
                                    delaySpeed={1000} 
                                />
                            </span>
                        </h1>
                        <p className="text-xl text-white/80 max-w-lg mx-auto leading-relaxed mb-6">
                            I am a fullstack developer focusing on creating websites that
                            provides user with best experience.
                        </p>

                        <div className="flex flex-col items-center gap-6">
                            <motion.button
                                onClick={handleDownload}
                                whileHover={{ scale: 1.05, boxShadow: "0px 0px 8px rgba(0, 0, 0, 0.3)" }}
                                className="z-10 mt-5 cursor-pointer font-bold text-gray-200 md:w-auto p-4 border 
                border-emerald-400 rounded-xl"
                            >
                                Download CV
                            </motion.button>
                        </div>

                    </motion.div>
                </div>
                <motion.div
                    animate={{
                        y: [0, 15, 0],
                    }}
                    transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    className="absolute bottom-16 right-1/3 w-96 h-96 bg-emerald-500/10 rounded-full blur-xl"
                />
            </div>
        </div>
    )
}
