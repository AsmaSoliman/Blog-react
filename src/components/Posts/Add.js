import React from 'react';
import './Add.css';
import SimpleSchema from 'simpl-schema';


class AddPost extends React.Component{
  state={
    title:'',
    body:'',
    id:'',
  }
handleSubmit=(e)=>{

  e.preventDefault();
  const {title,body,id}= this.state;
  const validationContext = new SimpleSchema({
    title: {
      type: String,
      min: 200
    },
    body: {
      type: String,
      
    },
    id: {
      type: Number,
      min: 0
    },
  }).newContext();
  validationContext.validate({title,body,id});
  console.log(validationContext.validationErrors(), '////////////////////');
}
handleChange=(e)=>{ 
  const name = e.target.name;
  const value = e.target.value;
  this.setState({[name] :value});
}

 render(){
     return(
        <form className="row justify-content-center  form-container" onSubmit={this.handleSubmit}>
        <div className="form-group col-8">
          <label >Title</label>
          <input className="form-control" name="title" value={this.state.title} onChange={this.handleChange}/>
        </div>
        <div className="form-group col-8">
          <label >Body</label>
          <textarea className="form-control" name="body" value={this.state.body} onChange={this.handleChange} rows="3"></textarea>
        </div>
        <div className="form-group col-8">
          <label >ID</label>
          <input type="number" className="form-control" value={this.state.id} onChange={this.handleChange} name="id" />
        </div>
        <button type="submit" className="btn btn-primary col-8">Add</button>
      </form>
     );
 }


}
export default AddPost;