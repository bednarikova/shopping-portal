import * as React from "react";
import {MapDispatchToPropsFunction, MapStateToProps} from "react-redux";
import {IReducerFactory} from "../redux/reducers";

interface IContainer<TStateProps, TDispatchProps, TOwnProps, TReduxState> {
    containerId: string;
    reducerFactory: IReducerFactory<TReduxState>;
    mapStateToProps: MapStateToProps<TStateProps, TOwnProps, TReduxState>;
    mapDispatchToProps: MapDispatchToPropsFunction<TDispatchProps, TOwnProps>;
    initialAction?: (...args: any) => any;
}

export interface IContainerProps {
    containerId: string;
}

export abstract class Container<P extends IContainerProps, TStateProps, TDispatchProps, TOwnProps, TReduxState>
    extends React.Component<P>
    implements IContainer<TStateProps, TDispatchProps, TOwnProps, TReduxState> {
    public containerId: string = this.props.containerId;
    public abstract initialAction?: (...args: any) => any;
    public abstract mapDispatchToProps: MapDispatchToPropsFunction<TDispatchProps, TOwnProps>;
    public abstract mapStateToProps: MapStateToProps<TStateProps, TOwnProps, TReduxState>;
    public abstract reducerFactory: IReducerFactory<TReduxState>;
    // protected getConnectedComponent = withConnection(store)(this.props.containerId, ApplicationComponent, this.reducerFactory, this.mapStateToProps, this.mapDispatchToProps);;
}
