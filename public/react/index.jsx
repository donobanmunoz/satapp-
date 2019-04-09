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
constructor(props) {
  super(props)
  //inside of state we are going to call the JSON object from the datatbase
  //
   this.state = {
    list: []
  }
  this.getData = this.getData.bind(this);
}
//get request choose the one you like best
getData() {
  $.ajax({
    //what is the url(function) that we want to use for our ajax get request
    //it is the
    url: '/infoFromDatabase',
    method: 'GET',
    sucess: (results) => {
      //where you want to the the results of data that we want to get
      //most of the time it will sent to state to be able to pass it on
      this.setState({list: results});
    },
    error: (xhr, err) => {
      console.log('your have an err', err);
    }
  });
}
addCommentPost(quantity, description) {
  $.ajax({
    method: 'POST',
    url: '/forum',
    contentType: 'application/json',
    data: JSON.stingify({
      quantity: quantity,
      description: description
    })
  }).done(() => {
    this.getData();
  });
}
//after the componentDidMount react method the get request will get triggred
//
componentDidMount() {
  //have to be inside of the react life cycle after it renders
  this.getData();
}
  render() {
    return(
      <div>
       <First>
       </First>
      </div>
    )
  }
}
//method to render 2 arguments the 1st one needs the have a space before closing the tag
// 2nd where are going to render app in the id tag in the HTML file
ReactDOM.render(<App />,document.getElementById('app'))
