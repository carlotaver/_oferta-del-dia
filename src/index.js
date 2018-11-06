import React from "react";
import ReactDOM from "react-dom";

class Dave extends React.Component {
  render() {
    return <p>"What do you think you are doing,Dave?</p>;
  }
}

const Yo = () => {
  return <p>"What do you think you are doing, Yo?"</p>;
};

class App extends React.Component {
  render() {
    return (
      <div>
        <Dave />
        <Yo />
      </div>
    );
  }
}
ReactDOM.render(<App />, document.querySelector("#app-container"));
