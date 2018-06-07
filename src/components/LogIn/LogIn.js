import React, {Component} from 'react'
import API from '../../utils/API'

export default class LogIn extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        };
    
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        API.getUsers().then(res => console.log(res))
    }

    handleSubmit() {
        const   email = this.state.email,
                password = this.state.password,
                userData = {email: email, password: password}

        API.createUser(userData).then(res => console.log(res))    
    }
    
    handleChange(event) {
        event.preventDefault();

        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    render() {
        return (
            <div className="container mt-4">
            <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <input type="email" className="form-control" name="email" value={this.state.email} onChange={this.handleChange} placeholder="Enter email"/>
                </div>
                <div className="form-group">
                    <input type="password" className="form-control" name="password" value={this.state.password} onChange={this.handleChange} placeholder="Password"/>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
            </div>
        )
    }
}