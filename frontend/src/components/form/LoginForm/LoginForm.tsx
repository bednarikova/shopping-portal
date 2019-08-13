import {Field, Form, Formik} from "formik";
import * as React from "react";
import {Button} from "reactstrap";

interface ILoginForm {
    defaultUsername?: string;
}

export class LoginForm extends React.Component<ILoginForm> {

    public render() {
        return (
            <Formik
                onSubmit={((values, formikActions) => {
                    console.log(values);
                })}
                initialValues={{
                    username: this.props.defaultUsername,
                }}
            >
                {
                    () => (
                        <Form>
                            <div>
                                Username: <Field type={"text"} name={"username"}/>
                            </div>
                            <div>
                                Password: <Field type={"password"} name={"password"}/>
                            </div>
                            <Button type={"submit"}>
                                Login
                            </Button>
                        </Form>
                    )
                }
            </Formik>
        );
    }
}
