import { RadioOption } from './radio-option';

export interface Question {
    question: string,
    options: RadioOption[]
    correctOption: RadioOption
}