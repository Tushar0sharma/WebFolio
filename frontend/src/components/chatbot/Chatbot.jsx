import React, { useEffect, useRef, useState } from 'react';
import robot from '../../assets/robot.png';
import ChatForm from './ChatForm';
import Chatmessage from './Chatmessage';
import './Chatbot.css';
import SYSTEM_PROMPT from './ChatbotConfig';

const Chatbot = () => {
    const [chathistory, setchathistory] = useState([]);
    const [showchatbot, setshowchatbot] = useState(false);
    const charbodyref = useRef();

    const generateresponse = async (history) => {
        const updatehistory = (text) => {
            setchathistory(prev => [...prev.filter(msg => msg.text !== 'Thinking...'), { role: "model", text }]);
        };

        const formattedHistory = [
            { role: "model", parts: [{ text: SYSTEM_PROMPT }] },
            ...history.map(({ role, text }) => ({
                role: role === "bot" ? "model" : "user",
                parts: [{ text }]
            }))
        ];

        try {
            const response = await fetch("https://web-folio-six.vercel.app/chat", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ contents: formattedHistory })
            });

            const data = await response.json();
            if (!data.success) throw new Error(data.error || "Unexpected error");

            const botResponse = data.response
                .replace(/\*\*(.*?)\*\*/g, "<b>$1</b>")
                .replace(/\*(.*?)\*/g, "<i>$1</i>")
                .replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2" target="_blank">$1</a>');

            updatehistory(botResponse);
        } catch (error) {
            console.error("API Error:", error);
        }
    };

    useEffect(() => {
        charbodyref.current.scrollTo({ top: charbodyref.current.scrollHeight, behavior: "smooth" });
    }, [chathistory]);

    return (
        <>
            <button onClick={() => setshowchatbot(prev => !prev)} className='chat-toggle'>
                <img src={robot} alt='' />
            </button>
            <div className={`chatpopup ${showchatbot ? 'showchatbot' : ""}`}>
                <div className='chatheader'>
                    <div className='headerinfo'>
                        <img src={robot} alt='robo' />
                        <h2 className='logotext'>ChatBot</h2>
                    </div>
                    <button onClick={() => setshowchatbot(prev => !prev)} className='but'>
                        <i className="fa-solid fa-angle-down"></i>
                    </button>
                </div>
                <div ref={charbodyref} className='chatbody'>
                    <div className='message botmessage'>
                        <img src={robot} alt='' />
                        <p className='messagetext'>
                            Hey there 👋<br /> How Can I Help You?
                        </p>
                    </div>
                    {chathistory.map((chat, index) => (
                        <Chatmessage key={index} chat={chat} />
                    ))}
                </div>
                <div className='chatfooter'>
                    <ChatForm chathistory={chathistory} setchathistory={setchathistory} generateresponse={generateresponse} />
                </div>
            </div>
        </>
    );
};

export default Chatbot;
