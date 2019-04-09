import React, { Component } from 'react';
import './App.css';
import {getQuote} from './Services/quotes.services';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      smallQuote: [],
      midQuote: [],
      largeQuote:[]
    }
  }
  



  //trying to use a callback function to keep getting a new quote until condition is met
  smallQuote(){
    this.setState({smallQuote: []});
    const callback = () => {
      getQuote()
        .then( res => {
          let dat = res.data[0].toString();
          let q = dat.split(' ');
          //condition
          if(q.length >= 4){
            callback();
          }else{
            this.setState({ smallQuote: res.data[0] }); 
          }
        })
    }
    callback();
  }

  midQuote(){
    this.setState({midQuote: []});
    const callback = () => {
      getQuote()
        .then( res => {
          let dat = res.data[0].toString();
          let q = dat.split(' ');
          //condition
          if(q.length < 4 || q.length >= 12){
            callback();
          }else{
            this.setState({ midQuote: res.data[0] }); 
          }
        })
    }
    callback();
  }

  largeQuote(){
    this.setState({largeQuote: []});
    const callback = () => {
      getQuote()
        .then( res => {
          let dat = res.data[0].toString();
          let q = dat.split(' ');
          //condition
          if(q.length < 12){
            callback();
          }else{
            this.setState({ largeQuote: res.data[0] }); 
          }
        })
    }
    callback();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
        <button onClick={(e) => this.smallQuote(e)}>small quote</button>
        {this.state.smallQuote}
        <button onClick={(e) => this.midQuote(e)}>mid quote</button>
        {this.state.midQuote}
        <button onClick={(e) => this.largeQuote(e)}>large quote</button>
        {this.state.largeQuote}
        </header>
      </div>
    );
  }
}

export default App;
