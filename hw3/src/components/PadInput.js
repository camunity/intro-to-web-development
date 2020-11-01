  
import React, { Component } from 'react';

class PadInput extends Component {
    state = {
        colors: [
            {id:"blue",name:"blue"},
            {id:"red",name:"red"},
            {id:"blue",name:"lightgreen"},
            {id:"red",name:"orange"},
        ]
    }
    onDragStart = (ev, id) => {
        ev.dataTransfer.setData("id", id);
    }

    render() {
        var btns = []
        this.state.colors.forEach ((t) => {
            btns.push(
                <div key={t.name} 
                    onDragStart = {(e) => this.onDragStart(e, t.name)}
                    draggable
                    className="draggable"
                    id="inputs"
                    style = {{backgroundColor: t.name}}
                    >
                    {t.name}
                </div>
            );
        });

        return(
            <div className="pad-input-container" id="input">
            {btns}     
            </div>           
        )
    }
}

export default PadInput