import React from "react"
import imageBattle from "../images/level1.jpg"

const Game = () => {

    const handleClick = (e) => {
        console.log(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
        console.log(e);
        if (e.nativeEvent.offsetX >= 1387 && e.nativeEvent.offsetX <= 1422 
            && e.nativeEvent.offsetY >= 465 && e.nativeEvent.offsetY <= 501) {
                console.log("clicked wallo")
        } else {
            console.log("NOT clicked wallo")
        }
    }

    return (
        <div>
            <img onClick={handleClick} src={imageBattle} alt="waldly" />
        </div>
    )
}

export default Game