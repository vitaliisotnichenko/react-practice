import React, {Component} from "react";
import classes from './Quiz.css'
import ActiveQuiz from "../../components/ActiveQuiz/ActiveQuiz";

class Quiz extends Component {
    state = {
        activeQuestion: 0,
        quiz: [
            {
                question: 'What is the color of the sky',
                rightAnswerId: 2,
                id: 1,
                answers: [
                    { text: "Black", id:1 },
                    { text: "Blue", id:2 },
                    { text: "Red", id:3 },
                    { text: "Green", id:4 }
                ]
            },
            {
                question: 'When Paris was founded',
                rightAnswerId: 3,
                id: 2,
                answers: [
                    { text: "1700", id:1 },
                    { text: "1850", id:2 },
                    { text: "1300", id:3 },
                    { text: "1460", id:4 }
                ]
            }
        ]
    }

    onAnswerClickHandler = (answerId) => {
        console.log(answerId)
        this.setState({
            activeQuestion: this.state.activeQuestion + 1
        })
    }

    render() {
        return (
            <div className={classes.Quiz}>
                <div className={classes.QuizWrapper}>
                    <h1>Fill out the answers</h1>
                    <ActiveQuiz
                        answers={this.state.quiz[this.state.activeQuestion].answers}
                        question={this.state.quiz[this.state.activeQuestion].question}
                        onAnswerClick={this.onAnswerClickHandler}
                        quizLength={this.state.quiz.length}
                        answerNumber={this.state.activeQuestion + 1}
                    />
                </div>
            </div>
        )
    }
}

export default Quiz