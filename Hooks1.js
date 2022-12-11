import React, {useState} from 'react'

export default function Hooks1() {

    const [name,setname] = useState("Zeba")

  return (
    <div>
      {name}
    </div>
  )
}
