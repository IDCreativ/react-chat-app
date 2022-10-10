import React from "react";
import { NavLink } from "react-router-dom";
import { Navbar, Button } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";

import { useNavigate, useLocation } from "react-router";
import { useUserAuth } from "../context/UserAuthContext";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Navigation = () => {

	const { logOut, user } = useUserAuth();
	const navigate = useNavigate();

	const location = useLocation();
	console.log(location.pathname);

	const handleLogout = async () => {
		try {
			await logOut();
			navigate("/");
		} catch (error) {
			console.log(error.message);
		}
	};

	return (
		<Navbar
			id="navigation"
			fixed="top"
			variant="light"
			className=""
		>
			{location.pathname === "/home" ? (
				<Navbar.Brand
					className="logo mx-2 text-uppercase"
				>
					<FontAwesomeIcon
						icon={["fas", "code"]}
						className="me-2"
					/>
					Titre du site
				</Navbar.Brand>
			) : (
				<Nav
					className="me-auto"
				>
					<Nav.Link
						as={NavLink}
						to="/home"
						className="d-flex align-items-center text-uppercase p-0"
					>
						<FontAwesomeIcon
							icon={["fas", "arrow-left"]}
							className="mx-2"
						/>
						Home
					</Nav.Link>
				</Nav>
			)}
			<Nav
				className="ms-auto"
			>
				{user && (
					<>
						<Button
							variant="outline-dark"
							className="mx-2"
							onClick={handleLogout}
						>
							<FontAwesomeIcon
								icon={["fad", "sign-out-alt"]}
								className="fa-fw"
							/>
						</Button>
					</>
				)}
			</Nav>
		</Navbar>
	);
};

export default Navigation;
