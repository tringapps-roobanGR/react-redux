import React from 'react'
import { connect } from 'react-redux'
import { addTask } from './action'
function Rightside({  addNewTask }) {
  function handleAddTask() {
    const task = document.querySelector('.task').value
    addNewTask(task);
  }

  return (
    <div class='right'>
      <div className='tasks'></div>
      <label>NAME</label>
      <input type='text' className='task' required />
      <br />
      <br />
      <button onClick={handleAddTask}>clicktosubmit</button>
    </div>
  )
}

const mapStateToProps = (state) => ({
  appState: state
})

const mapDispatchToProps = (dispatch) => ({
  addNewTask: (task) => dispatch(addTask(task))
})

export default connect(mapStateToProps, mapDispatchToProps)(Rightside)
