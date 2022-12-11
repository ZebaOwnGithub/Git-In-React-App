import React, { Component } from 'react'

export class Product extends Component {
  render() {
    return (
      <div>
        <Cart></Cart>
      </div>
    )
  }
}

export default Product;

class Cart extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         qty:0
      }
    }
    
    updateQty = ()=>{
        this.setState({
            qty:this.state.qty+1
        })

    }

    componentDidMount(){
        console.log("quantity should be executed");
    }

    componentDidUpdate(prevProps, prevState){
        console.log("Quantity updated");
    }

  render() {
    return (
      <div>
        <button onClick={this.updateQty}>Cart: {this.state.qty}</button>
      </div>
    )
  }
}

