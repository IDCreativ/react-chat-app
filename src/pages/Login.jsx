import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form, Alert, Container, Row, Col, Card } from "react-bootstrap";
import { Button } from "react-bootstrap";
import GoogleButton from "react-google-button";
import { useUserAuth } from "../context/UserAuthContext";

// Framer Motion
import { motion } from "framer-motion";

const Login = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState("");
	const { logIn, googleSignIn } = useUserAuth();
	const navigate = useNavigate();

	const handleSubmit = async (e) => {
		e.preventDefault();
		setError("");
		try {
			await logIn(email, password);
			navigate("/home");
		} catch (err) {
			setError(err.message);
		}
	};

    const handleGoogleSignIn = async (e) => {
        e.preventDefault();
        try {
            await googleSignIn();
            navigate("/home");
        } catch (error) {
            console.log(error.message);
        }
    };

	return (
		<motion.div
			initial={{ width: 0 }}
			animate={{ width: "100%" }}
			exit={{ x: window.innerWidth, transition: { duration: 0.3 } }}
		>
            <main>
                <Container>
                    <Row>
                        <Col>
                            <h2 className="mb-3">Je me connecte</h2>
                            {error && <Alert variant="danger">{error}</Alert>}
                            <Card>
                                <Card.Body>
                                    <Form onSubmit={handleSubmit}>
                                        <Form.Group className="mb-3" controlId="formBasicEmail">
                                            <Form.Control
                                                type="email"
                                                placeholder="Adresse e-mail"
                                                onChange={(e) => setEmail(e.target.value)}
                                            />
                                        </Form.Group>

                                        <Form.Group className="mb-3" controlId="formBasicPassword">
                                            <Form.Control
                                                type="password"
                                                placeholder="Mot de passe"
                                                onChange={(e) => setPassword(e.target.value)}
                                            />
                                        </Form.Group>

                                        <div className="d-grid gap-2">
                                            <Button variant="primary" type="Submit">
                                                Je me connecte
                                            </Button>
                                        </div>
                                    </Form>
                                </Card.Body>
                            </Card>
                            <hr />
                            <div>
                                <GoogleButton
                                    className="g-btn w-100"
                                    type="dark"
                                    onClick={handleGoogleSignIn}
                                />
                            </div>
                            <div className="p-4 box mt-3 text-center">
                                Pas encore de compte ? <Link to="/signup">Créer un compte</Link>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </main>
		</motion.div>
	);
};

export default Login;
