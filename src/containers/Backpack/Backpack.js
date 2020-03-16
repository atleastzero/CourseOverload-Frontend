import React from 'react'
import { useDrop } from 'react-dnd'

import Course from '../../components/Class/Class'

import classes from './Backpack.module.css'

const Backpack = ({ accept, onDrop }) => {
    var courses = [{
            code: "Sample123",
            name: "Sample Name", 
            description: "Sample Description", 
            prereqs: null,
            coreqs: null
        }, {
            code: "PSY101",
            name: "Intro to Psych"
        }
    ]
    
    const [{ isOver, canDrop }, drop] = useDrop({
        accept,
        drop: onDrop,
        collect: monitor => ({
          isOver: monitor.isOver(),
          canDrop: monitor.canDrop(),
        }),
      })

    let transformCourses = Object.keys(this.state.courses)
    .map((key) => {
            return [...Array(this.state.courses[key])].map((_, i) => {
            return <Course key={key + i} courseName={this.state.courses[key].name} />;
            });
    })
    .reduce((arr, el) => {
        return arr.concat(el)
    }, []);

    return (
        <div className={classes.Backpack}>
            {transformCourses}
        </div>
    );
}

export default Backpack