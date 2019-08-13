import {AnyAction, Reducer, Store} from "redux";

export interface IDynamicStore<S, A extends AnyAction> extends Store<S, A> {
    asyncReducers: { [key: string]: Reducer<any> };
    injectReducer: (key: string, asyncReducer: Reducer<any>) => void;
}
