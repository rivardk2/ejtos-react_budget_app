//adding text and value for your budget
//Will be importing app context and the useContext hook and pass AppContext to it 
//(this is how a component connects to the context in order to get values from global state)

import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
import ExpenseList from './ExpenseList';

const Budget = () => {
    //using useState hook to create a new state variable 'newBudget' and initialize it with the current value of budget
    //defining function handleBudgetChange that updates the value of 'newBudget' when the user changes the value of the input field
    const { budget , expenses, dispatch } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    const handleBudgetChange = (event) => {
        const updatedBudget = parseInt(event.target.value);
        setNewBudget(event.target.value);

        if(ExpenseList.length>0) {
            let totalExpenses = expenses.reduce((total, item) => {
                return (total = total + item.cost);
            }, 0);
            if(updatedBudget < totalExpenses) {
                setNewBudget(budget);
                alert("You cannot reduce the budget value lower than the spending");
                return;
            };
        };
        dispatch ({
            type: 'SET_BUDGET',
            payload: updatedBudget,
        });
    };
    return (
        <div className='alert alert-secondary'>
            <span>Budget: £ </span>
            <input type="number" step="10" value={newBudget} onChange={handleBudgetChange}></input>  
        </div>
    );
};

export default Budget;
