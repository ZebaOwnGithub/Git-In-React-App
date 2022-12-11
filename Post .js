import axios from 'axios'
import React, { Component } from 'react'

class Post  extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         posts:[]
      }
    }
    

    componentDidMount(){
        axios.get("https://jsonplaceholder.typicode.com/todos/1")
        .then(response =>{
            this.setState({posts:response.data});
            console.log(response);
        })
        .catch(error => {
            console.log(error);
        })
    }

  render() {
    const {posts} = this.state
    return (
      <div>
        HTTP
       
      </div>
    )
  }
}

export default Post 
