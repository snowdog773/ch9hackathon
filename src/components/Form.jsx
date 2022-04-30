import React, { Component } from "react";
class Form extends Component {
  state = { title: "", date: undefined, recurring: false, info: "" };
  render() {
    return (
      <>
        <label htmlFor="title">Event Title</label>
        <input
          type="text"
          id="title"
          onInput={(e) =>
            this.setState({ ...this.state, title: e.target.value })
          }
        ></input>
        <label htmlFor="date">Date</label>
        <input
          type="date"
          id="date"
          onInput={(e) =>
            this.setState({ ...this.state, date: e.target.value })
          }
        ></input>
        <label htmlFor="recurring">Click for Recurring Event</label>
        <input
          type="checkbox"
          id="recurring"
          onChange={(e) =>
            this.setState({ ...this.state, recurring: e.target.checked })
          }
        ></input>
        <label htmlFor="info">Further Details</label>
        <input
          type="text"
          id="info"
          onInput={(e) =>
            this.setState({ ...this.state, info: e.target.value })
          }
        ></input>
        <button onClick={() => this.props.getEvent(this.state)}>Submit</button>
      </>
    );
  }
}

export default Form;