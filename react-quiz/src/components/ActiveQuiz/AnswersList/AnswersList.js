import React from "react";
import classes from "./AnswersList.css"
import AnswerItem from "./AnswerItem/AnswerItem";

const AnswersList = props => (
    <ul className={classes.AnswersList}>
        { props.answers.map((answer, index) => {
            return (
                <AnswerItem
                    asnwer={answer}
                />
            )
        })}
    </ul>
)

export default AnswersList