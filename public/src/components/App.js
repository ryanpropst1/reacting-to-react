import React, { Component } from "react";
import {Fragment} from "react";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      hasLoaded: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
  }

  componentDidMount() {
    this.setState({hasLoaded: true})
  }

  handleChange(e) {
    this.setState({ text: e.target.value });
  }

  handleToggle() {
    let toggle = this.state.hasLoaded ? false : true;
    this.setState({ hasLoaded: toggle });
  }
  render() {
    if (this.state.hasLoaded) {
      return (
        <Fragment>
          <h1>
            {this.props.value} {this.state.text}!
          </h1>
          <input
            type="text"
            placeholder="Enter Name Here"
            value={this.state.text}
            onChange={this.handleChange}
          />
          <button onClick={this.handleToggle}>Unload</button>
        </Fragment>
      );
    } else {
      return (
        <Fragment>
          <h1>Loading...</h1>
          <button onClick={this.handleToggle}>Load</button>
        </Fragment>
      );
    }
  }
}

// const App = (props) => {
//     return (
//       <div>
//         <h1>{props.value}</h1>
//       </div>
//     )
// }

// export default App;
