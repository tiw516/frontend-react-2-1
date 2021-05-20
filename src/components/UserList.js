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
                        <th>姓名</th>
                        <th>电话</th>
                        <th>邮箱</th>
                        <th>编辑</th>
                    </tr>
                    </thead>
                    <tbody>
                    {users.map(({uid, name, age, telephone, job, email}) =>
                        <tr key={uid}>
                            <td>{uid}</td>
                            <td>{name}</td>
                            <td>{telephone}</td>
                            <td>{email}</td>
                            <td><Button onClick = {() => {
                                this.setState({users});
                            }}>配置</Button></td>
                        </tr>
                    )}
                    </tbody>
                </table>
            </div>
        );
    }
}
