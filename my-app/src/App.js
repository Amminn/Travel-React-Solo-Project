import React from "react"
import data from "./Data.js"
import Nav from "./component/Nav"
import Place from "./component/Place"

export default function App() {
  let places = data.map(item => {
    return (
      <Place 
        key={item.id}
        item={item}
      />
    )
  })

  return (
    <div className="app">
        <Nav />
      <main className="content">
        {places}
      </main>
    </div>
  )
}