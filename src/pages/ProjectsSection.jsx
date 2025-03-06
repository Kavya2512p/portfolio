import React from 'react';

import ecommerce from "../assets/images/ecommerce.png"
import quiz from "../assets/images/quiz.png"
import weather from "../assets/images/weather.png"
import bakery_img from "../assets/images/bakery_img.png"
import travel from "../assets/images/travel.png"
import zomato from "../assets/images/zomato.png"
import {  AiOutlineGithub } from 'react-icons/ai'
import Reveal from './Reveal';

const projects = [
    {
        img: ecommerce,
        title: "Ecommerce Website",
        description: "Trendify – A sleek, responsive e-commerce platform for a seamless shopping experience.",
        links: {
            site: "https://ecommerce-zeta-seven-70.vercel.app/",
            github: "https://github.com/Kavya2512p/Ecommerce.git",
        },
    },
    {
        img: quiz,
        title: "Quizzer",
        description: "An interactive and engaging quiz app for testing knowledge with a seamless user experience.",
        links: {
            site: "https://quiz-app-alpha-kohl.vercel.app/",
            github: "https://github.com/Kavya2512p/QuizApp.git",
        },
    },
    {
        img: weather,
        title: "Weather Tracker",
        description: "A sleek and responsive weather tracker providing real-time updates and forecasts.",
        links: {
            site: "https://weatherapp-phi-ashy.vercel.app/",
            github: "https://github.com/Kavya2512p/weatherapp.git",
        },
    },
    {
        img: bakery_img,
        title: "Bakery Website",
        description: "A delightful bakery website showcasing delicious treats with a warm and inviting design.",
        links: {
            site: "https://kavya2512p.github.io/Bakery_website/",
            github: "https://github.com/Kavya2512p/Bakery_website.git",
        },
    },
    {
        img: travel,
        title: "Traveino",
        description: "A travel website showcasing top destinations, guides, and seamless trip planning.",
        links: {
            site: "https://kavya2512p.github.io/Website5/",
            github: "https://github.com/Kavya2512p/Website5.git",
        },
    },
    {
        img: zomato,
        title: "Zomato Clone (frontend)",
        description: "A Zomato clone frontend with a sleek design, showcasing restaurants and food options.",
        links: {
            site: "https://zomato-frontend-tmkd.vercel.app/",
            github: "https://github.com/Kavya2512p/zomato_frontend.git",
        },
    },
]

const ProjectsSection = () => {
    return (
        <div className='max-w-[1000px] mx-auto p-6 md:py-60' id="portfolio">
            <h2 className="text-6xl font-bold text-center mb-16">
                    My <span className="text-emerald-300">Projects</span>
                </h2>
            {projects.map((project, index) => (
                <Reveal>
                    <div key={index}
                        className={`flex flex-col md:flex-row ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''} mb-12`}>
                        <div className='w-full md:w-1/2 p-4'>
                            <img
                                src={project.img}
                                alt={project.title}
                                className='w-full h-full  p-4 object-cover rounded-lg shadow-[0px_0px_20px_rgba(255,255,255,0.8)]'
                            />
                        </div>
                        <div className='w-full md:w-1/2 p-4 flex flex-col justify-center'>
                            <h3 className='text-2xl font-semibold text-gray-200 mb-4'>{project.title}</h3>
                            <p className='text-gray-300 mb-4'>{project.description}</p>
                            <div className='flex space-x-4'>
                                <a href={project.links.site}
                                    className='px-4 py-3 bg-emerald-400 text-gray-900 rounded-lg hover:bg-slate-400
                                    hover:scale-105 transition-transform 
                                        transition duration-300'>
                                    View Site
                                </a>
                                <a href={project.links.github}
                                    className='px-4 py-2 bg-slate-600 text-gray-200 rounded-lg hover:bg-emerald-400
                                        transition duration-300 hover:scale-105 transition-transform '>
                                    <AiOutlineGithub size={30} />
                                </a>

                            </div>

                        </div>

                    </div>
                </Reveal>
            ))}

        </div>
    )
}

export default ProjectsSection