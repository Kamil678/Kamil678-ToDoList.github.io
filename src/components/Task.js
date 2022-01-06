import React from 'react';
import "./Task.css"

const Task = (props) => {

  const importantStyle = {
    color: 'red',
  }    

  const {text, date, id, active, important, finishDate} = props.task;

  if(active){
  return ( 
    <div className='task'>
      <p style={important ? importantStyle : null}>{text}</p> <span className='date'> (do {date})</span>
      <button className='doneTask' onClick={() => props.change(id)}>Zrobione</button>
      <button className='deleteTask' onClick={() => props.delete(id)}>Usuń</button>
    </div>
   );
  } else{

      const doneDate = new Date(finishDate).toLocaleString()
      return(
        <div className='done'>
          <p>
            <strong>{text}</strong><br/>- miałeś zrobić do <span>{date}</span><br/>
            -wykonano <span className='done-date'>{doneDate}</span>
            <button onClick={() => props.delete(id)}>X</button>
          </p>
        </div>
      )
   }
}
 
export default Task;