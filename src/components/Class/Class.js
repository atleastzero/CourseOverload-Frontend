import React from 'react'
import { useDrag } from 'react-dnd'
import ItemTypes from './ItemTypes'

import classes from './Class.module.css'

const Course = ({ courseName }) => {
    const [{ isDragging }, drag] = useDrag({
        item: { courseName, type: ItemTypes.COURSE },
        end: (item, monitor) => {
            const dropResult = monitor.getDropResult()
            if (item && dropResult) {
                alert(`You dropped ${item.courseName} into ${dropResult.name}!`)
                
            }
        },
        collect: monitor => ({
            isDragging: monitor.isDragging(),
        }),
    })
    
    return ( 
        <div ref={drag} className={classes.Course}>
            {courseName}
        </div>
    )
}

export default Course