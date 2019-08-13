import {Action, AnyAction, Reducer} from "redux";
import {IPartialReducer} from "./types";

export function createReducer<S, A extends Action = AnyAction>(initialState: S, handlers: { [actionType: string]: IPartialReducer<S, A> }): Reducer<S, A> {
    return (state: S = initialState, action: A) => {
        if (typeof handlers[action.type] === "function") {
            const resultOfPartialReducer: Partial<S> = handlers[action.type](state, action);

            if (typeof resultOfPartialReducer === "object" && resultOfPartialReducer === null) {
                return state;
            }

            const result: S = Object.assign({}, state, resultOfPartialReducer);
            return result;
        }
        return state;
    };
}
