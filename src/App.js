import React, { Component } from 'react';
import {connect} from 'react-redux';
import {itemFetchData} from './Actions/index';
import './App.css';

class App extends Component {
  componentDidMount(){
    this.props.fetchData("https://jsonplaceholder.typicode.com/todos/");
  }
  render() {
    if(this.props.status){
      return(<h2>Loading</h2>);    
    }
    else{
      console.log("hello:"+this.props.users);
      return this.props.users.map((user)=>{
        return (<h3>{user.title}</h3>);
      })
      
    }
      
     
  }

  
};

const mapStateToProps=(state)=>{
    return{
      users:state.userlists,
      status:state.userloading
    }
};

const mapDispatchToProps=(dispatch)=>{
  return{
    fetchData:(url) => dispatch(itemFetchData(url))
  };
};


export default connect(mapStateToProps,mapDispatchToProps)(App);
