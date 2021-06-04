import React from "react"
import { Link } from "react-router-dom"

const HomeLevel = ({ levelsData }) => {
	console.log("-------------------HOME-LEVEL-------------------")
	console.log(levelsData)
	
	return (
		<Link to="/game">
			<div>
				Home
			</div>

		</Link>
	)
}

export default HomeLevel