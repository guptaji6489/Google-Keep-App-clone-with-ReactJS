import React, { useState } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import Cards from './Cards';
import Header from './Header';
import Footer from './Footer';
import Note from './Note';
import Subnote from './Subnote';


function App() {
  const [addItem,setAddItem] = useState([]);

   const addNote = (note)=>
   {
      setAddItem((prevData)=>{
        return [...prevData,note];
      });

  };

  const onDelete=(id)=>
  {
    setAddItem((olddata)=>
      olddata.filter((currdata,indx)=>{
        return indx !== id;
      })
    )

  }
  return (
    <>
<Header />
<Footer />
<Note passNote={addNote} />
{
  addItem.map((val,index)=>
  {
    return(
      <Subnote 
        key={index}
        id ={index}
        title = {val.title}
        content = {val.content}
        deleteItem = {onDelete}
      />
    )
  })
}

{/* <Cards /> */}
    </>
  );
}

export default App;
