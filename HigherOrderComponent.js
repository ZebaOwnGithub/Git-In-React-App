import React, { Component } from 'react'
import Subject from './Subject'

export class higherOrderComponent extends Component {

    state = {
        Marks: 0
    }

    marksIncrement = () =>{
        this.setState ({
            Marks : this.state.Marks + 1
        })
    }

  render() {
    return (
      <div>
        <h2 onMouseOver = {this.marksIncrement}>Marks{this.state.Marks}, {this.props.hocsub}</h2>
      </div>
    )
  }
}

export default Subject(higherOrderComponent)
