// List.jsx

import React, { useState } from "react";
import { List as MUIList, ListItem, ListItemText, ListItemIcon, Divider, Avatar } from '@mui/material';
import {TextField} from "@mui/material";
import {Button} from "@mui/material";
import "./List.css"
export default function List({ arr, deleteElement, editElement }) {
    const [editIndex, setEditIndex] = useState(null);
    const [editText, setEditText] = useState("");

    const handleEditClick = (index, text) => {
        setEditIndex(index);
        setEditText(text);
    };

    const handleEditChange = (event) => {
        setEditText(event.target.value);
    };

    const handleEditSubmit = (index) => {
        editElement(index, editText); // Pass the edited text to the editElement function
        setEditIndex(null);
        setEditText("");
    };

    return (
        <div className="list">
            <MUIList>
                {arr.map((element, index)=>(
                   <ListItem key={index} className="task">
                       {editIndex === index ? (
                          <div className="editform">
                            <form onSubmit={()=>handleEditSubmit(index)}>
                             <TextField value={editText} onChange={handleEditChange} required={true} variant="filled" className="input"></TextField>
                             <Button type="submit" variant="contained" className="button"> Save </Button>
                             </form>
                          </div>
                       ):(
                        <>
                          <ListItemText primary={element}/>
                          <Button onClick={() => deleteElement(index)} type="submit" variant="contained" className="button">Delete</Button>
                          <Button onClick={() => handleEditClick(index, element)} type="submit" variant="contained" className="button">Edit</Button>
                        </>
                       )}
                   </ListItem>
                ))}
            </MUIList>
        </div>
    );
}


//1.)  We can't use traditional loops in REACT. arr.map is an amazing way to traverse the arrays in REACT.
// 2.) It is mendatory to wrap this deleteElement(index) function inside an arrow function. Else it will execute just after page rendering means nothing will be added in the list.


// 3.) Note: To traverse array in React use "arr.map()", to remove something from array use "arr.filter()" in react.
// 4.) Use forms even when you are taking single input.




