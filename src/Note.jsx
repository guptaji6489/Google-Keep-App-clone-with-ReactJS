import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';

const Note = (props)=>
{
    const [note,setNote] = useState({
        title:'',
        content:''
    });
    const inputEvent = (event)=>
    {
        const {name,value} = event.target;
        setNote((prevData)=>{
            return{
                ...prevData,
                [name]: value, 
            };
        });
    };
    
    const addEvent = ()=>
{
    props.passNote(note);
    setNote({
        title:'',
        content:''
    });

}

    return(
        <>
        <div className='main_note'>
            <form>
                <input type="text" name="title" value={note.title} onChange={inputEvent} placeholder="title" autoComplete="off" />
                <textarea rows="" name="content" column="" value={note.content} onChange={inputEvent} placeholder="write a note" />
            <Button onClick={addEvent}>
                <AddIcon  />
            </Button>
            </form>
        </div>
        </>
    );
};

export default Note;