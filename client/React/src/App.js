import React from 'react';
import './App.css';
import io from 'socket.io-client'

const socket = io("http://localhost:3002");
class App extends React.Component {
  constructor(){
    super()
    this.state = {
      text:"",
      input:""
    }
    socket.on("chatroom",(info)=>{
      this.setState({
        text:this.state.text + "\n" + info
      })
    })
    this.handleClick=this.handleClick.bind(this)
    this.handleChange=this.handleChange.bind(this)
  }
   
  handleClick(){
    socket.emit('chatroom', this.state.input)
    this.setState({
      input: ''
    })
  }

  handleChange(e){
    this.setState({
      input:e.target.value
    })
  }
  render(){
    return (
      <div className="App">
        <input id="input" type="text" onChange={this.handleChange} value={this.state.input}/>
        <button type="submit" onClick={this.handleClick}>Chat!</button>
        <p>{this.state.text}</p>
      </div>
    );
  }
  
}

export default App;
