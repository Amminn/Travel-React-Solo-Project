import React from "react"
import gps from "../images/GPS.png"

export default function Place(props) {
  // let {title, location, googleMapsUrl, startDate, endDate, description, imageUrl} = props
  console.log(props.item.imageUrl)
    return (
      <article className="content__place">
        <div className="content__place-image">
          <img src={props.item.imageUrl} alt="" />
        </div>

        <div className="content__place-info">
          <div className="content__place-info-location">
            <img src={gps} alt="" />
            <p>{props.item.location}</p>
            <a href={props.item.googleMapsUrl} target="_blank">View on Google Maps</a>
          </div>
          <h2 className="place">{props.item.title}</h2>
          <p className="date">{props.item.startDate} - {props.item.endDate}</p>
          <p className="description">{props.item.description}</p>
        </div>
      </article>
    )
}