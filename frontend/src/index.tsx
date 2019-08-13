import * as React from "react";
import {renderComponentWithProvider} from "./containers";
import {ApplicationContainer} from "./containers/ApplicationContainer";
import {initStore} from "./redux/store";

export const store = initStore();

renderComponentWithProvider(<ApplicationContainer containerId={"init"}/>, store);

