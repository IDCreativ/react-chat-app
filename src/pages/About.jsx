import React from "react";

import { useUserAuth } from "../context/UserAuthContext";

// Framer Motion
import { motion } from "framer-motion";
import { Col, Container, Row } from "react-bootstrap";

const About = () => {
	const { user } = useUserAuth();

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
							{user && (
								<>
									<h1>About</h1>
									<p>Hi ! Je m'appelle {user.displayName}</p>
									<p>Vous pouvez me contacter à : {user.email}</p>
								</>
							)}
						</Col>
					</Row>
				</Container>
			</main>
		</motion.div>
	);
};

export default About;
