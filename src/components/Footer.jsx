import React from "react";
import {
    AiFillGithub,
    AiOutlineLinkedin,

} from "react-icons/ai";
import { IoIosMail } from "react-icons/io";
import { IoCallOutline } from "react-icons/io5";
import { FaWhatsapp } from "react-icons/fa";
import { motion } from 'framer-motion'

export const Footer = () => {
    const iconVariants = {
        animate: {
            y: [0, -5, 0], 
            transition: {
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
            },
        },
    };
    
    return (
        <footer className="py-8" id="contact">
            <div className="max-w-[1200px] mx-auto px-4">
                <div className="flex items-center justify-between  flex-col md:flex-row">
                    <div>
                        <h2 className="md:text-7xl text-4xl font-bold mb-10 text-white/50">
                            Get in <span className="text-gray-400">touch</span>
                        </h2>
                        <a
                            className="md:text-4xl text-xl font-semibold text-white underline decoration-gray-400 decoration-2
                                    underline-offset-4 hover:decoration-gray-200 transition duration-300"
                            href="mailto:kavyapash25@gmail.com"
                        >
                            kavyapash25@gmail.com
                        </a>
                    </div>

                    <div className="mt-12 md:mt-0 flex flex-col items-center gap-4">
                        <div className="flex gap-7">
                            <motion.a href="https://www.linkedin.com/in/kavya-prasannan-5b6826173/" target="_blank" rel="noopener noreferrer" variants={iconVariants} animate="animate">
                                <AiOutlineLinkedin size={60} className="text-blue-500" />
                            </motion.a>
                            <motion.a href="mailto:kavyapash25@gmail.com" variants={iconVariants} animate="animate">
                                <IoIosMail size={60} className="text-red-500" />
                            </motion.a>
                            <motion.a href="https://github.com/Kavya2512p" target="_blank" rel="noopener noreferrer" variants={iconVariants} animate="animate">
                                <AiFillGithub size={60} className="text-gray-200" />
                            </motion.a>
                        </div>
                        {/* Second Row */}
                        <div className="flex gap-7">
                            <motion.a href="tel:+916377358554" variants={iconVariants} animate="animate">
                                <IoCallOutline size={60} className="text-purple-500" />
                            </motion.a>
                            <motion.a href="tel:+916377358554" variants={iconVariants} animate="animate">
                                <FaWhatsapp size={60} className="text-green-500" />
                            </motion.a>
                        </div>
                    </div>
                </div>

                <div className="relative z-10 text-center mt-8 py-12">
                    <h1 className="hidden md:block text-[5rem] md:text-[5rem] lg:text-[5rem] font-bold text-white opacity-10">
                        KAVYA PRASANNAN
                    </h1>

                    <h1 className="md:hidden relative text-[5rem] md:text-[4rem] lg:text-[15rem] font-bold text-white opacity-10">
                        KAVYA
                    </h1>
                </div>

                <div className="relative mt-12 container flex sm:justify-between justify-center items-center sm:gap-10 max-sm:flex-col">
                    <p className="text-gray-200 caption text-n-4 lg:block">
                        Let's Connect
                    </p>

                    <ul className="flex gap-5 flex-wrap">
                        <a
                            href="tel:+916377358554"
                            aria-label="Call"
                            className="text-gray-200 flex items-center justify-center w-10 h-10 rounded-full"
                        >
                            <IoCallOutline size={30} />
                        </a>
                        <a
                            href="https://wa.me/916377358554?text=Hello%20Kavya"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Whatsapp"
                            className="text-gray-200 flex items-center justify-center w-10 h-10 rounded-full"
                        >
                            <FaWhatsapp size={30} />
                        </a>
                    </ul>
                </div>
            </div>
        </footer>
    );
};
