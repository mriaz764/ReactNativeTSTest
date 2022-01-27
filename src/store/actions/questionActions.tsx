import { Dispatch } from "react";

export interface QuestionModel{
    question: string;
    option1: string;
    option2: string;
    ans: string;
}

export interface StartExerciseAction {
    readonly type: 'ON_START';
    payload: Array<QuestionModel>;
}

export interface ErrorAction {
    readonly type: 'ON_ERROR';
    payload: any;
}

export type QuestionAction = StartExerciseAction | ErrorAction;

// we need to dispatch action
export const getQuestions = () =>{
    return async (dispatch: Dispatch<QuestionAction>) =>{
        const response = await getData();
        if(response==null){
            dispatch({
                type: 'ON_ERROR',
                payload: "Erro to fetch data"
            })
        }else{
            dispatch({
                type: 'ON_START',
                payload: response
            })
        }
    }

}

function getData() {
    //I will get the questions from firebase here
    return [
        {
        "question":"The ---- is small",
        "option1":"Folgen",
        "option2":"Room",
        "ans":"house"
      },
      {
        "question":"The --- is small",
        "option1":"Folgen",
        "option2":"Room",
        "ans":"Room"
      }
  ]
}
