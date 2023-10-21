import React, {useEffect, useState} from "react";
import axios from 'axios';
import Spinner from '../components/Spinner';
import {Link} from 'react-router-dom';
import {AiOutlineEdit} from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineAddBox, MdOutlineDelete} from 'react-icons/md';
import BooksTable from "../components/home/BooksTable";
import BooksCard from "../components/home/BooksCard";
import filterInfluencer from '../assets/img/filterInfluencerEdited.png';
import LeftPanel from "../components/LeftPanel";
import ChatWindow from "../components/ChatWindow";
import PromptWindow from "../components/PromptWindow";

const Home = () =>{
/* 
    const [sponsors, setSponsors] = useState([]);
    const [loading, setLoading] = useState(false);
    const [showType, setShowType] = useState('table');
    useEffect(()=>{
        setLoading(true);
        axios
        .get('/sponsor')
        .then((response)=>{
            setSponsors(response.data.data);
            setLoading(false);
        })
        .catch((error)=>{
            console.log(error);
            setLoading(false);
        });
    }, []);
 */

//--------------------------------MOCK INTERVIEW VARIABLES------------------------------------------------------------

    const [chatHistory, setChatHistory] = useState([]);

    const handleQuerySubmit = (prompt) => {
        // Add the user's query to the chat history
        setChatHistory((prevChatHistory) => [...prevChatHistory, prompt]);
    
        // Perform some processing on the query and generate a response
        const response = generateResponse(prompt);
    
        // Add the response to the chat history
        setChatHistory((prevChatHistory) => [...prevChatHistory, response]);
      };

      const generateResponse = (prompt) => {
        // Replace this with your logic to generate a response
        return `You entered: ${prompt}`;
      };

    return(
    <>
    <div className="overflow-hidden w-full h-full relative flex z-0">
    <LeftPanel/>
        <div className="flex flex-wrap w-screen">
        <ChatWindow />
        <PromptWindow onQuerySubmit={handleQuerySubmit}/>
        </div>
    </div>
    </>
    )
}

export default Home
