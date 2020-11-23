import React, {useEffect, useState} from 'react';
import Todo from './Todo';
import { Button,FormControl,InputLabel,Input } from '@material-ui/core';
import db from './firebase.js';
import firebase from 'firebase';

import './App.css';

function App() {
const[todos,  setTodos ]= useState([]);
const [input, setInput] = useState('');
// console.log('YOYOYO',input);

useEffect(()=>{
// this code here...fires when app.js loads
db.collection('todos').orderBy('timestamp','desc').onSnapshot(snapshot=>{
  setTodos(snapshot.docs.map(doc=>({id:doc.id, todo: doc.data().todo})))
})
},[]);

const addTodo = (event)=>{
  // this will work when we will click button
   event.preventDefault(); //tp prevent it form refreshing

   db.collection('todos').add({
     todo:input,
     timestamp: firebase.firestore.FieldValue.serverTimestamp()
   })
  
  setTodos([...todos,input])
  setInput(''); //clear input from input bar
}

  return (
    <div className="App">
      <h1>ToDo App🚀</h1>
      <form>
      
      <FormControl>
        <InputLabel>✔ Write a Todo</InputLabel>
        <Input value={input} onChange={event => setInput(event.target.value)} />
      </FormControl>
      <Button disabled={!input} type="submit" onClick={addTodo} variant="contained" color="primary">
        Add ToDo
      </Button>
      
      </form>
      
      <ul>
        {todos.map(todo=>(
          <Todo todo={todo}/>
          // <li>{todo}</li>
        ))}
         
      </ul>
    </div>
  );
}

export default App;
