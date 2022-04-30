import React, { Component } from "react";
class Form extends Component {
  state = {
    title: "",
    date: undefined,
    recurring: false,
    info: "",
    minDate: undefined,
  };

  componentDidMount() {
    const date = new Date();
    this.setState({ minDate: date.toISOString().slice(0, 10) });
  }

  render() {
    return (
      <>
        <div className="form__container container">
          <h2 className="form__heading">Add a date to avoid divorce:</h2>
          <div className="form__top form__section">
            <label htmlFor="title">Event Title</label>
            <input
              className="input__textbox"
              type="text"
              id="title"
              placeholder="Birthday, anniversary, etc..."
              onInput={(e) =>
                this.setState({ ...this.state, title: e.target.value })
              }
            ></input>
          </div>
          <div className="form__middle form__section">
            <label htmlFor="date">Date</label>
            <input
              type="date"
              id="date"
              min={this.state.minDate}
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
          </div>

          <div className="form__bottom form__section">
            <label htmlFor="info">Further Details</label>
            <input
              className="input__textbox"
              type="text"
              id="info"
              placeholder="Any additional info..."
              onInput={(e) =>
                this.setState({ ...this.state, info: e.target.value })
              }
            ></input>
          </div>
          <button
            className="addEvent__btn"
            onClick={() => {
              if (!this.state.title || !this.state.date) return;
              else return this.props.getEvent(this.state);
            }}
          >
            Submit
          </button>
        </div>
      </>
    );
  }
}

export default Form;
