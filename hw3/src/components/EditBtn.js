import React, { Component } from 'react';
import { button } from 'react-bootstrap'

class EditBtn extends Component {
    constructor(props) {
        super(props);
        this.state = {isToggleOn: false};
    
        // This binding is necessary to make `this` work in the callback
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(state => ({
            isToggleOn: !state.isToggleOn
        }));
        let elements = document.getElementsByClassName("draggable")
        if (!this.state.isToggleOn) {
            console.log(this.state.isToggleOn+ "false")

            for (var i = 0; i < elements.length; i++) {
                elements[i].draggable = false;
                elements[i].style.opacity = 0.5;
            }
        }
        else {
            for (var i = 0; i < elements.length; i++) {
                elements[i].draggable = true;
                elements[i].style.opacity = 1;
            }
        }
    }


   render() {
       return(
           <div>
               <button onClick={this.handleClick} className="btn btn-primary">
                    {this.state.isToggleOn ? 'EDIT OFF' : 'EDIT ON'}
                </button>
           </div>
       )
   }
}
// A lot of this code taken from official react tutorial
export default EditBtn