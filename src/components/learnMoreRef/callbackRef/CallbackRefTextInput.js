import { Component } from "react";

export default class CallbackRefTextInput extends Component {
    constructor(props) {
        super(props);
        this.textInput = null;
        this.inputRef = (el) => {
            this.textInput = el;
        }
    }

    // componentDidMount() {
    //     this.textInput.focus()
    //     this.textInput.value = 'hello'
    // }

    render() {
        return (
            <div>
                <label>Callback Ref</label>
                <input ref={this.props.inputRef} />
            </div>
        );
    }
}
