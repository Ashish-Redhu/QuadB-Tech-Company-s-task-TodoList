import { useState } from "react";
import { Button } from "@mui/material";
import Inputbox from "./Inputbox";
import List from "./List";
import "./Home.css";
export default function Home(){

    const [arr, setArr] = useState([]);

    const handleInput = (value)=>{
        // setInput(value);
        setArr((preArr)=>{
            return ([...preArr, value])
        });
    }

    const deleteElement = (index)=>{
        setArr((prevArr)=>{
            return (
                arr.filter((_, i)=>{
                    return (
                        i != index 
                    )
                })
            )
        })
    }
    const editElement = (index, newText) => {
        const updatedArr = [...arr];
        updatedArr[index] = newText;
        setArr(updatedArr);
    }

    console.log(arr);
       return(
        <div className="home">
            <div className="searchbox">
                <Inputbox handleInput={handleInput} />
            </div>
            <div className="list">
                <List arr={arr} deleteElement={deleteElement} editElement={editElement}/>
            </div>
            
        </div>
       )
}

// Now: As I have implemented the functionality of delete inside Home.jsx, I want to implement the edit functionality also inside Home.jsx

