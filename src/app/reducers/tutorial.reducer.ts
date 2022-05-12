import * as TutorialActions from "../actions/tutorial.actions";
import { Tutorial } from "../models/tutorial.model";

const initialState: Tutorial = {
    name: 'Hello',
    url: 'eret'
};

export function reducer(state: Tutorial[] = [], action: TutorialActions.Actions) {
    switch (action.type) {
        case TutorialActions.ADD:
            return [...state, action.payload];
        case TutorialActions.REMOVE:
            const newState = [...state];
            newState.splice(action.payload, 1);
           return newState;
        default:
            return state;
    }
}