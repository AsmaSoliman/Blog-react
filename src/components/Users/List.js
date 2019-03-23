import React from 'react';
import axios from 'axios';
import Card from '../Posts/Card';
import {Link} from 'react-router-dom';


class UsersList extends React.Component {
    constructor(){
        super();
        this.state = {
         data: [],
        }
    }

    componentDidMount(){
      axios.get("https://jsonplaceholder.typicode.com/users").then(response =>{
          const data =response.data ;
          this.setState({data});
        //   console.log(data);
     
      })
    }

    render(){
        const {data} = this.state;
        return(
            <div className="row">
            <Link to="/AddUser" className="btn btn-primary btn-lg btn-block">Add User</Link>
            {data.map(item => <Card key={item.id} title={item.name} id={item.id} input="user" ></Card>)}
            </div>
                
        );
    }
}

export default UsersList;