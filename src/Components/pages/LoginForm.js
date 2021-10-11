import React, { Component } from 'react'

class LoginForm extends Component {

    state = {
        account: { username: '', password: '' }
    }

    handleSubmit = e => {
        e.preventDefault();
        console.log('submited',this.state)
    }

    handleChange = ({currentTarget: input}) => {
        const account = { ...this.state.account };
        account[input.name] = input.value;
        this.setState({ account });
    }

    render() {
        
        const { account } = this.state;

        return (
            <div className='container'>
                <h1>Login</h1>
                <form onSubmit={this.handleSubmit}>
                    <div className="mb-3" >
                        <label htmlFor="username" class="form-label">Email address</label>
                        <input
                            value={account.username}
                            onChange={this.handleChange}
                            name="username"
                            id="username"
                            type="text"
                            class="form-control"
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" class="form-label">Password</label>
                        <input
                            value={account.password}
                            onChange={this.handleChange}
                            name="password"
                            id="password"
                            type="text"
                            class="form-control"
                        />
                    </div>
                    <button type="submit" class="btn btn-primary">Login</button>
                </form>
            </div>
        )
    }
}
export default LoginForm