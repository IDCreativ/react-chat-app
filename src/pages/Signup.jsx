import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form, Alert, Card } from "react-bootstrap";
import { Button, Container, Row, Col } from "react-bootstrap";
import { useUserAuth } from "../context/UserAuthContext";
import GoogleButton from "react-google-button";

// Framer Motion
import { motion } from "framer-motion";

const Signup = () => {
	const [email, setEmail] = useState("");
	const [error, setError] = useState("");
	const [password, setPassword] = useState("");
	const { signUp, googleSignIn } = useUserAuth();
	let navigate = useNavigate();

	const handleSubmit = async (e) => {
		e.preventDefault();
		setError("");
		try {
			await signUp(email, password);
			navigate("/");
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
							<h2 className="mb-3">Je crée un compte</h2>
							{error && <Alert variant="danger">{error}</Alert>}
							<Card>
								<Card.Body>
									<Form onSubmit={handleSubmit}>
										<Form.Group className="mb-3" controlId="formBasicEmail">
											<Form.Control
												type="email"
												placeholder="Email address"
												onChange={(e) => setEmail(e.target.value)}
											/>
										</Form.Group>

										<Form.Group className="mb-3" controlId="formBasicPassword">
											<Form.Control
												type="password"
												placeholder="Password"
												onChange={(e) => setPassword(e.target.value)}
											/>
										</Form.Group>

										<div className="d-grid gap-2">
											<Button variant="primary" type="Submit">
												Je crée mon compte
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
								Vous avez déjà un compte ? <Link to="/login">Je me connecte</Link>
							</div>
                        </Col>
                    </Row>
                </Container>
			</main>
		</motion.div>
	);
};

export default Signup;
