
import { Component } from "react";


//class component
class Header extends Component{
    render(){
        return(<h1> Hello ,I am {this.props.data} </h1>)
    }
    
    
}
export default Header;
