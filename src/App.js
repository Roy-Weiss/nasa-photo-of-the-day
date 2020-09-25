import React, {useState, useEffect} from "react";
import "./App.css";
import axios from "axios"
import Card from "./Card"


function App() {
  const [nasaData, setNasaData] = useState([])
  useEffect(() => {
    axios
    .get(`https://api.nasa.gov/planetary/apod?api_key=dJzDggM75pbT24RjF0Qf3fYqvjezw1ishFbfpa6p&date=2020-01-01`)
    .then(response => {
      console.log(response.data)
      setNasaData(response.data)
    })
    .catch(error => {
      console.log("sorry no image", error)
    })

  })
  return (
    <div className="container">
      {nasaData.map((image) => {
        return <Card key={image.id} imgURL={image.url} title = {image.title}/>
      })}
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p>
    </div>
  );
}

export default App;
