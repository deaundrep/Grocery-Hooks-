import React, { useEffect, useState } from "react";
import { GroceryItemContext, GroceryInputContext } from './context/context'
import { v4 as uuidv4 } from 'uuid';
import GroceryItem from './groceryItem'
import GroceryInput from './groceryInput'
import './App.css';


let groceryObj = [
  {
    id: uuidv4(),
    grocery: "Steaks",
    isCompleted: false,
  },
  {
    id: uuidv4(),
    grocery: "Potatoes ",
    isCompleted: false,
  },
]

function App() {
  const [groceryArray, setGroceryArray] = 
  useState(groceryObj);

  function addGrocery(grocery) {
    let newAddedGroceryArray = [
			...groceryArray,
      {
        id: uuidv4(),
        grocery: grocery,
        isCompleted: false,
      }
    ]
    setGroceryArray(newAddedGroceryArray)
  }

  function handleDeleteGroceryById(id) {
		console.log(id);
		let filteredArray = groceryArray.filter((item) => item.id !== id);

		setGroceryArray(filteredArray);
	}

  function handleDoneGroceryById(id) {
		console.log(id);
		let newGroceryArray = groceryArray.map((item) => {
			if (item.id === id) {
				item.isCompleted = !item.isCompleted;
			}
			return item;
		});
		setGroceryArray(newGroceryArray);
	}

  function showGroceryInput() {
    return ( 
    <GroceryInputContext.Provider value={{addGrocery}}>
      <GroceryInput />
    </GroceryInputContext.Provider>
    )
  }

  function showGrocery() {
    return groceryArray.map((item) => {
      return (
        <GroceryItemContext.Provider value={{ 
          groceryItem: item,
          handleDeleteGroceryById,
          handleDoneGroceryById, 
        }}
        >
          <GroceryItem />
        </GroceryItemContext.Provider>
      )

    }) 
  }
  return (
    <div className="App">
      {showGroceryInput()}
      {showGrocery()}
    </div>

  )
    
}

export default App;
