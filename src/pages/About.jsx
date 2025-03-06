import React from 'react'
import project1 from "../assets/images/proj5.png";

export default function About() {
    return (
        <section id="about" className="text-white  p-8">
            <h2 className="text-6xl  font-bold mb-8">
                About <span className="text-emerald-300">Me</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="border border-white/20 rounded-lg p-6">
                    <h3 className="text-2xl font-bold mb-2">01. Background</h3>
                    <p className="text-white/50 mb-6">
                        I am a Full Stack Developer with a B.Tech in Information Technology from SKIT. Passionate about building user-friendly web applications, I specialize in React.js, Next.js, and modern web technologies. Based in Jaipur, I am eager to collaborate on innovative projects and contribute to impactful solutions.
                    </p>

                    <div className="rounded-lg p-4 mb-4 border border-white/20">
                        <code className="text-emerald-200/50">
                            const skills = [<br />
                            &nbsp;&nbsp;'JavaScript',
                            <br />
                            &nbsp;&nbsp;'React',
                            <br />
                            &nbsp;&nbsp;'Node.js',
                            <br />
                            &nbsp;&nbsp;'Tailwind css',
                            <br />
                            &nbsp;&nbsp;'Express',
                            <br />

                            ];
                        </code>
                    </div>
                </div>

                <div className="border border-white/20 rounded-lg p-6">
                    <h3 className="text-2xl font-bold mb-2">02. Experience</h3>
                    <p className="text-white/50">
                        I worked at Vodafone Idea for 1.5 years, gaining hands-on experience in the telecom industry. During this time, I developed technical expertise in networking, troubleshooting, and system operations, which strengthened my problem-solving skills and technical acumen.
                    </p>
                    <div className="mt-4 relative border border-white/20 rounded-lg p-4 h-[220px] overflow-hidden">
                        <img
                            src={project1}
                            alt="Project 1"
                            className="absolute inset-0 w-full h-full object-cover"
                        />
                    </div>
                </div>

                <div className="border border-white/20 rounded-lg p-6">
                    <h3 className="text-2xl font-bold mb-2">03. Skills</h3>
                    <p className="text-white/50 mb-4">
                        I'm proficient in a wide range of technologies and constantly
                        expanding my skill set to stay at the forefront of web development.
                    </p>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-center">
                        {[
                            "React.js",
                            "Tailwind CSS",
                            "Node.js",
                            "Express.js",
                            "JavaScript",
                            "Bootstrap",
                            "HTML/CSS",
                            "Mongodb",
                            "Github",
                            "Netlify",
                            "Vercel"
                        ].map((skill, index) => (
                            <div key={index} className="border border-white/20 rounded-lg px-4 py-2">
                                <h4 className="text-white/80 font-medium">{skill}</h4>
                            </div>
                        ))}
                    </div>

                </div>
            </div>


        </section>
    )
}
