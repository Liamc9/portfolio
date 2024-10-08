import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { UserCircleIcon } from '@heroicons/react/solid'; // Adjust this import based on your icon library

// Popover Component
const Popover = ({ trigger, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const popoverRef = useRef();
  const triggerRef = useRef();

  const handleTogglePopover = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popoverRef.current && !popoverRef.current.contains(event.target) &&
          triggerRef.current && !triggerRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="relative inline-block">
      <div
        ref={triggerRef}
        onClick={handleTogglePopover}
        className="cursor-pointer inline-flex items-center"
      >
        {trigger}
      </div>
      {isOpen && (
        <div
          ref={popoverRef}
          className="absolute left-1/2 transform -translate-x-1/2 mt-2 w-48 bg-white rounded-md shadow-lg py-2 z-50"
        >
          {children}
        </div>
      )}
    </div>
  );
};

export default Popover

