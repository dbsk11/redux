import React { useState } from 'react'

const ListForm = () => {

  const [title, setTitle] = useState();
  const [description, setDescription] = useState();

  const onChangeTitle = (e) => {
    setTitle(e.target.value)
  };

  const onChangeDescription = (e) => {
    setDescription(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
  };

  return(
    <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title:</label>
        <input 
          type="text" 
          value={title}
          name="title"
          onChange={handleChangeTitle}
          id="title"
          autoComplete="off"
        />
        <br />
        <label htmlFor="description">Description:</label>
        <input 
          type="text"
          value={description}
          name="description"
          onChange={handleChangeDescription}
          id="description"
          autoComplete="off"
        />
        <br />
        <input type="Submit" value={"Dispatch this task"} />
      </form>
  )
};

export default ListForm


// class ListForm extends React.Component{
//   state={
//     title: "",
//     description: ""
//   }

//   onChange = (e) => {
//     this.setState({
//       [e.target.name]: e.target.value
//     });
//   };

//   handleSubmit = (e) => {
//     e.preventDefault()
//   };

//   render(){
//     let {title, description} = this.state
//     return(
//       <form onSubmit={this.handleSubmit}>
//         <label htmlFor="title">Title:</label>
//         <input 
//           type="text" 
//           value={title}
//           name="title"
//           onChange={this.handleChange}
//           id="title"
//           autoComplete="off"
//         />
//         <br />
//         <label htmlFor="description">Description:</label>
//         <input 
//           type="text"
//           value={description}
//           name="description"
//           onChange={this.handleChange}
//           id="description"
//           autoComplete="off"
//         />
//         <br />
//         <input type="Submit" value={"Dispatch this task"} />
//       </form>
//     )
//   }

// };

// export default ListForm