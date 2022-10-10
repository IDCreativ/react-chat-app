import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";

// Pages
import ProtectedRoute from "../components/ProtectedRoute";
import Home from "../pages/Home";
import About from "../pages/About";

// Framer Motion
import { AnimatePresence } from "framer-motion";
import Signup from "../pages/Signup";
import Login from "../pages/Login";
import Chat from "../pages/Chat";

export default function AnimatedPages() {
	const location = useLocation();

	return (
		<AnimatePresence>
			<Routes location={location} key={location.pathname}>
				<Route path="/signup" element={<Signup />} />
				<Route path="/login" element={<Login />} />
				<Route
					path="/chat"
					element={
						<ProtectedRoute>
							<Chat />
						</ProtectedRoute>
					}
				/>
				<Route
					path="/about"
					element={
						<ProtectedRoute>
							<About />
						</ProtectedRoute>
					}
				/>
				<Route path="/home" element={<Home />} />
				<Route path="/" element={<Home />} />
			</Routes>
		</AnimatePresence>
	);
}
