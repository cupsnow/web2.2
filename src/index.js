import React from "react";
import ReactDOM from "react-dom";
import "index.scss";

class ShowTime extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date()
    };
  }

  componentDidMount() {
    this.timerId = setInterval(
      () => this.tick(),
      500
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  tick() {
    this.setState((prev) => ({date: new Date()}));
  }

  render() {
    return (<div>
      <h2>
        {this.state.date.toLocaleTimeString("default", {
          hour12: false
        })}
      </h2>
    </div>);
  }
};

ReactDOM.render(
  <ShowTime/>,
  document.getElementById("root")
);
