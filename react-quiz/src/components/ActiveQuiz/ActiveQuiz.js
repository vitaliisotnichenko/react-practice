import React from "react";
import classes from "./ActiveQuiz.css";
import AnswersList from "./AnswersList/AnswersList";

const ActiveQuiz = props => (
        <div className={classes.ActiveQuiz}>
            <p className={classes.Question}>
                <span>
                    <strong>1.</strong>&nbsp;
                    How's it going?
                </span>
                <small>4 from 12</small>
            </p>
            <AnswersList
                answers={props.answers}
            />
        </div>
)

export default ActiveQuiz