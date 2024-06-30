//Will be importing dispatch from Context
//Allows you to dispatch a delete action, creating a function that gets called when the delete icon is clicked
import React, {useContext} from 'react';
import {IoIosAddCircle, IoIosRemoveCircle } from 'react-icons/io';
import { TiDelete } from 'react-icons/ti';
import { AppContext } from '../context/AppContext';

const ExpenseItem = (props) => {
    const { dispatch, currency } = useContext(AppContext);

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

    const decreaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: -10,
        };

        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        });
    }

    return (
        <tr>
            <td>{props.name}</td>
            <td>{currency}{props.cost}</td>
            <td><IoIosAddCircle size='2em' style={{color:'green'}} onClick={event=> increaseAllocation(props.name)}></IoIosAddCircle ></td>
            <td><IoIosRemoveCircle size='2em' style={{color:'red'}} onClick={event=> decreaseAllocation(props.name)}></IoIosRemoveCircle ></td>
            <td><TiDelete size='2em' onClick={handleDeleteExpense}></TiDelete></td>
        </tr>
    );
};

export default ExpenseItem;
