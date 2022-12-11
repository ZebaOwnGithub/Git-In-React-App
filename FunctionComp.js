import React from "react";

export function FunctionalComp(props){
    return <p>This is Functional Component</p>
}

export function FunctionalComp1(props){
    
    return (
        <div>
        <p>This is another Functional Component 1 {props.name} {props.last}</p>
    {props.children}
    </div>
    )
}

 