// DataContext.js
import React, { createContext, useState, useEffect } from 'react';
import { getFirestore, collection, getDocs } from 'firebase/firestore';

// Create the DataContext
export const DataContext = createContext();

// DataProvider component that provides the slidesData state
export const DataProvider = ({ children }) => {
  const [slidesData, setSlidesData] = useState([]);

  useEffect(() => {
    // Fetch data from Firestore
    const fetchSlidesData = async () => {
      try {
        const db = getFirestore();
        const querySnapshot = await getDocs(collection(db, 'Sections'));
        const slidesList = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setSlidesData(slidesList);
      } catch (error) {
        console.error('Error fetching slides data from Firestore:', error);
      }
    };

    fetchSlidesData();
  }, []);

  return (
    <DataContext.Provider value={{ slidesData }}>
      {children}
    </DataContext.Provider>
  );
};
