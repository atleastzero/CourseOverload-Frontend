import React, { Component } from 'react';

import Taken from '../../components/Term/Taken/Taken'
import Taking from '../../components/Term/Taking/Taking'
import Term from '../../components/Term/Term'

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
            <div>
                {this.state.terms.taken}
                {this.state.terms.taking}
                {/* {this.state.terms.future} */}
            </div>
        );
    }
}

export default Terms;