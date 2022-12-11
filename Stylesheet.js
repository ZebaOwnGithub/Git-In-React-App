import React from 'react'
import './Style.css';

export default function Stylesheet(props) {
    let className = props.isvalue ? 'demo' : 'demo1';
  return (
    <div className={`${className} demo2`}>
      Hello Stylesheet
    </div>
  )
}
