import React, { Component } from 'react';

import Class from '../../components/Class/Class'

class Backpack extends Component {
    state = {
        classes: [{
                code: "Sample123",
                name: "Sample Name", 
                description: "Sample Description", 
                prereqs: null,
                coreqs: null
            }
        ]
    }

    render() {
        let transformClasses = Object.keys(this.state.classes)
        .map((key) => {
             return [...Array(this.state.classes[key])].map((_, i) => {
                return <Class key={key + i} />;
             });
        })
        .reduce((arr, el) => {
            return arr.concat(el)
        }, []);

        return (
            <div>
                {transformClasses}
            </div>
        );
    }
}

export default Backpack