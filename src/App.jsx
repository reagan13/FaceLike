import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Scan from "./pages/Scan";
import FloatingButtons from "./components/FloatingButtons";

const App = () => {
	return (
		<Router>
			<FloatingButtons />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/scan" element={<Scan />} />
			</Routes>
		</Router>
	);
};

export default App;
