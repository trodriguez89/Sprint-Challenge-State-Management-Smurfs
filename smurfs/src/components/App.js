import React, { Component } from "react";
import "./App.css";
import styled from "styled-components";

import SmurfList from "./SmurfList";
import SmurfForm from "./SmurfForm";

const Container = styled.div`
  border: 2px solid black;
  background-color: #62cdfd;
`

class App extends Component {
  render() {
    return (
      <div className="App">
        <Container>
        <h1>SMURFS! 2.0 W/ Redux</h1>
        </Container>
        <SmurfForm />
        <SmurfList />
      </div>
    );
  }
}

export default App;
