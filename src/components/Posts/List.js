import React from 'react';
import axios from 'axios';
import Card from './Card';
import {Link} from 'react-router-dom';


class PostsList extends React.Component {
    constructor(){
        super();
        this.state = {
         data: [],
        }
    }

    componentDidMount(){
      axios.get("https://jsonplaceholder.typicode.com/posts").then(response =>{
          const data =response.data ;
          this.setState({data});
        //   console.log(data);
     
      })
    }

    render(){
        const {data} = this.state;
        return(
            <div className="row">
            <Link to="/AddPost" className="btn btn-primary btn-lg btn-block">Add Post</Link>
            {data.map(item => <Card key={item.id} title={item.title} id={item.id} input="post" ></Card>)}
            </div>
                
        );
    }
}

export default PostsList;