import React from "react";
import "./App.css";
import axios from "axios";

export default class App extends React.Component {
  state = {
    apod: null,
  };
  // componentWillUnmount () {

  // }
  // componentDidUpdate() {

  // }
  componentDidMount() {
    axios
      .get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
      .then((response) => this.setState({ apod: response.data }));
  }

  render() {
    return (
      <div className="App">
        <span>Hello World!</span>
        {this.state.apod && (
          <React.Fragment>
            <h1>{this.state.apod.title}</h1>
            <p>{this.state.apod.explanation}</p>
            <iframe
              title={this.state.apod.title}
              width="560"
              height="315"
              src={this.state.apod.url}
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullscreen
            ></iframe>
          </React.Fragment>
        )}
      </div>
    );
  }
}
