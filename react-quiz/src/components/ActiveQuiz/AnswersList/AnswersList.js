import React from "react";
import classes from "./AnswersList.css"
import AnswerItem from "./AnswerItem/AnswerItem";

const AnswersList = props => (
    <ul className={classes.AnswersList}>
        { props.answers.map((answer, index) => {
            return (
                <AnswerItem
                    key={index}
                    asnwer={answer}
                    onAnswerClick={props.onAnswerClick}
                />
            )
        })}
    </ul>
)

export default AnswersList