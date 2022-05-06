import React from "react"
import planet from "../images/planet.png"

export default function Nav() {
    return (
        <nav>
          <img className="planet" src={planet} alt="" />
          <p>my travel journal.</p>
        </nav>
    )
}