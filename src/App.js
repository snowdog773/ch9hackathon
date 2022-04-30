import React, { Component } from "react";
import Form from "./components/Form";
import ListItem from "./components/ListItem";

class App extends Component {
  state = { event: [] };

  getEvent = (data) => {
    const spread = [...this.state.event];
    spread.push(data);
    this.setState({ event: spread });
  };

  render() {
    console.log(this.state);
    return (
      <>
        <h1>Date Reminder App</h1>
        <Form getEvent={this.getEvent} />
        {this.state.event.map((e, index) => {
          return <ListItem eventData={e} key={index} />;
        })}
      </>
    );
  }
}

export default App;
