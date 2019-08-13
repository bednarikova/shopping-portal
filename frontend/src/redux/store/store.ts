import * as React from "react";
import {connect, MapDispatchToPropsFunction, MapStateToProps} from "react-redux";
import {combineReducers, createStore, Reducer} from "redux";
import {createReducer, IReducerFactory, updateObject} from "../reducers";
import {IDynamicStore} from "./types";


const emptyReducer = createReducer({}, {});

export const initStore = (reducer: Reducer<any> = emptyReducer): IDynamicStore<any, any> => {
    const initialStore = createStore(reducer);

    let enhancedStore = updateObject(initialStore, {asyncReducers: {}}) as IDynamicStore<any, any>;

    const injectReducer = (key: string, asyncReducer: Reducer<any>) => {
        enhancedStore.asyncReducers[key] = asyncReducer;
        enhancedStore.replaceReducer(combineReducers({
            ...emptyReducer,
            ...enhancedStore.asyncReducers,
        }));
    };

    enhancedStore = updateObject(enhancedStore, {injectReducer}) as IDynamicStore<any, any>;

    return enhancedStore;
};

export const withConnection = (store: IDynamicStore<any, any>) => <TStateProps, TDispatchProps, TOwnProps, TReduxState>(
    containerId: string,
    Component: React.ComponentType<TStateProps & TDispatchProps & TOwnProps>,
    reducerFactory: IReducerFactory<TReduxState>,
    mapStateToProps: MapStateToProps<TStateProps, TOwnProps, TReduxState>,
    mapDispatchToProps: MapDispatchToPropsFunction<TDispatchProps, TOwnProps>,
    initialAction?: (...args: any) => any
) => {
    store.injectReducer(containerId, reducerFactory());

    if (initialAction) {
        store.dispatch(initialAction());
    }

    const mapStateToComponentProps = (state: any, ownProps: any) => {
        return mapStateToProps(state[containerId], ownProps);
    };

    return connect<TStateProps, TDispatchProps, TOwnProps, TReduxState>(mapStateToComponentProps, mapDispatchToProps)(Component as any);
};
