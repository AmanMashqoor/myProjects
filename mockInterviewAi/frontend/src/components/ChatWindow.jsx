import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import PromptWindow from "./PromptWindow";

const ChatWindow = () => {
    const [chat, setChat] = useState('');
    return (
        <>
            <header className="sticky top-0 z-10 w-full dark:bg-gray-800">
                <div className="relative z-20 flex min-h-[60px] flex-wrap items-center justify-center gap-3 border-b border-black/10 bg-white p-2 text-gray-500 dark:border-gray-900/50 dark:bg-gray-500 dark:text-white">--GPT 3.5--</div>
            </header>
            <div className="flex justify-center items-center bg-slate-500 w-full h-3/4">
                {/* <div className="chat-window">
                    {chatHistory.map((message, index) => (
                        <div key={index} className="chat-message">
                            {message}
                        </div>
                    ))}
                </div> */}
            </div>
        </>
    )
}

export default ChatWindow;