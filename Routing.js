import React from 'react'
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
    BrowserRouter,
  } from "react-router-dom";

export default function Routing() {
  return (
    <BrowserRouter>
    <Router>
    <div>
      <h1>Routing</h1>
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/users">Users</Link>
                </li>
            </ul>
        </nav>
    </div>

    <Routes>
        <Route path='/about'>
            <About></About>
        </Route>
        <Route path='/users'>
            <Users></Users>
        </Route>
        <Route path='/'>
            <Home></Home>
        </Route>
    </Routes>

    </Router>
    </BrowserRouter>
  )
}

function Home(){
    return <h2>Home</h2>
}

function About(){
    return <h2>About</h2>
}

function Users(){
    return <h2>Users</h2>
}