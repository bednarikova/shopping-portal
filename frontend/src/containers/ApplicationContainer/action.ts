import {Action} from "redux";

export const CHANGE_NAME_ACTION_TYPE = "CHANGE_NAME";

export interface IChangeNameAction extends Action {
    name: string;
}

export const changeNameActionCreator = (name: string): IChangeNameAction => ({
    type: CHANGE_NAME_ACTION_TYPE,
    name,
});
