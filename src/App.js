import React, { Component } from "react";
import Form from "./components/Form";
import ListItem from "./components/ListItem";

class App extends Component {
  state = { event: [], currentTime: undefined };

  componentDidMount() {
    this.setState({ currentTime: Date.now() });
  }

  getEvent = (data) => {
    const spread = [...this.state.event];
    spread.push(data);
    this.setState({ event: spread });
  };

  orderAndRender = () => {
    const spread = [...this.state.event];
    spread.sort((a, b) => {
      const unixA = new Date(a.date).getTime();
      const unixB = new Date(b.date).getTime();
      return unixA - unixB;
    });
    return spread.map((e, index) => {
      return (
        <ListItem
          index={index}
          eventData={e}
          key={index}
          currentTime={this.state.currentTime}
        />
      );
    });
  };

  render() {
    return (
      <>
        <h1>Date Reminder App</h1>
        <Form getEvent={this.getEvent} />
        {this.orderAndRender()}
      </>
    );
  }
}

export default App;
