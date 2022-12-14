import { Link, Route, Routes } from "react-router-dom";
import "./App.css";
import Board from "./components/Board";
import Header from "./components/Header";
import Profile from "./components/Profile";

function App() {
	return (
		<div className="App">
			<Header />
			{/* 라우츠와 라우터는 한 묶음!! 같이 사용해야 한다. */}
			<Routes>
				{/* path 주소설정 element 보여줄 컨텐츠 */}
				<Route path="/profile" element={<Profile />} />
				<Route path="/board" element={<Board />} />
			</Routes>
		</div>
	);
}

export default App;
