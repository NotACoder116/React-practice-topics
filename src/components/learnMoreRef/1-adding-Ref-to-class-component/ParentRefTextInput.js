import React, { Component } from "react";
import RefTextInput from "./RefTextInput";

export default class ParentRefTextInput extends Component {
    constructor(props) {
        super(props);
        this.componentRef = React.createRef();
    }

    componentDidMount() {
        console.log(this.componentRef.current.focusInput())
    }

    render() {
        return (
            <RefTextInput ref={this.componentRef}/>
        );
    }
} 