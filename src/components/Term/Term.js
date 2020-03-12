import React from 'react';

import classes from './Term.module.css'

const term = props => (
    <div className={classes.Term}>
        {props.termName}
    </div>
)

export default term