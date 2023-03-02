import React from 'react';
import ChildLifeCycle from './ChildLifeCycle';

class ParentLifeCycle extends React.Component {
    constructor(props) {
        super(props)
        console.log("constructor called from Parent");
    }

    // static getDerivedStateFromProps(props, state) {
    //     console.log("getDrivedStateFromProps parent", props, state)
    //     return state
    // }

    componentDidMount() {
        console.log("Mounting parent")
    }
    render() {
        return <div>
            Parent
            <ChildLifeCycle name="Yadwinder"/>
        </div>
    }
}

export default ParentLifeCycle;