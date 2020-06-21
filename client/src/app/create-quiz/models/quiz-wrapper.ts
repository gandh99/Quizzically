import { QuizOverview } from './quiz-overview';
import { QuizQuestion } from './quiz-question';

// This is the shape of the JSON data sent to the server
export interface QuizWrapper {
    quizOverview: QuizOverview,
    quizQuestions: QuizQuestion[]
}