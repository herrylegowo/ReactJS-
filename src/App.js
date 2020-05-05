import React, { Component } from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import './App.css';
// import List from './List';

// state


// class App extends Component{

//   constructor(props){
//     super(props)
//     this.state = {
//       todo: '',
//       items: []
//     }
//   }

//   handleSubmit = (event) => {
//     event.preventDefault()
//     this.setState({
//       items : [...this.state.items, this.state.todo],
//       todo  : '' 
//     })
//   }

//   handleChange = (event) => {
//     this.setState({
//       todo: event.target.value
//     })
//   }

//   render(){
//     return(
//       <div>
//         <form onSubmit={this.handleSubmit}>
//           <input value={this.state.todo} onChange={this.handleChange}></input>
//           <button>Add</button>
//         </form>
//         <List items={this.state.items} />
//       </div>
//     );
//   }
// }

class App extends Component{
  constructor(props){
    super(props)
    this.state =  {
      items: [],
      isloading: true
    }
  }
  componentDidMount(){
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(reponse => reponse.json())
    .then(data => this.setState({ items: data, isloading: false }))
  }
  render(){
    const{ items, isloading } = this.state
    if( isloading ){
      return <p>Loading....</p>
    }
    return(
      <div>
        <ul>
    {items.map((item, id) => <li key={id}> {item.name} </li>)}
        </ul>
      </div>
    );
  }
}

export default App;
