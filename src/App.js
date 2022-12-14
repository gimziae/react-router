import { Route, Routes } from "react-router-dom";
import "./App.css";
import Board from "./components/Board";
import Profile from "./components/Profile";

function App() {
	return (
		<div className="App">
			<nav>
				<a href="/">홈페이지로 이동</a> <br />
				<a href="/profile">프로필 페이지로 이동</a> <br />
				<a href="/board">게시판 페이지로 이동</a>
			</nav>
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
