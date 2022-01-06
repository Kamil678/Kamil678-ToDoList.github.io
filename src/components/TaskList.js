import React from 'react';
import Task from './Task'
import './TaskList.css';

const TaskList = (props) => {

  const active = props.tasks.filter(task => task.active);

  const done = props.tasks.filter(task => !task.active);

  active.sort((a,b) => {

    a = a.text.toLowerCase();
    b = b.text.toLowerCase();

    if (a < b) return -1;
    if (a > b) return 1;
    return 0
  })

  done.sort((a,b) => b.finishDate - a.finishDate);

  const activeTasks = active.map(task => <Task key={task.id} task={task} delete={props.delete} change={props.change}/>
  );

  const doneTasks = done.map(task => <Task key={task.id} task={task} delete={props.delete} change={props.change}/>
    );

  return ( 
    <div className='tasksList'>
      <div className='activeTasks'>
        <h2>Zadania do zrobienia:</h2>
        {activeTasks.length > 0 ? activeTasks : <h3>Nie masz narazie żadnych zadań do wykonania</h3>}
      </div>
      <hr/>
      <div className='doneTasks'>
        <h2>Zadania zrobione <em>({done.length})</em></h2>
        {doneTasks}
      </div>
    </div>
   );
}
 
export default TaskList;