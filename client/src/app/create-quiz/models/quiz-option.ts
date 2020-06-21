export interface QuizOption {
    quizOptionId: number,
    quizQuestionId?: number,
    text: string,
    selected: boolean,
    isCorrect: boolean
}