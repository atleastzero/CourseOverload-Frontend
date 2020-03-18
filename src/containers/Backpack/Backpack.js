import React from 'react'
import { useDrop } from 'react-dnd'
import ItemTypes from '../../components/Class/ItemTypes'

import Course from '../../components/Class/Class'

import classes from './Backpack.module.css'

const Backpack = () => {
    const [{ canDrop, isOver }, drop] = useDrop({
        accept: ItemTypes.COURSE,
        drop: () => ({ name: 'Backpack' }),
        collect: monitor => ({
          isOver: monitor.isOver(),
          canDrop: monitor.canDrop(),
        }),
    })

    var courses = [{
            code: "Sample123",
            name: "Sample Name", 
            description: "Sample Description", 
            credits: 3,
        }, {
            code: "PSY101",
            name: "Intro to Psych",
            description: "An introduction to Psychology",
            credits: 3
        }
    ]

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
        })
    })
    .reduce((arr, el) => {
        return arr.concat(el)
    }, []);

    return (
        <div ref={drop} className={classes.Backpack}>
            <h1>Backpack</h1>
            {transformCourses}
        </div>
    );
}

export default Backpack