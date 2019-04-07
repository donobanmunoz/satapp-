//three main dependicies that we are going to need to render to the dom
import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import First from './components/first.jsx'

//how to create a component have to extend it to other files
//react dom to render to the dom
class App extends React.Component{
  //need to have html in the render method only above only javascript
  //before render and before return all functuality

  render() {
    return(
      <div>
       <h1> Sury</h1>
       <First>
       </First>
      </div>
    )
  }
}
//method to render 2 arguments need the space 1st 2nd where are going to render app
ReactDOM.render(<App />,document.getElementById('app'))
