import React, { Component } from 'react';
import './App.css';
import {getQuote} from './Services/quotes.services';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      quote: []
    }
  }

  componentDidMount(){
    getQuote()
      .then( res => {
        this.setState({quote: res.data})
        console.log(res.data)
        ;
      })
  }

  render() {
    const quote = this.state.quote;
    return (
      <div className="App">
        <header className="App-header">
        Ron Swanson Quote Generator
        {quote}
        </header>
      </div>
    );
  }
}

export default App;
