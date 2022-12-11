import React, { Component } from 'react'

export class Cart extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         ProducId : '', qty : 0
      }
    }

    addToCart = (pid)=>{
        console.log(pid);
        this.setState({
            ProducId: pid,qty : this.state.qty+1
        })
    }
    
    static getDerivedStateFromProps(props,state){
        console.log(props.qty);
        console.log(state.qty);
        if (props.qty !== state.qty){
            return {qty : props.qty}
        }

        return null;
    }

    componentDidUpdate(){
        console.log("component updated");
    }

  render() {
    return (
      <div>
        <button onClick= {()=>{this.addToCart(1)}}>Add to Cart</button>

      </div>
    )
  }
}

export default Cart
