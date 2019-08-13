import * as React from "react";
import {MapDispatchToPropsFunction, MapStateToProps} from "react-redux";
import {ApplicationComponent} from "../../components/ApplicationComponent/ApplicationComponent";
import {store} from "../../index";
import {IReducerFactory} from "../../redux/reducers";
import {withConnection} from "../../redux/store";
import {Container, IContainerProps} from "../types";
import {changeNameActionCreator} from "./action";
import {applicationReducerFactory, IApplicationReduxState} from "./reducer";

interface IApplicationProps {
    name: string;

}

interface IApplicationDispatchProps {
    onClick: (name: string) => void;
}

// tslint:disable-next-line:no-empty-interface
interface IApplactionOwnProps {
}

type IApplicationContainerProps = IContainerProps & {};


export class ApplicationContainer extends Container<IApplicationContainerProps, IApplicationProps, IApplicationDispatchProps, IApplactionOwnProps, IApplicationReduxState> {

    public reducerFactory: IReducerFactory<IApplicationReduxState> = applicationReducerFactory;

    public mapStateToProps: MapStateToProps<IApplicationProps, IApplactionOwnProps, IApplicationReduxState> = (state: IApplicationReduxState) => {
        return {
            name: state.data.name,
        };
    };

    public mapDispatchToProps: MapDispatchToPropsFunction<IApplicationDispatchProps, IApplactionOwnProps> = (dispatch) => {
        return {
            onClick: (name: string) => {
                dispatch(changeNameActionCreator(name));
            },
        };
    };

    public initialAction?: (...args: any) => any = undefined;

    private connectedComponent = withConnection(store)(this.props.containerId, ApplicationComponent, this.reducerFactory, this.mapStateToProps, this.mapDispatchToProps);

    public render() {
        return (
            <>
                <this.connectedComponent/>
            </>
        );
    }

}
