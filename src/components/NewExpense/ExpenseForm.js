import React from 'react'
import './ExpenseForm.css';

function ExpenseForm() {
    return ( 

         <form> 
          <div className="new-expense__contrls">
              <div className="new-expense__control">
                  <lable>Title</lable>
                  <input type="text"/>
          </div>
          <div className="new-expense__control">
                  <lable>Amount</lable>
                  <input type="number" min="0.01" step="0.01" />
          </div>
          <div className="new-expense__control">
                  <lable>Date</lable>
                  <input type="date" min="2020-01-01" max="2022-12-31"/>
          </div>
          </div>
          <div className="new-expense__actions">
              <butoon type="submit">Add Expense</butoon>
          </div>
      </form>
    );
};

export default ExpenseForm
