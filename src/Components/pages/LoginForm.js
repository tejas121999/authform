import React from 'react'
import Joi from 'joi-browser'
import Form from '../common/Form';

class LoginForm extends Form {

    state = {
        data: { username: '', password: '' },
        errors: {}
    }

    schema = {
        username: Joi.string().required(),
        password: Joi.string().required()
    };

    doSubmit = () => {
        // call the server
        console.log('submited', this.state.data)
    }

    render() {


        return (
            <div className='container'>
                <h1>Login</h1>
                <form onSubmit={this.handleSubmit}>
                    {this.renderInput('username', 'Username')}
                    {this.renderInput('password' ,'Password', 'password')}
                    {this.renderButton("Login")}
                </form>
            </div>
        )
    }
}
export default LoginForm