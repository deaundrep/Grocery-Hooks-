import React, { useContext } from 'react'
import { GroceryItemContext } from './context/context'

function GroceryItem() {
    const {
        groceryItem: { id, grocery, isCompleted },
        handleDeleteGroceryById,
        handleDoneGroceryById,
    } = useContext(GroceryItemContext)
    useContext(GroceryItemContext);
    // console.log(groceryItem);
    return (
        <div>
            <span style={{textDecoration: isCompleted ? "line-Through" : ""}}>
                {grocery}
                </span>
            <button>Done</button>
            <button onClick={() => handleDeleteGroceryById(id)}>Delete</button>
        </div>
    );
}

export default GroceryItem;