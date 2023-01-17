import React, { Component } from "react";

export function WithForwardRef(WrappedComponent) {
    class ForwardingRef extends Component {

        render() {
            return (
                <div>
                    <div>Higher HOC</div>
                    <WrappedComponent ref={this.props.buttonRef}/>
                </div>
            );
        }
    }

    return React.forwardRef((props, ref) => {
        return <ForwardingRef buttonRef={ref} {...props} />
    })
}