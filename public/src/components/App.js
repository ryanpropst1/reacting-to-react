import React, { Component } from "react";
import {Fragment} from "react";

export default class App extends Component {
  constructor(props) {
    super(props);
    //  The only place where you can assign this.state is the constructor
    this.state = {
      text: "",
      hasLoaded: false
    };
    // This line is important! It binds this to 'this state instance" in case of asyn
    // updates so that setState can update the correct 'this' (obviously not here but
    // to be aware)
    this.handleChange = this.handleChange.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
  }

  // These methods are called “lifecycle methods”
  //  Method runs after the component output has been rendered to the DOM.
  componentDidMount() {
    this.setState({hasLoaded: true})
  }

  handleChange(e) {
    this.setState({ text: e.target.value });
  }

  handleToggle() {
    console.log(this.state.hasLoaded);
    // let toggle = this.state.hasLoaded ? false : true;
    // this.setState({ hasLoaded: toggle });
    // alternate way to change Toggle state using the ! operator
    this.setState(prevState => ({
      hasLoaded: !prevState.hasLoaded
      }
    ));
  }
  render() {
    console.log(this.props.value);
    console.log (this.state.hasloded);  // getting undefined??
    // Because `this.handleChange` & 'this.handleToggle' is bound, we can use it
    // as an event handler.
    if (this.state.hasLoaded) {
      return (
        <Fragment>
          <h1>
            {this.props.value} <br></br> {this.state.text}
          </h1>
          <h2>{"Loaded State is True - Component is mounted"}</h2>
          <input
            type="text"
            placeholder="Enter Name Here"
            value={this.state.text}
            onChange={this.handleChange}
          /><br></br>
          <button onClick={this.handleToggle}>Unload</button>
        </Fragment>
      );
    } else {
      return (
        <Fragment>
          <h1>Loading...</h1><br></br>
          <h2>{"Loaded State is false - Component is unmounted"}</h2>
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
//  * some methods have been deprecated - be sure to check REACT DOCS!
//  https://www.freecodecamp.org/news/the-beginners-collection-of-powerful-tips-and-tricks-for-react-f2e3833c6f12/
//  https://www.freecodecamp.org/news/a-quick-guide-to-learn-react-and-how-its-virtual-dom-works-c869d788cd44/
//  https://reactjs.org/docs/state-and-lifecycle.html
//  https://www.w3schools.com/react/react_lifecycle.asp
//  https://dev.to/torianne02/componentwillmount-vs-componentdidmount-5f0n
//  https://www.tutorialspoint.com/reactjs/reactjs_component_life_cycle.htm
//  https://www.codingame.com/playgrounds/8747/react-lifecycle-methods-render-and-componentdidmount
//  https://reactjs.org/docs/components-and-props.html#functional-and-class-components
//  https://reactjs.org/docs/handling-events.html
//  https://reactjs.org/docs/react-component.html
//  https://reactjs.org/docs/lists-and-keys.html
//  * https://www.freecodecamp.org/news/the-most-important-eslint-rule-for-redux-applications-c10f6aeff61d/
//  * study hooks * https://reactjs.org/docs/hooks-reference.html
//  * excellent explanation https://blog.logrocket.com/the-new-react-lifecycle-methods-in-plain-approachable-language-61a2105859f3/
//  https://stackoverflow.com/questions/40359800/how-to-toggle-boolean-state-of-react-component
//  https://medium.com/path2code/how-react-js-toggle-button-works-99c838ae2fe1


//  https://dev.to/torianne02/componentwillmount-vs-componentdidmount-5f0n
/*
componentDidMount()
The best place to make calls to fetch data is within componentDidMount().
 componentDidMount() is only called once, on the client, compared to
 componentWillMount() which is called twice, once to the server and once
 on the client. It is called after the initial render when the client
 received data from the server and before the data is displayed in the
 browser. Due to the fact that the data won’t be loaded until after the
 initial render, the developer NEEDS to set up the components initial
 state properly.
On a side note, with componentDidMount() you can use a timer and have the
 data updated every so often without the user ever having to refresh the
 page. I’d say that is a really neat feature that can be useful in
projects/websites.
*/
