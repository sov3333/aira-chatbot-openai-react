import React, { useEffect, useState } from 'react';
import { db } from '../firebase';
import { doc, getDoc } from 'firebase/firestore'

const Stats = () => {
    const [countCSV, setCountCSV] = useState();
    const [countPNG, setCountPNG] = useState();
    const docRef = doc(db, "statistics", "downloads");

    useEffect(() => {

        const getStats = async () => {
            const docSnap = await getDoc(docRef);
        
            if (docSnap.exists()) {
            console.log("Document data:", docSnap.data());
            } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
            }

            setCountCSV(docSnap.data().countCSV);
            setCountPNG(docSnap.data().countPNG);
        }
        getStats();
    }, []);

    return (
        <div className="container">
            <h1>Statistics</h1>
            <h2>Download stats</h2>
            <div className="container">
                <p>CSV Downloaded: {countCSV}</p>
                <p>PNG Downloaded: {countPNG}</p>
            </div>
        </div>
    )
};

export default Stats;