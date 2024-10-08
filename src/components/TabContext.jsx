// TabContext.js
import React, { createContext, useContext, useState, useEffect } from 'react';
import { DataContext } from './DataContext';

// Create the TabContext
const TabContext = createContext();

// Create a custom hook to use the TabContext
export const useTab = () => useContext(TabContext);

// TabProvider component that provides the activeTab state and setter
export const TabProvider = ({ children }) => {
  const { slidesData } = useContext(DataContext);
  const [activeTab, setActiveTab] = useState('');

  useEffect(() => {
    if (slidesData && slidesData.length > 0) {
      // Set the initial active tab to the title of the first slide
      setActiveTab(slidesData[0].title);
    }
  }, [slidesData]);

  return (
    <TabContext.Provider value={{ activeTab, setActiveTab }}>
      {children}
    </TabContext.Provider>
  );
};
