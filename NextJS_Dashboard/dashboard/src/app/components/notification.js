import Link from "next/link";
import styles from "../styles.css"
import {HiMagnifyingGlass} from 'react-icons/hi2'
import {HiBell} from 'react-icons/hi'


export default function Notification() {
  return (
  // <div className="flex w-1920 h-120 bg-indigo-950 justify-center items-center gap-x-8 h-20">
  //   <div className="flex items-center"> {/* Wrap input and icon in a flex container */}
  //       <HiMagnifyingGlass size={20} className="text-white mx-2" /> {/* Icon */}
  //       <input
  //         type="text"
  //         placeholder="Search here"
  //         className="w-491 h-68 text-s rounded-full bg-blue-950 focus:outline-none text-white" // Add text-white to match icon color
  //       />
  //     </div>
  //     {/* <input
  //     type="text"
  //     placeholder="Search"
  //     className="my-4 p-2 rounded-full bg-blue-950 focus:outline-none"
  //     /> */}
  //     <Link href='/about' className={styles['underlined-link']}>
  //       OTHER MENUS
  //     </Link>
  //     <Link href='/notification'><HiBell size={28}/></Link>
  //     <Link href='/notification'></Link>
  //     <Link href='/progress'></Link>
  //     <Link href='/database'></Link>
  //     <select
  //     className="bg-purple-500 w-5px text-white p-2 rounded-full"
  //     >
  //     <option value="Hindi">
  //       {/* <span className="flag-icon">
          
  //       </span> */}
  //       Hindi
  //     </option>
  //     <option value="English" selected>English
  //     </option>
  //     <option value="Marathi">Marathi</option>
  //   </select>
  // </div>
  
  <div className="navbar flex w-1920 h-120 bg-inherit justify-center items-center gap-x-8 h-20">
    <svg xmlns="C:/xampp/htdocs/dashboard/ourwebsites/myProjects/NextJS_Dashboard/dashboard/src/app/assets/search_icon.svg"></svg>
    <input
        type="text"
        placeholder="Search"
        className="search-bar my-4 p-2 rounded-full bg-blue-950 focus:outline-none"
    />
    <div className="flex w-1 h-8 justify-center items-center bg-slate-400">

    </div>
  </div>
  );
}