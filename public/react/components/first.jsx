import React,{ Component } from 'react';
import axios from 'axios';




 export default class First extends Component{
   constructor(){
     super()
     this.state = {
       randomJoke:""
     }
   }
  firstFunction(){
     console.log("hey")
    axios.get('https://api.chucknorris.io/jokes/random')
    .then(res => {
      console.log('ready:',res.data.value);
      this.setState = ({
        randomJoke: res.data.value
      })
    })
    .catch(function(err){
      console.log('err:', err);
      axios.get()
    })
  }
  secondFunction(){
   console.log("hola")
   axios.get('https://api.chucknorris.io/jokes/categories')
   .then(res => {
     console.log('ready:', res);
   })
   .catch(function(err){
     console.log('err:', err);

   })
  }
  thirdFunction(){
     console.log("zzzzzzzzz")
  }
  render() {
    console.log("this is the initial state of randomJoke :", this.state.randomJoke);
    return(
      <div className="parentDiv">
       <div className="buttonContainer">
        <button className="first"onClick={this.firstFunction}> Random Joke</button>
        <button className="second"onClick={this.secondFunction}> click on me!</button>
        <button className="third"onClick={this.thirdFunction}> better click on me!</button>
      </div>
        <div className="random">{this.state.randomJoke}</div>
      </div>
    )
  }
}
