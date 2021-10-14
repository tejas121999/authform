import React from 'react'
import Form from '../common/Form'
import Joi from 'joi-browser'

export class RegisterForm extends Form {

    state = {
        data: { username: '', password: '', name: '' },
        errors: {}
    }

    schema = {
        username: Joi.string()
            .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),
        password: Joi.string()
            .min(5)
            .max(50),
        name: Joi.string()
            .required()
            .min(5)
            .max(30)
    };

    doSubmit = () => {
        // call the server
        console.log('submited', this.state.data)
    }

    render() {
        return (
            <div className='container'>
                <h1>Register</h1>
                <form onSubmit={this.handleSubmit}>
                    {this.renderInput('username', 'Username')}
                    {this.renderInput('password', 'Password', 'password')}
                    {this.renderInput('name', 'Name')}
                    {this.renderButton("Register")}
                </form>
            </div>
        )
    }
}

export default RegisterForm
