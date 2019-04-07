import React,{ Component } from 'react';
import axios from 'axios';




 export default class First extends Component{
  firstFunction(){
     console.log("hey")
    axios.get('https://api.chucknorris.io/jokes/random')
    .then(function(res){
      console.log('ready:',res);
    })
    .catch(function(err){
      console.log('err:', err);
      axios.get()
      .then()
      .catch()
    })
  }
  secondFunction(){
    return console.log("hola")
  }
  thirdFunction(){
    return console.log("zzzzzzzzz")
  }
  render() {
    return(
      <div>
        Abril
       <div className="buttonContainer">
        <button className="first"onClick={this.firstFunction}> click me! </button>
        <button className="second"onClick={this.secondFunction}> click on me!</button>
        <button className="third"onClick={this.thirdFunction}> better click on me!</button>
       </div>
      </div>
    )
  }
}
