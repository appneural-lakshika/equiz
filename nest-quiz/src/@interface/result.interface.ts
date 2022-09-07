export interface IResultLive {
    userId: string,
    quizId: string,
    answers: [string],
    duration: Number,
    score: Number
}

export interface IResultPractice {
    qId: string,
    quizId: string,
    answers: [string],
    correctAnswers: Number,
    wrongAnswers: Number,
    duration: Number,
    score: Number
}


