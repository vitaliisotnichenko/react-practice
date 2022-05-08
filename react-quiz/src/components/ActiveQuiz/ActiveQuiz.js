import React from "react";
import classes from "./ActiveQuiz.css"

const ActiveQuiz = props => (
        <div className={classes.ActiveQuiz}>
            <p className={classes.Question}>
                <span>
                    <strong>1.</strong>&nbsp;
                    How's it going?
                </span>
                <small>4 from 12</small>
            </p>
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
                <li>4</li>
            </ul>
        </div>
)

export default ActiveQuiz