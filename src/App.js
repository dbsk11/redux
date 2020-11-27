import React from 'react';
import ListContainer from './components/ListContainer';
import ListForm from './components/ListForm';
import {connect} from 'react-redux'

class App extends React.Component{

  componentDidMount(){
    fetch("http://localhost:4000/list")
    .then(r => r.json())
    .then((list) => {
      this.props.setAllList(list)
    });
  };

  render(){
    return(
      <div className="App">
        <h1>To Do List</h1>
        <ListForm />
        <ListContainer />
      </div>
    );
  };
};


// ACTION CREATOR - return value of an action creator is an action
// ACTION: POJO that contains the key of type && payload
let setAllList = (listArr) => {
  return {
    type: "SET_ALL_LIST",
    payload: listArr
  };
};

// mapDispatchToProps: POJO that will be merged as props to App
let mapDispatchToProps = {
  setAllList: setAllList
}

export default connect(null, mapDispatchToProps)(App);
