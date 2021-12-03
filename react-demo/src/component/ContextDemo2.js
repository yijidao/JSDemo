import React, { Component } from 'react';
import { UserContext } from './UserContext';


export default class ContextDemo2 extends Component {
    static contextType = UserContext;
    constructor(props) {
        super(props);
        console.log(this.context);
    }

    render() {
        const {username, age} = this.context;
        return (
            <div>
                <p>
                    username: {username}
                </p>
                <p>
                    age: {age}
                </p>
            </div>
        )
    }
}
