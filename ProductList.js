import React, { Component } from 'react'
import axios from 'axios'

class ProductList extends Component {

    constructor (props){
        super (props)
        this.state = {
            posts : [],
            error : ''
        }
    }

    componentDidMount(){
        axios.get("https://jsonplaceholder.typicode.com/posts")
        .then(response =>{
            this.setState({posts:response.data});
            console.log(response)
        })
        .catch(error =>{
            this.setState({error:'URL error'})
            console.log(error)
        })
    }

  render() {
    const {posts, error} = this.state
    return (
      <div>
        Product List Data
        {
            posts.length?
            posts.map((posts)=><div key={posts.id}>{posts.title}</div>):null
        }
        {
            error ?<div>
                {error}
            </div>:null
        }
      </div>
    )
  }
}

export default ProductList
