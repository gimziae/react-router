import React from "react";
import { useParams } from "react-router-dom";
import Header from "./Header";

export default function BoardDetail() {
	const { boardID } = useParams();
	// 위와 같음 == const params = useParams().boardID;

	return (
		<>
			<Header />
			<h2>{boardID}번 게시글 입니다!</h2>
		</>
	);
}
