import Header from "./components/Header";
import "./App.css";
import Carousel from "./components/Carousel";
import { BrowserRouter as Router } from "react-router-dom";
import Table from "./components/Table";
import React, { useState, useEffect } from "react";
import DummyButton from "./components/DummyButton";
import ChatAssist from "./components/ChatAssist";

export const DataContext = React.createContext();

function App() {
  const [data, setData] = useState([]);
  const [program, setProgram] = useState("");

  var fetchurl = "";
  const getData = (program) => {
    fetchurl =
      program === "btech"
        ? "data/btech.json"
        : program === "mtech"
        ? "data/mtech.json"
        : "data/mba.json";

    fetch(fetchurl, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (myJson) {
        setProgram(program);
        setData(myJson);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="App">
      <DataContext.Provider value={data}>
        <Router>
          <Header dataHandler={getData} />
          <Carousel />
          <Table />
          {/* <DummyButton /> */}
          <ChatAssist />
        </Router>
      </DataContext.Provider>
    </div>
  );
}

export default App;
