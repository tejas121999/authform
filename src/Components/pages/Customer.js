import React, { Component } from 'react'
import HTTP from '../services/httpServices'
import config from '../../config.json'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import Sentry from '@sentry/react'


export class Customer extends Component {

    state = {
        posts: []
    }

    async componentDidMount() {
        // promiss
        const { data: posts } = await HTTP.get(config.ApiEndpoint)
        this.setState({ posts });
        console.log(posts)
    }

    handleAdd = async () => {
        const add = { name: 'tejas', username: 'tejas_12', email: 'tejas@gmail.com' }
        const { data: post } = await HTTP.post(config.ApiEndpoint, add)
        const posts = [post, ...this.state.posts];
        this.setState({ posts })
        console.log("Added", post);
    }

    handleUpdate = async post => {
        post.name = "update";
        await HTTP.put(config.ApiEndpoint + "/" + post.id, post);

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
            await HTTP.delete(config.ApiEndpoint + '/' + post.id);
            // throw new Error("")
            toast('post is delete')
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
                <ToastContainer />
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
