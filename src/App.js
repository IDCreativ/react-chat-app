import React from "react";
import { useLocation } from "react-router";

import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import AnimatedPages from "./components/AnimatedPages";

import { UserAuthContextProvider } from "./context/UserAuthContext";

// Toastify library
import { ToastContainer } from "react-toastify";

// Fontawesome library
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fal } from "@fortawesome/pro-light-svg-icons";
import { fad } from "@fortawesome/pro-duotone-svg-icons";
import { far } from "@fortawesome/pro-regular-svg-icons";

library.add(fab, fas, fal, fad, far);

const App = () => {

	const location = useLocation();
	console.log(location.pathname);

	return (
		<>
			<UserAuthContextProvider>
				<Navigation />
				<AnimatedPages />
				{location.pathname !=="/chat" && <Footer />}
				<ToastContainer
					position="bottom-center"
					autoClose={2000}
					hideProgressBar={false}
					newestOnTop={false}
					closeOnClick
					rtl={false}
					pauseOnFocusLoss
					draggable
					pauseOnHover
				/>
			</UserAuthContextProvider>
		</>
	);
};

export default App;
