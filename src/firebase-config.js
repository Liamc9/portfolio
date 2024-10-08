// Import the functions you need from the SDKs you need
      import { initializeApp } from "firebase/app";
      import { getAnalytics } from "firebase/analytics";
      import { getFirestore } from "@firebase/firestore"
      import { getAuth } from "firebase/auth";
      import { getStorage } from "firebase/storage";
      import { getFunctions } from "firebase/functions";

      // Your web app's Firebase configuration
      const firebaseConfig = {
        apiKey: "AIzaSyBizVZMLdGS3n76cP9Jp4C4UMvkLwT12Ng",
        authDomain: "portfolio-cc7d3.firebaseapp.com",
        projectId: "portfolio-cc7d3",
        storageBucket: "portfolio-cc7d3.appspot.com",
        messagingSenderId: "661219163561",
        appId: "1:661219163561:web:ad336c1adda4870b6598b8",
        measurementId: "G-M37MDBL4ZD"
      };
      
      // Initialize Firebase and Export
      const app = initializeApp(firebaseConfig);
      export const analytics = getAnalytics(app);
      export const db = getFirestore(app);
      export const auth = getAuth(app);
      export const storage = getStorage(app);
      export const functions = getFunctions(app);