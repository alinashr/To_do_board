import React from 'react'

const Board = ({task,index, taskList,setTaskList}) => {
  const handleDelete=()=>{
    let removeIndex = taskList.indexOf(task);
    console.log(task)
    taskList.splice(removeIndex, 1);
    setTaskList((currentTasks => currentTasks.filter(todo=>index ===removeIndex)))
  }

  return (
    <>
      <div className='w-56 flex bg-blue-200 flex-col items-center rounded justify-center border text-center text-lg py-0 pb-4 px-4 md:px-6'>
        <p>{task}</p>

      <button className='bg-red-500 text-white rounded-lg py-1 px-2 mt-20' onClick={handleDelete}>Delete</button>
      
      </div>
    </>
  )
}

export default Board
