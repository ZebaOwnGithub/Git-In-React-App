import React, { Component } from 'react'

export default class List extends Component {
  render() {

    let number = [2,3,4,5];
    console.log(number);
    let newNum = number.map(function(){
        return <li key = {number}>{number}</li>
    })

    return (
      <div>
         <ul>
            {
                number.map((number)=>{
                    return <li key = {number} value={number}>{number}</li>
                })
            }
        </ul>
        console.log(newNum);
      </div>
    )
  }
}
