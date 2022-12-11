import React, { Component } from 'react'

export default class CFuncClick extends Component {

    constructor(props){
        super(props);
        this.changeEvent = this.changeEvent.bind(this);
        this.state = {
            course : "BCA",
            roll:this.props.roll
        }

        
    }
    

    changeEvent(){

        this.setState({
            course : "MBA"
        })

        console.log("Display result",this.state.course,this.state.roll);
    }
  render() {
    return (
      <div>
        <button onClick={this.changeEvent}>Display</button>
      </div>
    )
  }
}
