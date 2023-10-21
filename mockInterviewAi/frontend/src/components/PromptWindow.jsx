import { Link, useHref } from "react-router-dom";
import React, {useEffect, useState} from "react";

const PromptWindow = ({onQuerySubmit}) => {

    const [prompt, setPrompt] = useState('');

    const handleSubmit = (e) => {
        const data = {
            prompt, 
        }
        alert(data.prompt);
        
        e.preventDefault();
        onQuerySubmit(data);
        console.log(data.prompt);
        setPrompt('');
      };

    return(
        <>
            <div className="flex justify-center items-center border-t-[1px] border-black dark:bg-gray-500 w-full h-40">
                <div className="flex min-w-[10cm] rounded-lg justify-center items-center bg-white">
                    <form onSubmit={handleSubmit} className="flex flex-grow p-1">
                        <textarea 
                            id="prompt-textarea" 
                            className="flex flex-grow justify-center items-center outline-none rounded-lg resize-none p-2 w-3/4" 
                            type="text" 
                            placeholder="Send a message" 
                            value={prompt} 
                            onChange={(e)=>{setPrompt(e.target.value)}}>
                        </textarea>
                        <button 
                            id="prompt-btn" 
                            disabled={!prompt} 
                            className="flex mr-2"
                            type="submit">
                                <img 
                                    src="../icons/send-48.png" 
                                    style={{width: "26px"}}/>
                        </button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default PromptWindow;