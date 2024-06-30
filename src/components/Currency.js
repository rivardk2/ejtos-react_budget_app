import React, {useContext} from 'react';
import { AppContext } from '../context/AppContext';

function CurrencyDropdown() {
    const {dispatch, currency} = useContext(AppContext);

    const handleCurrencyChange = (event) => {
    const updatedCurrency = event.target.value;
    const currencySymbol = updatedCurrency.split(" ")[0];
    dispatch({
      type: "CHG_CURRENCY",
      payload: currencySymbol,
    });
  };

    return (
        <select className='alert alert-success' value={currency} onChange={handleCurrencyChange}>
            <option defaultValue>Select Currency</option>
            <option value="$">$ Dollar</option>
            <option value="£">£ Pound</option>
            <option value="€">€ Euro</option>
            <option value="₹">₹ Rupee</option>
        </select>
    );

}

export default CurrencyDropdown;