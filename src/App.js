import { Link, Route, Routes } from "react-router-dom";
import "./App.css";
import Board from "./components/Board";
import Header from "./components/Header";
import NotFound from "./components/NotFound";
import Profile from "./components/Profile";

function App() {
	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<Header />} />
				<Route path="/profile" element={<Profile />} />
				<Route path="/board" element={<Board />} />
				<Route path="*" element={<NotFound />} /> {/* 주소 예외 처리 */}
			</Routes>
		</div>
	);
}

export default App;
