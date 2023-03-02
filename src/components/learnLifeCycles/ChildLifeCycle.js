import React from 'react';

class ChildLifeCycle extends React.Component {
    constructor(props) {
      super(props);
      console.log("constructor called from child")
    }

    //  static getDerivedStateFromProps(props, state) {
    //     console.log("getDrivedStateFromProps child", props, state)
    //     return state
    // }

    componentDidMount() {
        console.log("Mounting child")
    }
   render() {
    return <div>
        Child Called 
    </div>
   }
}

export default ChildLifeCycle;