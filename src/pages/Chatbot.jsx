import React, { useState } from "react";

import profilepic from "../assets/images/profilepic.png";


const Chatbot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        { text: "Hello! How can I assist you today?", sender: "bot" }
    ]);
    const [input, setInput] = useState("");
    const toggleChat = () => setIsOpen(!isOpen);

    // Function to fetch response from Together API
    const fetchBotResponse = async (userMessage) => {
        const API_KEY = import.meta.env.VITE_TOGETHER_API_KEY;  
        const API_URL = "https://api.together.xyz/v1/chat/completions";

        const resumeData = {
            name: "Kavya",
            workExperience: "Graduate Engineer Trainee at Vodafone Idea Limited (2021 - 2023), (1.5 years)",
            skills: ["React.js", "JavaScript", "Tailwind CSS", "Node.js", "MongoDB","Express.js","Bootstrap","CSS","HTML"],
            education: ["B.Tech in Information Technology from SKIT, Jaipur"],
            location:["Jaipur, Rajasthan"],
            certifications: ["MERN Stack Course - WsCube Tech", "Azure Fundamentals Certification"],
            contact: { email: "kavyapash25@gmail.com", phone: "+91 6377358554" }
        };

        const requestBody = {
            model: "mistralai/Mistral-7B-Instruct-v0.1",
            messages: [
                { role: "system", content: "You are an AI assistant that provides details about Kavya's resume when asked." },
                { role: "system", content: `Resume Data: ${JSON.stringify(resumeData)}` },
                { role: "user", content: userMessage }
            ]
        };

        try {
            const response = await fetch(API_URL, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${API_KEY}`
                },
                body: JSON.stringify(requestBody)
            });

            const data = await response.json();

            if (data.choices && data.choices.length > 0 && data.choices[0].message) {
                return data.choices[0].message.content;
            } else {
                console.error("Invalid API response:", data);
                return "I'm sorry, but I couldn't fetch a response.";
            }
        } catch (error) {
            console.error("Error fetching chatbot response:", error);
            return "Sorry, I'm unable to fetch information right now.";
        }
    };

    const handleSendMessage = async () => {
        if (input.trim() === "") return;
        const userMessage = { text: input, sender: "user" };
        setMessages((prev) => [...prev, userMessage]);
        setInput(""); 
        const botReplyText = await fetchBotResponse(input);
        const botReply = { text: botReplyText, sender: "bot" };
        setMessages((prev) => [...prev, botReply]);
    };
    const handleKeyPress = (e) => {
        if (e.key === "Enter") {
            handleSendMessage();
        }
    };

    return (
        <div className="fixed bottom-10 right-7 flex flex-col items-end z-50">
            {isOpen && (
                <div className="w-80 bg-gray-400 text-white p-6 rounded-lg cursor-auto shadow-lg border border-black animate-fadeIn fixed bottom-20 right-6">
                    <div className="h-64 overflow-y-auto mb-2 p-2 border border-gray-700 rounded scrollbar-thin scrollbar-thumb-gray-700">
                        {messages.map((msg, index) => (
                            <div
                                key={index}
                                className={`p-4 my-1 rounded w-fit max-w-[80%] ${msg.sender === "user"
                                    ? "bg-white !p-1 !mr-1 border border-gray-300 shadow-md text-gray-900 !ml-auto text-right self-end"
                                    : "bg-gray-700 !p-1 !my-2 !ml-1 text-white mr-auto text-left self-start"
                                    }`}
                            >
                                {msg.text}
                            </div>
                        ))}
                    </div>
                    <div className="flex">
                        <input
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyDown={handleKeyPress}
                            placeholder="Type a message..."
                            autoFocus

                            className="flex-1 p-2 rounded-l bg-black text-white border border-gray-700 
               focus:outline-none focus:ring-2 focus:ring-green-400 cursor-auto"
                        />
                        <button
                            onClick={handleSendMessage}
                            className="!p-2 bg-green-800 hover:bg-green-400 rounded-r"
                        >
                            Send
                        </button>
                    </div>
                </div>
            )}
            <div className="relative">
                {!isOpen && (
                    <div className="absolute -left-17 -top-26 transform -translate-y-1/2 bg-emerald-300 text-black border border-white  text-sm px-3 py-1 rounded-lg shadow-lg md:block">
                        Hello...!!
                    </div>
                )}
                <button
                    onClick={toggleChat}
                    className={`hover:bg-purple-500 text-white p-4 rounded-full  shadow-lg fixed bottom-20 right-25 flex items-center justify-center transition-all animate-bounce ${isOpen ? "bottom-4 right-87" : "right-6"
                        }`}
                >
                    <img
                        src={profilepic}
                        alt="John Doe"
                        className="w-20 h-20 relative z-10 object-cover rounded-full shadow-[0_0_24px_rgba(255,255,255,0.9)]"
                    />
                </button>

            </div>
        </div>
    );
};

export default Chatbot;
