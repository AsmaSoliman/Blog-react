import React from 'react';
import './Card.css';
import axios from 'axios';
class ViewPost extends React.Component{

        state={
           data:[],
           comments:[]
        }
    

componentDidMount(){
   const id = this.props.match.params.id;
   axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`).then(response =>{
       const data = response.data;
       // request to get user details
       this.setState({data});
   })
   axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${id}`).then(response=>{
       const comments =response.data;
       this.setState({comments});
       console.log(comments);
   })
}

    render(){
        const {data}=this.state;
        const {comments}=this.state;
        return(
            <>
            <div className="row justify-content-center">
             <div className="my-card col-4">
                <h2>{data.title}</h2>
                <p>{data.body}</p>
            </div>
            </div>
             <div className="row justify-content-center">
             {comments.map(item => {
                 return(
                    <div key={item.id} className="my-card col-4">
                    <h2>{item.name}</h2>
                    <p>{item.body}</p>
                </div>
                 )
                
             })}
             </div>
             </>
        );
    }

}

export default ViewPost;