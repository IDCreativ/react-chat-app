import React from "react";
import { NavLink } from "react-router-dom";
import { Navbar, Nav  } from "react-bootstrap";

import { useUserAuth } from "../context/UserAuthContext";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {

	const { user } = useUserAuth();

    return (
        <Navbar
			id="footer"
			fixed="bottom"
			variant="light"
            expand={false}
			className="d-flex justify-content-center align-items-center"
		>
			<Nav className="d-flex flex-row align-items-center gap-5">
				<Nav.Link
					as={NavLink}
					to="/home"
					className="p-0"
				>
					<FontAwesomeIcon
						icon={["fad", "home"]}
						className=""
					/>
				</Nav.Link>
				{user && (
					<>
						<Nav.Link
							as={NavLink}
							to="/chat"
							className="p-0"
						>
							<FontAwesomeIcon
								icon={["fad", "comments"]}
								className=""
							/>
						</Nav.Link>
						<Nav.Link
							as={NavLink}
							to="/about"
							className="p-0"
						>
							<FontAwesomeIcon
								icon={["fad", "user"]}
								className=""
							/>
						</Nav.Link>
					</>
				)}
				
			</Nav>
		</Navbar>
    )
}

export default Footer