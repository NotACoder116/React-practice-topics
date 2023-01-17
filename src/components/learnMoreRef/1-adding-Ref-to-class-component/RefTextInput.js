import React, { Component } from "react";

export default class RefTextInput extends Component {
    constructor(props) {
        super(props);
        this.inputRef = React.createRef()
    }

    focusInput = () => {
        this.inputRef.current.focus();
        this.inputRef.current.value = 'Leela Wen Dev';
    }

    render() {
        return (
            <input ref={this.inputRef} />
        )
    }
}