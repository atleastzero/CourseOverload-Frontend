import React, { Component } from 'react';

import Term from '../../components/Term/Term'

import classes from "./Terms.module.css"

class Terms extends Component {
    state = {
        terms: {
            taken: <Term termName="Taken"></Term>,
            taking: <Term termName="Taking"></Term>,
            future: []
        },
        totalCreditsTaken: 0,
        totalCreditsPlanned: 0
    }

    render() {

        return (
            <div className={classes.Terms}>
                {this.state.terms.taken}
                {this.state.terms.taking}
                {/* {this.state.terms.future} */}
            </div>
        );
    }
}

export default Terms;