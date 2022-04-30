import React, { Component } from "react";
import Form from "./components/Form";
import ListItem from "./components/ListItem";
import logo__banner from "./assets/logo_banner_v4.png";
import "./App.css";

class App extends Component {
  state = { event: JSON.parse(localStorage.getItem("eventData")) || [] , currentTime: Date.now()  };

  componentDidMount() {
    // const saveData = JSON.parse(localStorage.getItem("eventData")) || [] 
    // this.setState({event: saveData})

    setInterval(() => {
      const updatedTime = new Date().getTime();
      this.setState({ currentTime: updatedTime });
    }, 100);
  }

  getEvent = (data) => {
    const spread = [...this.state.event];
    spread.push(data);
    localStorage.setItem("eventData", JSON.stringify(spread));
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
          deleteItem={this.deleteItem}
          eventData={e}
          key={index}
          currentTime={this.state.currentTime}
        />
      );
    });
  };

  deleteItem = (title) => {
    const copy = [...this.state.event];
    const copied = copy.filter(data => data.title !== title);
    this.setState({ event: copied });
    localStorage.setItem("eventData", JSON.stringify(copied));
  }

  render() {
    return (
      <>
        <div className="body__container">
          <h1 className="logo__header">
            <img src={logo__banner} alt="logo banner" />
          </h1>
          <Form getEvent={this.getEvent} />

          <div className="allEvents__container">{this.state.event && this.orderAndRender()}</div>
        </div>
      </>
    );
  }
}

export default App;
