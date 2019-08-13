import * as React from "react";
import * as ReactDOM from "react-dom";
import {Container} from "reactstrap";
import {LoginForm} from "./components/form/LoginForm";

// export const store = initStore();


export class Index extends React.Component {

    public render() {
        return (
            <Container>
                <LoginForm defaultUsername={"Blabla default username"}/>
            </Container>
        );
    }
}

ReactDOM.render(<Index />, document.getElementById("root"));
