import { Component } from "react";
import CallbackRefTextInput from "./CallbackRefTextInput";

export default class ParentCallbackRef extends Component {
    constructor(props) {
        super(props);
        this.textInput = null
    }

    componentDidMount() {
        this.textInput.focus()
        this.textInput.value = 'hello'
    }

    render() {
        return (
            <CallbackRefTextInput inputRef={el => this.textInput = el}/>
        )
    }
}

