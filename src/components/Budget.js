//adding text and value for your budget
//Will be importing app context and the useContext hook and pass AppContext to it 
//(this is how a component connects to the context in order to get values from global state)

import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget); //using useState hook to create a new state variable 'newBudget' and initialize it with the current value of budget
    const handleBudgetChange = (event) => {     //defining function handleBudgetChange that updates the value of 'newBudget' when the user changes the value of the input field
        setNewBudget(event.target.value);
    }
    return (
        <div className='alert alert-secondary'>
            <span>Budget: £{budget}</span>
            <input type="number" step="10" value={newBudget} onChange={handleBudgetChange}></input>    
        </div>
    );
};

export default Budget;
