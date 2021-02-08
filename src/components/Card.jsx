import React from "react";

class Card extends React.Component {
    render() {
        return (
            <div>
                <img className="countryImage" src={this.state.flag} alt={`Drapeau de la ${this.state.name}`} />
                <p>Name: {this.state.name}</p>;
                <p>Capital: {this.state.capital}</p>;
                <p>Population: {this.state.population}</p>;
                <p>Region: {this.state.region}</p>;
            </div>
        )
    }
}

export default Card;