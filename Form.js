import React, { Component } from 'react'

class Form extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         Username:'',
         Address:''
      }
    }
    
    handleUsername = (event)=>{
        this.setState({
            Username:event.target.value
        })
    }

    handleAddress = (event)=>{
        this.setState({
            Address:event.target.value
        })
    }

    onSubmit = ()=>{
        
    }

  render() {
    return (
      <div>
        <form>
            <div>
                <label>Username:</label>
                <input type="text" value={this.state.Username} onChange={this.handleUsername}></input><br></br>
                <label>Address:</label>
                <input type="text" value={this.state.Address} onChange={this.handleAddress}></input><br></br>
                <button onClick={this.onSubmit}>Submit</button>
            </div>
        </form>
      </div>
    )
  }
}

export default Form
