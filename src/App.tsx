import Players from "./components/Players";
import About from "./components/About";
import Combines from "./components/Combines";
import Comparisons from "./components/Comparisons";
import Layout from "./Layout";
import { BrowserRouter, Routes, Route } from "react-router";
function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route path="about" element={<About />} />
					<Route path="players" element={<Players />} />
					<Route path="combines" element={<Combines />} />
					<Route path="comparisons" element={<Comparisons />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
