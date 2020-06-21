import { RadioOption } from './radio-option';

export interface QuizQuestion {
    id: number,
    question: string,
    options: RadioOption[]
}