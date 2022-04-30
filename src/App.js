import React, { Component } from "react";
import Form from "./components/Form";
import ListItem from "./components/ListItem";

class App extends Component {
  state = { event: [], currentTime: undefined};

  componentDidMount() {
    this.setState({currentTime: Date.now()})
  }

  getEvent = (data) => {
    const spread = [...this.state.event];
    spread.push(data);
    this.setState({ event: spread });
  };

  // minDate = new Date(this.state.date).toLocaleDateString("en-GB", {
  //   year: "numeric",
  //   month: "numeric",
  //   day: "numeric",
  // });

  render() {
    console.log(this.state);
    return (
      <>
        <h1>Date Reminder App</h1>
        <Form getEvent={this.getEvent}/>
        {this.state.event.map((e, index) => {
          return <ListItem eventData={e} key={index} currentTime={this.state.currentTime} />;
        })}
      </>
    );
  }
}

export default App;
