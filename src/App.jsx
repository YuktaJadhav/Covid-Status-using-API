import { useState, useEffect } from "react";
import image from "./image.png";
import "./App.css";

function App() {
  const [cases, setCases] = useState("");
  const [recovered, setRecovered] = useState("");
  const [dead, setDead] = useState("");
  const [updated, setUpdate] = useState("");
  const [source, setSource] = useState("");
  const [rate, setRate] = useState("");

  useEffect(() => {
    fetch(
      "https://api.rootnet.in/covid19-in/unofficial/covid19india.org/statewise"
    )
      .then((response) => response.json())
      .then((result) => {
        setCases(result.data.total.confirmed);
        setRecovered(result.data.total.recovered);
        setDead(result.data.total.deaths);
        setUpdate(result.data.lastRefreshed);
        setSource(result.data.source);
        setRate(result.data.total.active);
      });
  });

  return (
    <div className="App">
      <img src={image} width="100" height="100" alt="logo" />
      <h1>India :: Covid-19 Statistics</h1>
      <div className="actualStuff">
        <div className="card">
          <label style={{ color: "blue" }}>Source</label>
          <p>{source}</p>
        </div>
        <div className="card">
          <label style={{ color: "blue" }}>Last Updated on</label>
          <p>{updated}</p>
        </div>
        <div className="card">
          <label style={{ color: "blue" }}>Total Cases</label>
          <p>{cases}</p>
        </div>
      </div>

      <div className="App_t">
        <div className="actualStuff">
          <div className="card">
            <label style={{ color: "blue" }}>Active</label>
            <p>{rate}</p>
          </div>

          <div className="card">
            <label style={{ color: "blue" }}>Recovered</label>
            <p>{recovered}</p>
          </div>
          <div className="card">
            <label style={{ color: "blue" }}>Deaths</label>
            <p>{dead}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
