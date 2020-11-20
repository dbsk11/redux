import React from 'react'

class ListForm extends React.Component{
  state={
    title: "",
    description: ""
  }

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = (e) => {
    e.preventDefault()
  };

  render(){
    let {title, description} = this.state
    return(
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="title">Title:</label>
        <input 
          type="text" 
          value={title}
          name="title"
          onChange={this.handleChange}
          id="title"
          autoComplete="off"
        />
        <br />
        <label htmlFor="description">Description:</label>
        <input 
          type="text"
          value={description}
          name="description"
          onChange={this.handleChange}
          id="description"
          autoComplete="off"
        />
        <br />
        <input type="Submit" value={"Dispatch this task"} />
      </form>
    )
  }

};

export default ListForm