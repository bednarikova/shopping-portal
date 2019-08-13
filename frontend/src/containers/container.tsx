import * as React from "react";
import * as ReactDOM from "react-dom";
import {Provider} from "react-redux";
import {IDynamicStore} from "../redux/store";

export const renderComponentWithProvider = (component: React.ReactElement<any>, store: IDynamicStore<any, any>, rootElementId: string = "root") => {

    const elementToRender = (
        <Provider store={store}>
            {component}
        </Provider>
    );

    ReactDOM.render(elementToRender, document.getElementById(rootElementId));
};

