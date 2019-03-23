import React from 'react';
import '../Posts/Add.css';
import SimpleSchema from 'simpl-schema';

class AddUser extends React.Component{
 
   state={
     id:'',
     name:'',
     username:'',
     email:'',
     phone:','

   }


   handleSubmit=(e)=>{
    e.preventDefault();
    const {name,username,id,email,phone}= this.state;
    const validationContext = new SimpleSchema({
      name: {
        type: String,
        max: 50
      },
      username: {
        type: String,
        max:50
        
      },
      id: {
        type: Number,
        min: 0
      },
      phone: {
        type: Number,
        min: 0
      },
      email: {
        type: String,
        
        
      }
    }).newContext();
    validationContext.validate({name,username,id,email,phone});
    console.log(validationContext.validationErrors());
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
          <label >ID</label>
          <input type="number" className="form-control" name="id" value={this.state.id} onChange={this.handleChange}/>
        </div>
        <div className="form-group col-8">
          <label >Name</label>
          <input className="form-control"  name="name" value={this.state.name} onChange={this.handleChange}/>
        </div>
        <div className="form-group col-8">
          <label >User Name</label>
          <input className="form-control"  name="username" value={this.state.username} onChange={this.handleChange}/>
        </div>
        <div className="form-group">
    <label>Email</label>
    <input type="email" className="form-control"  name="email" value={this.state.email} onChange={this.handleChange} />
  </div>
  <div className="form-group col-8">
          <label >Phone</label>
          <input type="number" className="form-control"  name="phone" value={this.state.phone} onChange={this.handleChange} />
        </div>
        
       
        <button type="submit" className="btn btn-primary col-8">Add</button>
      </form>
     );
 }


}
export default AddUser;