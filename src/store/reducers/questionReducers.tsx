import {QuestionAction, QuestionModel} from '../actions/questionActions'

type QuestionState = {
    questions: Array<QuestionModel>
    error: string | undefined
}

const initialState = {
    questions: [] as Array<QuestionModel>,
    error: undefined
}

const QuestionReducer = (state:QuestionState = initialState,action:QuestionAction) => {
    switch(action.type){
        
        case 'ON_START':
            return{
                ...state,
                questions:action.payload
            };
        case 'ON_ERROR':
            return{
                ...state,
                error:action.payload
            };
            default:
                return state;
    }

}

export {QuestionReducer}