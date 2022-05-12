import { Action } from "@ngrx/store";
import { Tutorial } from "../models/tutorial.model";

export const ADD = '[TUTORIAL] Add';
export const REMOVE = '[TUTORIAL] Remove';


export class AddTutorial implements Action {
    readonly type = ADD;
    constructor(public payload: Tutorial) {
    }
}

export class RemoveTutorial implements Action {
    readonly type = REMOVE;
    constructor(public payload: number) {
    }
}

export type Actions = AddTutorial | RemoveTutorial;