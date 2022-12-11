import React, { Component } from 'react'

export class Lifecycle extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         name : "Arfa"
      }
      console.log("constructor has been called");
    }
    
   static getDerivedStateFromProps(props,state){
        console.log("getDerivedStatefromProps has been called");
        return null;
    }

    componentDidMount(){
        console.log("componentDidMount has been called");
    }

  render() {
    console.log("render has been called");
    return (
      <div>
        Lifecycle
      </div>
    )
  }
}

export default Lifecycle
