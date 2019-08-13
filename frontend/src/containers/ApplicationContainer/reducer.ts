import {combineReducers} from "redux";
import {createReducer, IPartialReducer, IReducerFactory} from "../../redux/reducers";
import {CHANGE_NAME_ACTION_TYPE} from "./action";

export interface IApplicationReduxState {
    data: IApplicationReduxDataState;
}

interface IApplicationReduxDataState {
    name: string;
}

export const applicationReducerFactory: IReducerFactory<IApplicationReduxState> = () =>
    combineReducers<IApplicationReduxState>({
        data: applicationDataReducer,
    });

const changeNamePartialReducer: IPartialReducer<IApplicationReduxDataState> =
    (state, action) => {
        return {
            name: action.name,
        };
    };

const applicationDataReducer = createReducer<IApplicationReduxDataState>(
    {
        name: "MOJE MENO",
    },
    {
        [CHANGE_NAME_ACTION_TYPE]: changeNamePartialReducer,
    }
);

