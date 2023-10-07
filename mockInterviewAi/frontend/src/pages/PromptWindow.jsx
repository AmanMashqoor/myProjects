import { Link } from "react-router-dom";
import React, {useEffect, useState} from "react";

const PromptWindow = () => {

    const [prompt, setPrompt] = useState('');

    return(
        <>
            <div className="flex flex-wrap justify-center items-center bg-green-400 w-full h-[5cm]">
                {/* <div className="flex "></div> */}
                {/* <form className="stretch mx-2 flex flex-row gap-3 last:mb-2 md:mx-4 md:last:mb-6 lg:mx-auto lg:max-w-2xl xl:max-w-3xl"> */}
                    {/* <div className="stretch mx-2 flex flex-row gap-3 last:mb-2 md:mx-4 md:last:mb-6 lg:mx-auto lg:max-w-2xl xl:max-w-3xl"> */}
                        {/* <div>
                            <div className="h-full flex ml-1 md:w-full md:m-auto md:mb-4 gap-0 md:gap-2 justify-center">
                                <button className="bg-white relative rounded-lg">Regenerate</button>
                            </div>
                        </div> */}
                        <div className="flex w-full items-center">
                            <textarea id="textarea-prompt" className="mx-[7cm] w-full rounded-lg resize-none border-0 pr-10 focus:ring-0 focus-visible:ring-0 md:py-1 md:pr-12 gizmo:md:py-3.5 pl-3 md:pl-4" type="text" placeholder="Send a message" /* value={prompt} onChange={(e)=> setPrompt(e.target.value)} */>
                            </textarea>
                        </div>
                    {/* </div> */}
                {/* </form> */}
                {/* <div className="relative py-2 text-center text-xs text-gray-600 dark:text-gray-300 md:px-[60px]">
                    <span className="text-xs text-white">Free Research Preview. ChatGPT may produce inaccurate information about people, places, or facts. ChatGPT September 25 Version</span>
                </div> */}
            </div>
        </>
    )
}

export default PromptWindow;