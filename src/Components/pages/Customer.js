import React, { Component } from 'react'
import axios from 'axios'

const Api = 'https://jsonplaceholder.typicode.com/users'

export class Customer extends Component {

    state = {
        posts: []
    }

    async componentDidMount() {
        // promiss
        const { data: posts } = await axios.get(Api)
        this.setState({ posts });
        console.log(posts)
    }

    handleAdd = async () => {
        const add = { id: '1', name: 'tejas', username: 'tejas_12', email: 'tejas@gmail.com' }
        const { data: post } = await axios.post(Api, add)
        console.log(post);
    }

    handleUpdate = post => {
        console.log("update")
    }

    handleDelete = post => {
        console.log("delete")
    }

    render() {
        return (
            <div className="container">
                <button type="button" class="btn btn-primary" onClick={this.handleAdd}>Add</button>
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>name</th>
                            <th>username</th>
                            <th>email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.posts.map((post) => (
                            <tr>
                                <td>{post.id}</td>
                                <td>{post.name}</td>
                                <td>{post.username}</td>
                                <td>{post.email}</td>
                                <td>
                                    <button
                                        type="button"
                                        class="btn btn-success"
                                        onClick={() => this.handleUpdate(post)}>
                                        update
                                    </button>
                                </td>
                                <td>
                                    <button
                                        type="button"
                                        class="btn btn-danger"
                                        onClick={() => this.handleDelete(post)}
                                    >
                                        delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Customer
