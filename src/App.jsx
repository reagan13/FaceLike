import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Scan from "./pages/Scan";
import Analysis from "./pages/Analysis";
import FloatingButtons from "./components/FloatingButtons";
import Capture from "./modal/Capture";
import RevealResultsDemo from "./pages/RevealResultDemo";
import Messenger from "./pages/Messenger";
const App = () => {
	return (
		<Router>
			<FloatingButtons />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/scan" element={<Scan />} />
				<Route path="/scan/capture" element={<Capture />} />
				<Route path="/results" element={<RevealResultsDemo />} />
				<Route path="/analysis" element={<Analysis />} />
				<Route path="/messenger" element={<Messenger />} />
			</Routes>
		</Router>
	);
};

export default App;
