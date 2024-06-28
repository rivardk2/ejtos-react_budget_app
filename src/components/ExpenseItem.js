//Will be importing dispatch from Context
//Allows you to dispatch a delete action, creating a function that gets called when the delete icon is clicked
import React, {useContext} from 'react';
import { TiDelete } from 'react-icons/ti';
import { AppContext } from '../context/AppContext';

const ExpenseItem = (props) => {
    const { dispatch } = useContext(AppContext);

    //dispatching an action. The action contains the type (so the reducer knows how to update the state) and the payload
    //You are passing the ID of this expense (which you get from the props when you rendered the ExpenseList)
    const handleDeleteExpense = () => {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: props.id,
        });
    };

    const increaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };

        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        });
    }

    return (
        <tr>
            <td>{props.name}</td>
            <td>£{props.cost}</td>
            <td><button onClick={event=> increaseAllocation(props.name)}>+</button></td>
            <td><TiDelete size='1.5em' onClick={handleDeleteExpense}></TiDelete></td>
        </tr>
    );
};

export default ExpenseItem;
