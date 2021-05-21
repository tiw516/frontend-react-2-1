import React, {Component} from 'react';
import 'isomorphic-fetch';
import {Button} from 'react-bootstrap';

export default class userList extends Component {
    constructor() {
        super();
        this.state = {}
    }
    async componentDidMount() {
        let users = await (await fetch(`http://localhost:8080/api/users`)).json();//主要是从后台拿json数据
        this.setState({users});
    }
    render() {
        let {users = []} = this.state;

        return (
            <div>
                <table className='table'>
                    <thead>
                    <tr>
                        <th>id</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Telephone</th>
                        <th>Job</th>
                        <th>Age</th>
                        <th>Password</th>
                        <th>Create Time</th>
                    </tr>
                    </thead>
                    <tbody>
                    {users.map(({uid, name, age, telephone, email, job, password, time}) =>
                        <tr key={uid}>
                            <td>{uid}</td>
                            <td>{name}</td>
                            <td>{age}</td>
                            <td>{telephone}</td>
                            <td>{email}</td>
                            <td>{job}</td>
                            <td>{password}</td>
                            <td>{time}</td>
                        </tr>
                    )}
                    </tbody>
                </table>
            </div>
        );
    }
}
