import React from 'react';
import Table from './Table';
import Form from './Form';

class LinkContainer extends React.Component {
    constructor(props){
        super(props)
        /* TODO - Create state object for storing favLinks */
        // this.state = {
        //     name: '',
        //     url: '',
        // };
        this.state = {
            links:[
                
            ]
        }
    }

    removeCharacter = index => {
        this.setState({links: this.state.links.filter((link, i) => i !== index)})
        // Got this code from stackoverflow...
        // https://stackoverflow.com/questions/43530395/filtering-an-array-in-react
    }

    handleSubmit = newRow => {
        this.setState({links: this.state.links.concat(newRow)})
    }

    render() {

        return (
            <div className="container">
                <h1>My Favorite Links</h1>
                <p>Add a new url with a name and link to the table.</p>
                <Table
                    linkData={this.state.links}
                    removeLink={this.removeCharacter}
                />
                
                <br/>

                <h3>Add New</h3>
                <Form
                    handleSubmit={this.handleSubmit}
                />
            </div>
            
        );
    }
}

export default LinkContainer;