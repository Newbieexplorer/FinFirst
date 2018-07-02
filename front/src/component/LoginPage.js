import React, { Component } from 'react';
import { Container, Button, Input } from 'reactstrap';
import axios from 'axios';
import '../css/Login.css';
import '../bootstrap.css';


class LoginPage extends Component {
    constructor(props){
        super(props);
        this.state = {
            userName: '',
            password: ''
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

    handleClick = () => {
        axios.post('http://localhost:1337/auth',{
            login: this.state.userName,
            password: this.state.password
            })
            .then(function (response) {
                console.log(response.data.message);
            });
    }

    render(){
        return (
            <div className="LoginPage">
                <h1 className="LoginHeader">Login</h1>
                <Input className="UserNameInput" placeholder="User name" value={this.state.userName} onChange={this.changeUserNameState}/>
                <Input className="PasswordInput" placeholder="Password" value = {this.state.password} onChange = {this.changePasswordState}/>
                <Button className="LoginBtn" color="primary" size="lg" block onClick={this.handleClick}>Login</Button>
                <p>Don't you have an account yet?</p>
                <p href="/register">1234</p>
            </div>
        );
    }
}

export default LoginPage;
