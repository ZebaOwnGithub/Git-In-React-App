import React, { Component } from 'react'

export class LifecycleA extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name : "Arfa"
      }
    }

    static getDerivedStateFromProps(props,state){
        console.log("LifecycleA : getDerivedFromProps");
        return null;
    }

    componentDidMount(){
        console.log("LifecycleA");
    }
    
  render() {
    return (
      <div>
        
      </div>
    )
  }
}

export default LifecycleA
