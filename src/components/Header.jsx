import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
	return (
		<>
			<nav>
				<ul
					style={{
						display: "flex",
						justifyContent: "space-around",
						listStyle: "none",
					}}>
					<li>
						<Link to="/">홈</Link>
					</li>
					<li>
						{/* 링크를 이용하면 깜빡임이 적어진다. */}
						<Link to="/profile">Link를 이용한 프로파일로 이동</Link>
					</li>
					<li>
						{/* 링크를 이용하면 깜빡임이 적어진다. */}
						<Link to="/board">Link를 이용한 게시판으로 이동</Link>
					</li>
				</ul>
			</nav>
		</>
	);
}
