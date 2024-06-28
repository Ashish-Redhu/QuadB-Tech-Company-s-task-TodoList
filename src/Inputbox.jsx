import { useState } from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./Inputbox.css";

export default function Inputbox({handleInput}){

    const [localInput, setLocalInput] = useState('');
    // let localInput=null;
    function handleChange(event){
        setLocalInput(event.target.value);
        // localInput = event.target.value;
    }

    function handleSubmit(event){
        event.preventDefault(); // this will stop the form to go to some url. Means stops form complete reloading.
        handleInput(localInput);  // this will add one more element to the parent component's array.
        setLocalInput('');     // this will again make the input fields empty.
    }
    return(
        <div className="inputbox">
           <form onSubmit={handleSubmit}>
            <TextField value={localInput} onChange={handleChange} required={true} variant="filled" label="Add task" className="input"></TextField>
            <Button type="submit" variant="contained" className="button"> Add </Button>
              {/* By default every button is of type submit. */}
           </form>
        </div>
    )
}

// onChange()-> handleChange() lagana padta ha taki hamare variables ki value change hoti rhe. Otherwise to initially jo variable ki value thi whi rhegi. Humne variable value ko input field me assign kar diya. Ab input field ko event ki help se access krke variable ki value update kr rhe h. Aur submit karne ke time pe jo variable ki value thi uske sath koi bhi operation kiya ja sakta h.
