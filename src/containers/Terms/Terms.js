import React, { Component } from 'react';

import Term from '../../components/Term/Term'

import classes from "./Terms.module.css"

class Terms extends Component {
    state = {
        terms: {
            taken: {
                name: "Taken",
                courses: [{
                    code: "ENG101",
                    name: "Contemporary Lit", 
                    description: "Literature, contemporary style", 
                    credits: 3,
                }, {
                    code: "MAT215",
                    name: "Algebra II", 
                    description: "A continuation of algebra", 
                    credits: 3,
                }]
            },
            taking: {
                name: "Taking",
                courses: []
            },
            future: [{

            }]
        },
        totalCreditsTaken: 0,
        totalCreditsPlanned: 0
    }

    render() {

        return (
            <div className={classes.Terms}>
                <Term 
                    termName={this.state.terms.taken.name}
                    courses={this.state.terms.taken.courses}
                />
                <Term 
                    termName={this.state.terms.taking.name}
                    courses={this.state.terms.taking.courses}
                />
                {/* {this.state.terms.future} */}
            </div>
        );
    }
}

export default Terms;