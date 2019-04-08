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
  


  
  //trying to use a callback function to keep getting a new quote until condition is met
  componentDidMount(){
    const callback = function(){
      getQuote()
        .then( res => {
          console.log(res.data);
          let data = res.data.toString();
          let q = data.split(' ');
          //condition
          if(q.length >= 10){
            callback();
            console.log(res.data);
          }else{
            this.setState({ quote: res.data });
            console.log(res.data);
          }
        })
    }
  }

  render() {
    const quote = this.state.quote;
    return (
      <div className="App">
        <header className="App-header">
        {quote}
        </header>
      </div>
    );
  }
}

export default App;
