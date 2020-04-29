import React, { Component } from 'react';
import PostForm from './PostForm';
import AllPost from './AllPost';
import Show from './Show';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="navbar">
          <h2 className="center ">Student Mangement System</h2>
        </div>
        <Switch>
          <Route path="/" component={PostForm} exact />
          <Route path="/list" component={AllPost} exact/>
          <Route path="/show" component={Show} />
          
         
        </Switch>
      </div>
    );
  }
}
export default App;