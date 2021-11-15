import React from 'react';

/**
 * yarn add jalali-moment
 * OR
 * npm install jalali-moment -S
 */
import moment from 'jalali-moment';

import './ExpenseDate.css';

const ExpenseDate = (props) => {
//   const month = props.date.toLocaleString('en-US', { month: 'long' });
//   const day = props.date.toLocaleString('en-US', { day: '2-digit' });
//   const year = props.date.getFullYear();

  return (
    <div className='expense-date'>
      {moment(props.date).format('jYYYY/jMM/jDD')}
//       <div className='expense-date__month'>{month}</div>
//       <div className='expense-date__year'>{year}</div>
//       <div className='expense-date__day'>{day}</div>
    </div>
  );
};

export default ExpenseDate;
