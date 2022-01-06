import React, { Component } from 'react';
import './AddTask.css';

class AddTask extends Component {

  minDate = new Date().toISOString().slice(0,10);

  state = {
    text: '',
    checked: false,
    date: this.minDate,
  }

  handleTextChange = (e) =>{
    this.setState({
      text: e.target.value
    })
  }
  
  handleCheckboxChange = (e) => {
    this.setState({
      checked: e.target.checked
    })
  }

  handleDateChange = (e) => {
    this.setState({
      date: e.target.value
    })
  }

  handleClickBtn = () => {
    const {text,checked,date} = this.state
    const add = this.props.add(text, checked, date)
    if(add) {
      this.setState({
        text: "",
        checked: false,
        date: this.minDate,
      })
    }
  }

  render() { 
  let maxDate = this.minDate.slice(0,4)*1 + 2;
  maxDate = maxDate + "12-31";

  return (
    <div className='addTaskForm'>
      <input 
        type='text' 
        placeholder="Dodaj zadanie..." 
        value={this.state.text} 
        onChange={this.handleTextChange}
      />
      <input 
        type="checkbox" 
        checked={this.state.checked} 
        id="important" 
        onChange={this.handleCheckboxChange}
      />
      <label htmlFor='important' className='important'>Priorytet</label><br/>
      <label htmlFor='date'>Do kiedy zrobić: </label>
      <input 
        type="date" 
        value={this.state.date} 
        min={this.minDate} 
        max={maxDate} 
        onChange={this.handleDateChange}
      /> <br/>
      <button onClick={this.handleClickBtn}>Dodaj</button>
    </div>
    );
  }
}
 
export default AddTask;

 