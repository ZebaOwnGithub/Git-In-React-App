import React, { Component } from 'react'

export class LifecycleB extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         name : "Arfa"
      }
      console.log("LifecycleB : constructor");
    }

    static getDerivedStateFromProps(props,state){
        console.log("Lifecycle : getDerivedStateFromProps");
        return null;
    }
    
     componentDidMount(){
        console.log("LifecycleB : componentDidMount");
        return null;
     }

  render() {
    console.log("LifecycleB : render");
    return (
      <div>
        Lifecycle B
      </div>
    )
  }
}

export default LifecycleB
