import React from 'react'
import List from './List'
import {connect} from 'react-redux'

const ListContainer = (props) => {
  let arrayOfComponents = props.list.map((listPOJO) => {
    return <List key={listPOJO.id} list={listPOJO} />
  })

  return(
    <>
      <h3> To Do List:</h3>
      <ol>
        {arrayOfComponents}
      </ol>
    </>
  )
};


// Return value of mapStateToProps(READ) needs to be a POJO (POJO will be merged into component's props)
let mapStateToProps = (globalState) => {
  return {
    list: globalState.list
  }
}

// let magicalFunc = connect()
// let magicalComponent = magicalFunc(ListContainer)
// export default magicalComponent

export default connect()(ListContainer)
// second set of () is always the component