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

  smallQuote(){
    this.setState({smallQuote: []});
    this.setState({midQuote: []});
    this.setState({largeQuote: []});
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
    this.setState({smallQuote: []});
    this.setState({midQuote: []});
    this.setState({largeQuote: []});
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
    this.setState({smallQuote: []});
    this.setState({midQuote: []});
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
        <span>Swanson Quote Generator</span>
        </header>
        <div className="Quote-container">
          {this.state.smallQuote}
          {this.state.midQuote}
          {this.state.largeQuote}   
        </div>  
        <div className="Button-Container">
          <button className="button" onClick={(e) => this.smallQuote(e)}>small quote</button>
          <button className="button" onClick={(e) => this.midQuote(e)}>mid quote</button>
          <button className="button" onClick={(e) => this.largeQuote(e)}>large quote</button>
        </div>
        <div className="Swanson-img">
          <img src="https://i.etsystatic.com/18117372/r/il/687b20/1626362036/il_fullxfull.1626362036_q5dj.jpg" alt="Swanson Silhouette" />
        </div>
        
      </div>
    );
  }
}

export default App;
