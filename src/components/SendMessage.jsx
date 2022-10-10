import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { addDoc, serverTimestamp, collection } from "firebase/firestore";
import React, { useState } from "react";
import { Button, Form, Navbar } from "react-bootstrap";
import { auth, db } from "../firebase";

const SendMessage = () => {

    const [input, setInput] = useState("");

    const sendMessage = async (e) => {   
        e.preventDefault();
        if (input === "") {
            alert("Veuillez entrer un message");
            return;
        }
        const {uid, displayName, photoURL} = auth.currentUser;
        await addDoc(collection(db, "messages"), {
            text: input,
            uid,
            displayName,
            photoURL,
            createdAt: serverTimestamp()
        });
        setInput("");  
    };

	return (
        <Navbar
            id="send-message"
            fixed="bottom"
            variant="light"
            expand={false}
            className="d-flex justify-content-center align-items-center"
        >
            <Form
                onSubmit={sendMessage}
                className="d-flex justify-content-between align-items-center w-100"
            >
                <input
                    type="text"
                    placeholder="Aa ..."
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    className="sendmessage rounded-pill shadow-perso-big"
                />
                <Button
                    variant="primary"
                    type="submit"
                    className="send-button shadow-perso-big rounded-circle"
                >
                    <FontAwesomeIcon
                        icon={["fas", "arrow-right"]}
                        className="text-white"
                    />
                </Button>
            </Form>
        </Navbar>
	);
};

export default SendMessage;
