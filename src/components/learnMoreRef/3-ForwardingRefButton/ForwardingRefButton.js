import React, { Component } from "react";
import { WithForwardRef } from "./WithForwardRef";

class ForwardingRefButton extends Component {
    render() {
        return (
            <input type="text" ref={this.props.buttonRef}/>
        )
    }
}

export default WithForwardRef(React.forwardRef((props, ref) => {
    return <ForwardingRefButton buttonRef={ref} {...props} />
}))