//Will be adding useContext and AppContext
// Taking the expenses from state
import React, {useContext} from 'react';
import { AppContext } from '../context/AppContext';
const ExpenseTotal = () => {
    const { expenses, currency } = useContext(AppContext);
    const totalExpenses = expenses.reduce((total, item) => {    //using reduce function to get a total of all the costs, assigning this to a variable and displaying the variable in your JSX
        return (total += item.cost);
    }, 0);
    //when user adds an expense, this causes the state to update, which will cause all components connected to the context to re-render and update themselves with new values
    return (
        <div className='alert alert-primary'>
            <span>Spent so far: {currency}{totalExpenses}</span>
        </div>
    );
};

export default ExpenseTotal;