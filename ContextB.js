import React, { Component } from 'react'
import {mycontext} from './ContextA';

export default class ContextB extends Component {
  render() {
    return (
      <div>
        <mycontext.Consumser>
            {data => <h3>{data.name}</h3>}
        </mycontext.Consumser>
      </div>
    )
  }
}
