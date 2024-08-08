import React, {  useState } from 'react';

import './App.css';
import TaskItem from './components/taskItem';



export interface task {
  name: string;
  id: number
}
function App() {
  const [taskList, setTaskList] = useState<task[]>([]);

  function edit(taskk: task): void {


    setTaskList(
      taskList.map(task =>{
        if (task.id === taskk.id){
          var a: task= {name: taskk.name, id: taskk.id}

          return a
        }else{
          return task
        }
      })
    )
  }

  function deletee(id: number): void {
    setTaskList(
      taskList.filter(task => task.id !== id)
    )
  }

  function handleAdd(): void {
    const inputField = document.getElementById("addTask") as HTMLInputElement;
    const inputText: task = {name: inputField.value, id: taskList.length};

    if (inputText.name !== "") {
        setTaskList(
          [...taskList, inputText ]
        )
        inputField.value="";
    }
  }


  return (
    <div className="App">
      <div id="addTaskDiv">
            <textarea placeholder="Add Task Here" name="add" id="addTask" cols={90} rows={2}> </textarea>
            <button id="addButton"  onClick={handleAdd} >Add</button>
      </div>
      <div id="taskSection">
            <h2>Task List</h2>
            <div id="taskList">
              {taskList.map(task => (
                 <TaskItem task={task} deletee={deletee} edit={edit} key={task.id} />
              ))}
            </div>
      </div>

    </div>
  );
}

export default App;
