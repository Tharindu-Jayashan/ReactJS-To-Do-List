import React, { useState } from 'react'
import './Main.css'

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Todo from '../Todo/Todo';


export default function Main() {

    const [items, setItems] = useState(["walk the dog","pick up the joe","go to the supermarket"]);
    const [item, setItem] = useState("");

    const addItem = (item1)=>{
      if(item.trim() !== ("")){ //check empty or not

        const newItems = [...items,item1]
        setItems(newItems)
      }
      else{
        alert("Please Enter Something..")
      }  
    }

    function deleteItem(key){
      setItems((items)=>items.filter((item1,i)=>i!=key))
    }
    function deleteAll(){
      setItems([])
    }
    
  return (
    <div className='main'>
        <h1 className='mainHeading'>what is on the calander today?</h1>

    <Box 
           sx={{ width: 500, maxWidth: '100%' }} className="inputMain">
           <TextField fullWidth label="Add your items" id="fullWidth"  onChange={(e)=>{setItem(e.target.value)}}/>
    </Box>

    <Button variant="contained" style={{'marginTop':'20px','marginLeft':'48%'}} onClick={()=>{addItem(item)}} >Add</Button>

    <Button style={{'marginTop':'20px','marginLeft':'47%', ':Hover':'red'}} onClick={()=>{deleteAll()}} > Delete all </Button>

    <div className='items'>
     {items.map((item, index)=>{
      return(
        <div key={index}>
        <Todo data={item}/>
        <button className='btndelete' onClick={()=>{deleteItem(index)}}>Delete</button>
        </div>
      )
     })}
    </div>
    
    </div>
  )
}
