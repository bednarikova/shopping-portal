import axios from "axios";
import * as React from "react";

export interface IApplicationComponentProps {
    name: string;
}

export interface IApplicationComponentDispatchProps {
    onClick: (name: string) => void;
}

export class ApplicationComponent extends React.Component<IApplicationComponentProps & IApplicationComponentDispatchProps, { name: string, data: any[] }> {

    public constructor(props: IApplicationComponentProps & IApplicationComponentDispatchProps) {
        super(props);
        this.state = {
            name: this.props.name,
            data: [],
        };
    }

    public componentDidMount() {
        axios.get("https://athanasios.azurewebsites.net/products")
            .then((response) => {
                this.setState({
                    data: response.data,
                });
            })
            .catch((error) => {
                console.log(error);
            })
            .finally(() => {
                console.log("ALWAYS EXECUTED");
            });
    }


    public render() {
        console.log("COMPSTATE", this.state.name);
        return (
            <div>
                {
                    this.state.data.map(((value) => {
                        return (
                            <div>
                                <p>{value.name}</p>
                            </div>);
                    }))
                }
            </div>
        );
    }
}