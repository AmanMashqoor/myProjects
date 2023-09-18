'use client'

// components/Sidebar.js
import React, { useState } from 'react';
import { RiMenuUnfoldLine, RiMenuFoldLine } from 'react-icons/ri'; // You can choose your icons

export default function SideBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      <div className="sidebar-header">
        <button onClick={toggleSidebar}>
          {isOpen ? <RiMenuFoldLine /> : <RiMenuUnfoldLine />}
        </button>
      </div>
      <div className="sidebar-content">
        {/* Your menu items go here */}
      </div>
    </div>
  );
};
