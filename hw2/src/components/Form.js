import React, {Component} from 'react';

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            URL: '',
        };
        // this.state = {url: ''};
        // this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange = event => {
        /*
            TODO - Logic for changing state based on form changes
        */
    //    this.setState({name: event.target.name});
    //    this.setState({url: event.target.url});
        this.setState({ [event.target.name]: event.target.value });
        this.setState({ [event.target.url]: event.target.value });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        // alert('name: ' + this.state.name + " URL:" + this.state.url);
        const newRow = {name: this.state.name, URL: this.state.URL}
        this.props.handleSubmit(newRow)
        this.setState({name:'', URL:''})
        console.log(newRow)
        // this.props.handleSubmit(newRow)
    }

    render() {

        return(
            <form onSubmit={this.handleSubmit}>
                <div class="form-group">
                    <label>
                        Name: {this.state.name}
                    </label>
                    <input name="name" value={this.state.name} onChange={this.handleChange} class="form-control"/>
    
                    <label>
                        URL: {this.state.URL}
                    </label>
    
                    <input name="URL" value={this.state.URL} onChange={this.handleChange} class="form-control"/>
                </div>
                
                
                
                <input type="submit" value="Submit" class="btn btn-primary"/>
            </form>
        )
    }
}

export default Form;
