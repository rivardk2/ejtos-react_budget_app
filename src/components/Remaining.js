//Will be importing expense and budget from context and getting the remaining value using subtraction
import React, {useContext} from 'react';
import { AppContext } from '../context/AppContext';
const Remaining = () => {
    const {expenses, budget} = useContext(AppContext);
    const totalExpenses = expenses.reduce((total, item) => {       //using reduce function to get a toal of all the costs, assigning this to a variable and displaying the variable in your JSX
        return (total = total +item.cost);
    }, 0);
    //when the user adds an expense, this causes the state to update, which will cause all components connected to the context to re-render and update themselves with new values
    const alertType = totalExpenses > budget ? 'alert-danger' : 'alert-success';
    return (
        <div className={`alert ${alertType}`}>
            <span>Remaining: £{budget - totalExpenses}</span>
        </div>
    );
};

export default Remaining;
