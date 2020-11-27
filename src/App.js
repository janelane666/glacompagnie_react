import React, { Component } from 'react';
import Glacons from './components/glacons';

class App extends Component {

  state = {
    glacons: []
  }

  componentDidMount() {
    fetch('https://glacompagnie-api.herokuapp.com/api/v1/glacons')
      .then(res => res.json())
      .then((data) => {
        this.setState({ glacons: data })
      })
      .catch(console.log)
  }

  render () {
    return (
      <Glacons glacons={this.state.glacons} />
    );
  }
}

export default App;
