import React from 'react'

class List extends React.Component{
  render(){
    return(
      <li>
        <p>Task: {this.props.list.title}</p>
        <p>Description: {this.props.list.description}</p>
      </li>
    );
  };
};

export default List