import './App.css';
import React, { Component } from 'react'
//import EmailFormSubmit from './EmailFormSubmit';


class App extends React.Component{
  state = {
    count: 0
  }

  incrementCount = () =>{
    const {count} = this.state
    this.setState({
      count: count + 1
    })
  }
  
  decrementCount = () =>{
    const {count} = this.state
    if (count > 0) {
      this.setState({
        count: count - 1
      })
    }
  }

  getQuote = () =>{

  }


  render(){

    const {count} = this.state
    const {incrementCount, decrementCount} = this
    return(
      <div class="custom">
        <h1>Counter App with Odd/Even Number Check</h1>
        <p>count = {count} </p>
        <button onClick={incrementCount}>Increment</button>
        <button onClick={decrementCount}>Decrement</button>
        <IsOddOrEven count={count}/>
        <button>get a quote</button>
      </div>
    )
      
  }
}

class IsOddOrEven extends Component{
  render(){
    
    const {count} = this.props
    const numberState = count % 2 === 0 ? 'Even': 'Odd' 
    return(
      <>
        <p> {count} Is a {numberState}</p>
      </>
    )
  }
}

export default App
