import React, { Component } from 'react';
import { Container, Button, Input } from 'reactstrap';
import axios from 'axios';
import '../css/Authentication.css';

class Authentication extends Component {
    constructor(props){
        super(props);
        this.state = {
            userName: '',
            password: '',
            passwordInput: '',
            email: ''
        };
    }
    changeUserNameState = (event) => {
        this.setState({
            userName: event.target.value
        });
        this.forceUpdate();
    }

    changePasswordState = (event) => {
        this.setState({
            password: event.target.value
        });
        this.forceUpdate();
    }

    changePasswordInputState = (event) => {
        this.setState({
            passwordInput: event.target.value
        });
        this.forceUpdate();
    }

    changeEmailState = (event) => {
        this.setState({
            email: event.target.value
        });
        this.forceUpdate();
    }

    handleClick = () => {
        if(this.state.password == this.state.passwordInput) {
            axios.post('http://localhost:1337/register', {
                login: this.state.userName,
                password: this.state.password
            })
                .then(function (response) {
                    console.log(response.data.message);
                });
        } else {
            alert("Passwords do not match");
        }
    }
    render() {
        return (
            <div className="Authentication">
                <h1 className="AuthenticationTitle">Register</h1>
                <Input className="UserNameInput" placeholder="User name" value={this.state.userName} onChange={this.changeUserNameState}/>
                <Input className="EmailInput" placeholder="Email Address" value={this.state.email} onChange={this.changeEmailState}/>
                <Input className="PasswordInput" placeholder="Password" value={this.state.password} onChange={this.changePasswordState}/>
                <Input className="PasswordConfirmInput" placeholder="Confirm Password" value={this.state.passwordInput} onChange={this.changePasswordInputState}/>
                <Button className="RegisterBtn" color="primary" size="lg" block onClick={this.handleClick}>Register</Button>
            </div>
        );
    }
}

export default Authentication;