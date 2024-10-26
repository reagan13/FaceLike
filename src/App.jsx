import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Scan from "./pages/Scan";
import CaptureRight from "./modal/CaptureRight";
import CaptureLeft from "./modal/CaptureLeft";
import CaptureFront from "./modal/CaptureFront";
import FloatingButtons from "./components/FloatingButtons";
import Capture from "./modal/Capture";
const App = () => {
	return (
		<Router>
			{/* <FloatingButtons /> */}
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/scan" element={<Scan />} />
				<Route path="/scan/capture" element={<Capture />} />
				<Route path="/scan/right" element={<CaptureRight />} />
				<Route path="/scan/left" element={<CaptureLeft />} />
				<Route path="/scan/front" element={<CaptureFront />} />
			</Routes>
		</Router>
	);
};

export default App;
