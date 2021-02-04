import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "./components/Button";
import "./App.css";

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      name: "",
      capital: "",
      flag: "",
      population: "",
      region: ""
    }
  }

  render() {
    return (
      <div className="container">
        {this.state.name};
        {this.state.capital};
        {this.state.flag};
        {this.state.population};
        {this.state.region};
        <Button></Button>
      </div>
    );
  }
}

export default App;
