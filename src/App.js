import React from "react";
import Button from "./components/Button";
import Card from "./components/Card";
import "bootstrap/dist/css/bootstrap.min.css";
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

  componentDidMount() {
    this.getCountry("france");
  }

  // Le code étant identique, on n'a pas besoin de le répéter. Ce sera + lisible et + facile à maintenir.

  // componentDidMount() {
  //   fetch("https://restcountries.eu/rest/v2/name/france")
  //     .then(response => response.json())
  //     .then(response => {
  //       console.log(response);
  //       this.setState({
  //         name: response[0].name,
  //         capital: response[0].capital,
  //         population: response[0].population,
  //         region: response[0].region,
  //         flag: response[0].flag
  //       })
  //     })
  // }

  getCountry(country) {
    fetch(`https://restcountries.eu/rest/v2/name/${country}`)
      .then(response => response.json())
      .then(response => {
        console.log(response);
        this.setState({
          name: response[0].name,
          capital: response[0].capital,
          population: response[0].population,
          region: response[0].region,
          flag: response[0].flag
        })
      })
  }

  render() {
    return (
      <div className="container">
        <Button onClick={() => { this.getCountry("france") }} >France</Button>
        <Button onClick={() => { this.getCountry("croatia") }}>Croatia</Button>
        <Button onClick={() => { this.getCountry("brazil") }}>Brazil</Button>
        <Card 
          flag={this.state.flag}
          name={this.state.name}
          capital={this.state.capital}
          population={this.state.population}
          region={this.state.region}
        />
        {/* peut aussi s'écrire en + court avec la destructuration */}
        <Card {...this.state} />
      </div>
    );
  }
}

export default App;
