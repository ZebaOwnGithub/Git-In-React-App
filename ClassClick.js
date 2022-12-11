import React, { Component } from 'react'

class ClassClick extends Component {

    chgRec() {
       console.log("Result");
    }
  render() {
    return (
      <div>
        <button onClick={this.chgRec}>Display Result</button>
      </div>
    )
  }
}

export default ClassClick

