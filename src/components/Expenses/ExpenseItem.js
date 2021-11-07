import React, {useState} from 'react';

import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';



const ExpenseItem = (props) => {
  // const clickHandler=() =>{
  //   console.log('clicked')
  // };
  //function clickHandelrz` (){}
  const [title ,setTitle] =useState(props.title);
  const clickHandler =() =>{
    setTitle('Updated!!!!');
    console.log(title);
  }

  //2 way for declare function to pass clicked message 
  return (
    <Card className='expense-item'>
      <ExpenseDate date={props.date} />
      <div className='expense-item__description'>
        <h2>{title}</h2>
        <div className='expense-item__price'>${props.amount}</div>
      </div>
   <butoon onClick={clickHandler}>changed Title</butoon>
    </Card>
  );
}

export default ExpenseItem;
