import { Link } from "react-router-dom";
import React, {useEffect, useState} from "react";
import PromptWindow from "./PromptWindow";

const ChatWindow = (props) => {
    const [chat, setChat] = useState('');
    return(
        <>
            <header className="sticky top-0 z-10 w-full bg-white dark:bg-gray-800">
                <div className="relative z-20 flex min-h-[60px] flex-wrap items-center justify-center gap-3 border-b border-black/10 bg-white p-2 text-gray-500 dark:border-gray-900/50 dark:bg-gray-400 dark:text-gray-300">--GPT 3.5--</div>
            </header>
            <div className="flex justify-center items-center bg-purple-300 w-full h-3/4">
                {/* <p>Chat Window</p> */}
            </div>
        </>
    )
}

export default ChatWindow;