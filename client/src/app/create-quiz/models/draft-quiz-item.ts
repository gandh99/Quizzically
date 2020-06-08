import { RadioOption } from './radio-option';

export interface DraftQuizItem {
    question: string,
    options: RadioOption[]
    correctOption: RadioOption
}