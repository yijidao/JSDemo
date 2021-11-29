import { Button } from 'antd';
import React, { Component } from 'react';


export class Count extends Component {
    static propTypes = {

    }
    state = {
        count: 0
    }


    handleClick() {
        let { count } = this.state;
        this.setState({ count: ++count })
    }

    render() {
        return (
            <div>
                count: {this.state.count}
                <Button onClick={_ => this.handleClick()}>Click</Button>
            </div>
        )
    }
}

export default Count;
