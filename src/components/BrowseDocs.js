import React from 'react'
import { useState } from 'react';
import { db } from "../firebase/Firebase"
import { useAuth } from "../contexts/AuthContext"



export default function BrowseDocs(props) {

    const { currentUser } = useAuth();
    const userId = currentUser.uid; 
    const [text, setText] = useState("")


    var docRef = db.collection("docs").doc(userId);

docRef.get().then((doc) => {
        if (doc.exists) {
            setText(doc.data("text").text);
        } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
        }
    }).catch((error) => {
        console.log("Error getting document:", error);
    });

        return (
            <div>
                { text }
            </div>
        )
    }
