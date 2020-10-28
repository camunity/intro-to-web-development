import React, { Component } from 'react';

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Name: '',
            Url: ''
        }
    }
    handleChange = (event) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        const url = target.url
        this.setState({
            [name]: value,
            [url]: value
        });
    }

    onFormSubmit = (event) => {
        event.preventDefault();
        this.setState({
            name: "",
            url: ""
        });
        this.props.handleSubmit(this.state);
    }

    render() {

        return (

            <form>
                <label for="Name"> Name </label><br />
                <input type="text" id="name" name="name" value={this.state.name} onChange={this.handleChange} /><br />
                <label for="Url"> URL </label><br />
                <input type="text" id="url" name="url" value={this.state.url} onChange={this.handleChange} /><br />
                <input type="submit" value="Submit" onClick={this.onFormSubmit} />
            </form>
        )
    }
}
export default Form;