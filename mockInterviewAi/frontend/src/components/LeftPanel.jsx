import { Link } from "react-router-dom";
import React, {useEffect, useState} from "react";

const LeftPanel = () => {
    return(
        <>
        <div className="flex-shrink-0 overflow-x-hidden">
            <div className="flex justify-center items-center border-[1px] border-black w-[260px] h-screen">
                <nav className="flex h-full w-full flex-col p-2">
                    <div className="mb-1 flex flex-row gap-2 border-2 border-gray-600 rounded-lg">
                        <a className="flex px-3 min-h-[44px] py-1 items-center gap-3 transition-colors duration-200 dark:text-white cursor-pointer text-sm rounded-md border dark:border-white/20 gizmo:min-h-0 hover:bg-gray-500/10 h-11 gizmo:h-10 gizmo:rounded-lg gizmo:border-[rgba(0,0,0,0.1)] bg-white dark:bg-transparent flex-grow overflow-hidden">
                            {/* <svg stroke="black" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" className="icon-sm shrink-0" height="1em" width="1em" xmlns="https://icons8.com/icon/3220/plus">
                                <line x1="12" y1="5" x2="12" y2="19"></line>
                                <line x1="5" y1="12" x2="19" y2="12"></line>
                            </svg> */}
                            <span className="truncate text-black">New Chat</span>
                        </a>
                    </div>
                </nav>
            </div>
        </div>
        </>
    )
}

export default LeftPanel;