import React, { Component } from 'react';
import './App.css';
import PostsList from './components/Posts/List';
import UsersList from './components/Users/List';
import AddPost from './components/Posts/Add';
import AddUser from './components/Users/Add';
import ViewPost from './components/Posts/View';
import ViewUser from './components/Users/View';
import NavBar from './components/Nav-bar/Nav';
import UserPosts from './components/Users/Posts';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';


class App extends Component {
  render() {
    return (
    
      
      <Router>
      <div className="App">
      <NavBar/>
       <Switch>
       <Route exact path="/posts" component={PostsList}/>
       <Route exact path="/userId/:id" component={UserPosts}/>
       <Route exact path="/users" component={UsersList}/>
       <Route exact path="/AddPost" component={AddPost}/>
       <Route exact path="/AddUser" component={AddUser}/>
       <Route exact path="/posts/:id" component={ViewPost}/>
       <Route exact path="/users/:id" component={ViewUser}/>
       </Switch>
      </div>
      </Router>
    
    );
  }
}

export default App;
