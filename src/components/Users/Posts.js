import React from 'react';
import axios from 'axios';
import Card from '../Posts/Card';



class UserPosts extends React.Component {
    state = {
        data: [],
       }

    componentDidMount(){
        console.log(this.props);
      const id = this.props.match.params.id;
      axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${id}`).then(response =>{
        console.log(response);
      const data = response.data ;
          
          this.setState({data});
      })
    }

    render(){
        const {data} = this.state;
        console.log(data)
        return(
           
            <div className="row">
            {data.map(item => <Card key={item.id} title={item.title} id={item.id} input="post" />)}
            </div>
                
        );
    }
}

export default UserPosts;