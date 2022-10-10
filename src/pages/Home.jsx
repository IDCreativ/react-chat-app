import React from "react";
import { Link } from "react-router-dom";
import { useUserAuth } from "../context/UserAuthContext";

// Framer Motion
import { motion } from "framer-motion";
import { Col, Container, Row } from "react-bootstrap";

const Home = () => {

    const { user } = useUserAuth();

	return (
        <motion.div
			initial={{ width: 0 }}
			animate={{ width: "100%" }}
			exit={{ x: window.innerWidth, transition: { duration: 0.3 } }}
		>
            <main
                className={user ? "home" : "home home--not-logged"}
            >
                <Container>
                    <Row>
                        <Col>
                            {user ? (
                                <div>
                                    <h1>Bienvenue {user.displayName}</h1>
                                </div>
                            ) : (
                                <div>
                                    <h1>Bienvenue.</h1>
                                    <p>Connectez-vous pour accéder au contenu. <Link to="/login">Je me connecte</Link></p>
                                </div>
                            )}
                        </Col>
                    </Row>
                </Container>
            </main>
        </motion.div>
    );
};

export default Home;
