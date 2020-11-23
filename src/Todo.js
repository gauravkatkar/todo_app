import { ListItem,List,ListItemText,ListItemAvatar,Button, Modal} from '@material-ui/core'
import './Todo.css';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import React from 'react'
import db from './firebase';

function Todo(props) {
    
  
   
    return (
  
        <List >
            <ListItem>
                <ListItemAvatar>
                  
                </ListItemAvatar>
                <ListItemText primary={props.todo.todo} secondary="Todo..⏰" />
            </ListItem>

            <DeleteForeverIcon onClick={event=>db.collection('todos').doc(props.todo.id).delete()}/>
        </List>
    )
}

export default Todo
