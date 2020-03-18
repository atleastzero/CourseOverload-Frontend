import React from 'react';
import { useDrop } from 'react-dnd'
import ItemTypes from '../Class/ItemTypes'

import Course from '../../components/Class/Class'

import classes from './Term.module.css'

const Term = ({ termName, courses }) => {
    const [{ canDrop, isOver }, drop] = useDrop({
        accept: ItemTypes.COURSE,
        drop: () => ({ name: termName }),
        collect: monitor => ({
          isOver: monitor.isOver(),
          canDrop: monitor.canDrop(),
        }),
    })

    let transformCourses = Object.keys(courses)
    .map((key) => {
            return [...Array(courses[key])].map((_, i) => {
            return <Course 
                        key={key + i}  
                        courseCode={courses[key].code}
                        courseName={courses[key].name} 
                        courseDescription={courses[key].description} 
                        courseCredits={courses[key].credits}
                    />;
            });
    })
    .reduce((arr, el) => {
        return arr.concat(el)
    }, []);
    
    return (
        <div ref={drop} className={classes.Term}>
            <h1>{termName}</h1>
            {transformCourses}
        </div> 
    )
}

export default Term