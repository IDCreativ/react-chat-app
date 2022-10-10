import React, { useState, useEffect } from "react";

import { useUserAuth } from "../context/UserAuthContext";
import { db } from "../firebase";
import {
	collection,
	query,
	onSnapshot,
    orderBy
} from "firebase/firestore";

// Framer Motion
import { motion } from "framer-motion";

import SendMessage from "../components/SendMessage";
import ScrollToBottom from 'react-scroll-to-bottom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Chat = () => {
	const { user } = useUserAuth();

	const [messages, setMessages] = useState([]);
    const messagesCollection = collection(db, "messages");


	useEffect(() => {
		const q = query(collection(db, "messages"), orderBy("createdAt"));
		const unsubscribe = onSnapshot(q, (querySnapshot) => {
			const messages = [];
			const unsubcribed = querySnapshot.forEach((doc) => {
				messages.push(doc.data());
			});
			setMessages(messages);
		});
        return () => {
            unsubscribe();
        }
	}, []);

	return (
		<>
            <motion.div
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                exit={{ x: window.innerWidth, transition: { duration: 0.3 } }}
            >
                <main>
                    {user && (
                        <>
                            <div
                                className="header-chat"
                            >
                                <h4
                                    className="text-start"
                                >
                                    Questions/Réponses
                                </h4>
                                <FontAwesomeIcon
                                    icon={["fad", "comments"]}
                                    className="fa-2x text-primary"
                                />
                            </div>
                            <ScrollToBottom
                                className="chat-container"
                            >
                                {messages.map(({ uid, text, photoURL, displayName }, index) => (
                                    <div key={index} className={uid === user.uid ? "message-wrapper end" : "message-wrapper start"}>
                                        <div className="avatar-wrapper">
                                            <img
                                                referrerPolicy="no-referrer"
                                                src={photoURL}
                                                alt="Avatar"
                                            />
                                        </div>
                                        <div className="full-message">
                                            <div className="username">
                                                {uid === user.uid ? "Vous" : displayName}
                                            </div>
                                            <div className="message shadow-perso">
                                                {text}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </ScrollToBottom>
                            <SendMessage />
                        </>
                    )}
                </main>
            </motion.div>
		</>
	);
};

export default Chat;
