import React from 'react';
import { useDrop } from 'react-dnd'
import ItemTypes from '../Class/ItemTypes'

import Course from '../../components/Class/Class'

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

    var courses = [
        {
            code: "Sample123",
            name: "Sample Name", 
            description: "Sample Description", 
            credits: 3,
            prereqs: null,
            coreqs: null
        }, {
            code: "PSY101",
            name: "Intro to Psych",
            credits: 3
        }
    ]

    const moveCourse = () => {

    }

    let transformCourses = Object.keys(courses)
    .map((key) => {
            return [...Array(courses[key])].map((_, i) => {
            return <Course key={key + i} courseName={courses[key].name} />;
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