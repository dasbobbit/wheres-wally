import React from "react"
import HomeLevel from ""
import { Link } from "react-router-dom"

const Home = ({ levelsData }) => {
	console.log("-------------------HOME-------------------")
	console.log(levelsData)
	
	return (
		<Link to="/game">
			<div>
				Home
			</div>

		</Link>
	)
}

export default Home