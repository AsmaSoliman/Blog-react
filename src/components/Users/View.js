import React from 'react';
import '../Posts/Card.css';
import axios from 'axios';
import {Link} from 'react-router-dom';
class ViewUser extends React.Component{

        state={
           data:[],
        }
    

componentDidMount(){
   const id = this.props.match.params.id;
   axios.get(`https://jsonplaceholder.typicode.com/users/${id}`).then(response =>{
       const data = response.data;
       this.setState({data});
       console.log(data);
       
   })
}

    render(){
        const {data}=this.state;
        const {id} =this.state.data;
        return(
            <div className="row justify-content-center">
             <div className="my-card col-4">
                <h2>{data.name}</h2>
                <p><b>Username:</b> {data.username}</p>
                <p><b>Email:</b> {data.email}</p>
                <Link to={`/userId/${id}`} className="btn btn-primary">View Posts</Link>
            </div>
               
            </div>
           
        );
    }

}

export default ViewUser;