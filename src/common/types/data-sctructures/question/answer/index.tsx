import AnswerOrQuestionType from "../answerOrQuestionType";

class AnswerStruct {
    constructor (
        public id: number,
        public answerType: AnswerOrQuestionType,
        public userId: number,
        public variantId?: number,
        public label?: string
    ) {}
}

export default AnswerStruct