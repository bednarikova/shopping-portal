import {Action, AnyAction, Reducer} from "redux";

export type IReducerFactory<S> = () => Reducer<S>;

export type IPartialReducer<S, A extends Action = AnyAction> = (state: S, action: A) => Partial<S>;