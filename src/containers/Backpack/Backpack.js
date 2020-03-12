import React, { Component } from 'react';

import Course from '../../components/Class/Class'

class Backpack extends Component {
    state = {
        courses: [{
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
    }

    render() {
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
            <div>
                {transformCourses}
            </div>
        );
    }
}

export default Backpack