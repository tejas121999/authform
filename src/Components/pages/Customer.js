import React, { Component } from 'react'
import axios from 'axios'

axios.interceptors.response.use(null, error => {
    const expectedError =
        error.response &&
        error.response.status >= 400 &&
        error.response.status < 500
    if (!expectedError) {
        console.log('Loggin the error', error)
        alert("an unexpected error occure.")
    }
    return Promise.reject(error)
})

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
        const add = { name: 'tejas', username: 'tejas_12', email: 'tejas@gmail.com' }
        const { data: post } = await axios.post(Api, add)
        const posts = [post, ...this.state.posts];
        this.setState({ posts })
        console.log("Added", post);
    }

    handleUpdate = async post => {
        post.name = "update";
        await axios.put(Api + "/" + post.id, post);

        const posts = [...this.state.posts];
        const index = posts.indexOf(post);
        posts[index] = { ...post };
        this.setState({ posts });
        console.log("Update", post)
    }

    handleDelete = async post => {
        const ogPost = this.state.posts;
        const posts = this.state.posts.filter(p => p.id !== post.id);
        this.setState({ posts })
        try {
            await axios.delete(Api + '/' + post.id);
            // throw new Error("")
            // alert('sure you want to delete')
        } catch (ex) {
            if (ex.response && ex.response.status === 404)
                alert("this post has already been deleted.")
            // alert('not abel to delete')
            this.setState({ posts: ogPost })
        }
        // console.log("Delete", post)
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
