import { Component } from "react";

export class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError() {
       return  {hasError: true};
    }

    componentDidCatch(props, info) {
       
    }
    render() {
        return <div>{this.state.hasError ? "Error has Occured" : this.props.children}</div>
    }
}