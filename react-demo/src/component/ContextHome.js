import React, { Component } from 'react';
import ContextDemo1 from './ContextDemo1';
import { UserContext } from './UserContext';

export default class ContextHome extends Component {
    state = {
        username: 'foo',
        age: 1
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }



    render() {

        const { username, age } = this.state;
        return (
            <div>
                <input type='text' name='username' style={{ width: '200px' }} value={username} onChange={x => this.handleChange(x)} />
                <input type='text' name='age' style={{ width: '200px', margin: '0px 8px' }} value={age} onChange={x => this.handleChange(x)} />


                <UserContext.Provider value={{
                    username: username,
                    age: age
                }}>
                    <ContextDemo1 />
                </UserContext.Provider>

            </div>
        )
    }
}
