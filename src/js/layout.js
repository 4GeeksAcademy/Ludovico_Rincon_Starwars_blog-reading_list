import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import { Footer } from "./component/footer";
import { Home } from "./views/home";
import injectContext from "./store/appContext";
import { Navbar } from "./component/navbar";
import { CharacterView } from "./views/characterview";
import { PlanetView } from "./views/planetview";
import { Vehicleview } from "./views/vehicleview";

const Layout = () => {

	const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/characterview/:theid" element={<CharacterView />} />
						<Route path="/planetview/:theid" element={<PlanetView />} />
						<Route path="/Vehicleview/:theid" element={<Vehicleview />}></Route>
						<Route path="*" element={<h1>Not found!</h1>} />
					</Routes>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
