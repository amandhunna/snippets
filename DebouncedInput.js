import React, { useState, useEffect } from 'react';
import axios from 'axios';
import useDebounce from './useDebounce';

function DebouncedInput() {
  // state for input value
  const [inputValue, setInputValue] = useState('')
  // state for suggestion list
  const [suggestionList, setSuggestionList] = useState([]);
  // debounced value of inputValue
  const debouncedValue = useDebounce(inputValue, 1000);
  
  useEffect(() => {
    const getRequiredData = async () => {
      try { 
        if(!debouncedValue) {
          return;
        }
        const query = `&search_query=${debouncedValue}`;
        const url = 'https://yourURL/?limit=15' + query;

        const config = {
          method: 'get',
          url,
          headers: { }
        };

        const response = await axios(config);
        // filter and format data
        const data = responseHandler(response)
        // set data to suggestion list state
        setSuggestionList(data);
    } catch(error) {
      errorHandler(error);
    }
  };
    getRequiredData();
  }, [debouncedValue]);

  return (
	      <React.Fragment >
          <label htmlFor='city'>City</label>
	      	<input 
            id='city'
            list='cities' 
            type="text" 
            onChange={event => {
              event.preventDefault();
              const { value } = event.target;
              setInputValue(value);
            }}
            placeholder= 'Enter city name'
            type='text'
            value={inputValue}
          />
	      	 <datalist id='cities'>
	      		 {suggestionList
             .map(item => <option key={item.id} value={item.label}/>)}
            </datalist>
	      </React.Fragment>
  );
}

export default DebouncedInput;



function responseHandler (response) {
  const { data }  =  response || {};
  const list = data.map(item => ({id: item._id, label:item.value}))
  return list;
}

function errorHandler(error) {
  console.error(error);
}
