import React, { Component } from 'react'
import ContextB from './ContextB'
export const mycontext = React.createContext();

export default class ContextA extends Component {

    state = {
        name: "API"
    }

  render() {
    return (
      <div>
        <h1>Context API</h1>
        <ContextB />
             <mycontext.Provider value={this.state.name}>
                <ContextB />
             </mycontext.Provider>
        </div>
    )
  }
}
