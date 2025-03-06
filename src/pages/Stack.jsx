import React, { useEffect } from "react";
import { SiReact, SiNodedotjs } from "react-icons/si";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { DiJavascript } from "react-icons/di";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaBootstrap } from "react-icons/fa6";
import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { IoLogoHtml5 } from "react-icons/io";
import { FaCss3Alt } from "react-icons/fa6";

const stackItems = [
    {
        id: 1,
        name: "React",
        icon: <SiReact size={100} />,
        color: "text-emerald-200",
    },
    {
        id: 2,
        name: "Javascript",
        icon: <DiJavascript size={100} />,
        color: "text-emerald-200",
    },
    {
        id: 3,
        name: "Tailwind CSS",
        icon: <RiTailwindCssFill size={100} />,
        color: "text-emerald-200",
    },
    {
        id: 4,
        name: "Bootstrap",
        icon: <FaBootstrap size={100} />,
        color: "text-emerald-200",
    },
    {
        id: 5,
        name: "Node.js",
        icon: <SiNodedotjs size={100} />,
        color: "text-emerald-200",
    },
    {
        id: 6,
        name: "Express.js",
        icon: <SiExpress size={100} />,
        color: "text-emerald-200",
    },
    {
        id: 7,
        name: "Mongodb",
        icon: <SiMongodb size={100} />,
        color: "text-emerald-200",
    },
    {
        id: 8,
        name: "HTML",
        icon: <IoLogoHtml5 size={100} />,
        color: "text-emerald-200",
    },
    {
        id: 9,
        name: "CSS",
        icon: <FaCss3Alt size={100} />,
        color: "text-emerald-200",
    },
];

export const Stack = () => {
    const controls = useAnimation();

    const [ref, inView] = useInView({
        threshold: 0.1,
    });

    useEffect(() => {
        if (inView) {
            controls.start("visible");
        } else {
            controls.start("hidden");
        }
    }, [controls, inView]);

    return (
        <section
            className="py-24 md:py-40 max-w-[1200px] mx-auto text-center"
            id="stack"
        >
            <h2 className="text-7xl text-gray-100 font-bold mb-20">My Tech <span className="text-emerald-300">Stack</span></h2>
            <div className="flex flex-wrap justify-center gap-8" ref={ref}>
                {stackItems.map((item, index) => (
                    <motion.div
                        key={item.id}
                        custom={index}
                        initial="hidden"
                        animate={controls}
                        variants={{
                            hidden: (index) => ({
                                opacity: 0,
                                y: index % 2 === 0 ? -100 : 100,
                            }),
                            visible: {
                                opacity: 1,
                                y: 0,
                                transition: {
                                    duration: 1.5,
                                },
                            },
                        }}
                        className="bg-white/10 flex flex-col items-center justify-center w-[200px] h-[200px] rounded-xl p-4 shadow-lg hover:shadow-2xl transition-shadow duration-300"
                    >
                        <div className={`mb-4 ${item.color}`}>{item.icon}</div>
                        <p className="text-white/20 text-xl">{item.name}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};
