import React from 'react';
import { useDrop } from 'react-dnd'
import ItemTypes from '../Class/ItemTypes'

import classes from './Term.module.css'

const Term = ({ termName }) => {
    const [{ canDrop, isOver }, drop] = useDrop({
        accept: ItemTypes.COURSE,
        drop: () => ({ name: termName }),
        collect: monitor => ({
          isOver: monitor.isOver(),
          canDrop: monitor.canDrop(),
        }),
    })
    
    return (
        <div className={classes.Term}>
            <h1>{termName}</h1>
        </div> 
    )
}

export default Term