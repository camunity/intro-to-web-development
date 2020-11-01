  import React, { Component } from 'react';
  import ReactDOM from 'react-dom';



class DesignPad extends Component {
    state = {
        buttons: [
            {id:"1",name:"1"},
            {id:"2",name:"2"},
            {id:"3",name:"3"},
            {id:"4",name:"4"},
        ]
    }


    // Not necessary
    onDragOver = (ev, name) => {
        ev.preventDefault();
    }

    onDrop = (ev, name) => {
        var colid = ev.dataTransfer.getData("id");
        let element = document.getElementById(name)
        ReactDOM.findDOMNode(element).style.backgroundColor = colid
        ev.preventDefault();
    }

    render() {
        var btns = []
        this.state.buttons.forEach ((t) => {
            btns.push(
                <div key={t.name}
                className="designpad"  id={t.id}
                style={{backgroundColor: 'white'}} 
                onDragOver={(ev)=>this.onDragOver(ev, t.name)} 
                onDrop={(e)=>this.onDrop(e, t.name)}>
                </div>
            );
        });

        return(
            <div className="ds-container">
                {btns}
            </div>
            
        )
    }
}

export default DesignPad