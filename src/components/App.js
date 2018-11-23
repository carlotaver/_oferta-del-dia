import React from "react";

import Inventory from "./Inventory";
import Order from "./Order";
import Menu from "./Menu";
import sampleFishes from "../sample-fishes";

class App extends React.Component {
  state = {
    fishes: {},
    order: {}
  };

  addFish = newFish => {
    //1. Take a copy of the  existing `state`
    const newFishes = { ...this.state.fishes };
    //2.Add  our  newFish to newFishes
    newFishes[`fish${Date.now()}`] = newFish;
    //3.Set newFishes as the new `state`
    this.setState({ fishes: newFishes });
  };

  loadSampleFishes = () => {
    this.setState({ fishes: sampleFishes });
  };

  addToOrder = orderkey => {
    //1. Take a copy of the  existing `state`
    const newOrder = { ...this.state.order };
    //2.Either add  our  order item  to newOrder or update quantity
    newOrder[orderkey] = newOrder[orderkey] ? newOrder[orderkey] + 1 : 1;

    //3.Set newOrder as the new `state`
    this.setState({ order: newOrder });
  };

  render() {
    return (
      <div className="catch-of-the-day">
        <Menu fishes={this.state.fishes} addToOrder={this.addToOrder} />
        <Order fishes={this.state.fishes} order={this.state.order} />
        <Inventory
          addFish={this.addFish}
          loadSampleFishes={this.loadSampleFishes}
        />
      </div>
    );
  }
}

export default App;
