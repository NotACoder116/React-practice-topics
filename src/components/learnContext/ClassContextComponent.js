import { Component } from "react";
import { ThemeContext } from "./MainContext";

class ClassContextComponent extends Component {
   render() {
    return(<ThemeContext.Consumer>
        {darkTheme => {
            return <div>ClassContextComponent -- {darkTheme ? "This is TRUE" : "This is FALSE"}</div>
        }}
    </ThemeContext.Consumer>)
   }
}

export default ClassContextComponent;