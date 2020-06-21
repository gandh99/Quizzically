import { QuizOption } from './quiz-option';

export interface QuizQuestion {
    quizQuestionId: number,
    quizOverviewId?: number,
    questionNumber?: number,
    question: string,
    quizOptions: QuizOption[]
}