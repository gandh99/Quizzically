import { RadioOption } from './radio-option';

export interface DraftQuizItem {
    id: number,
    question: string,
    options: RadioOption[]
    correctOption: RadioOption
}