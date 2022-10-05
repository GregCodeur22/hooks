import React, { Component } from "react";

export default class OldReact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      age: 23,
      name: "Denis",
    };
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    //algo qd le composant est appelé
  }

  handleClick() {
    //algo
  }

  render() {
    return <div>OldReact</div>;
  }
}
