import React, { Component } from 'react'

export default class Product extends Component {


    constructor(props) {
      super(props)
    
      this.state = {
         qty :  0
      }
    }
    

    updateQty = ()=>{
        this.setState({
            qty : this.state.qty+1
        })
    }

    componentDidMount(){
        console.log("Execute later");
    }

    componentDidUpdate(prevProps,prevState){
        console.log("Execution done");
    }

  render() {
    return (
      <div>
        <h1>Cart Elite : {this.state.qty}</h1>
        <button onClick={this.updateQty}>Updation</button>
      </div>
    )
  }
}

