import React, { Component } from 'react'

// RenderProps 就是一种 reactjs 的设计模式，主要用于复用组件逻辑，也是 HOC 的一种实现
// 复用组件通过声明一个 render 属性，这个属性是一个函数，用来渲染业务组件，通过 render 属性来提供复用组件的内部逻辑

class Mouse extends Component {
    state = {
        x: 0,
        y: 0
    }

    handleMouseMove(event) {
        this.setState({
            x: event.clientX,
            y: event.clientY
        })
    }

    render() {
        return (
            <div style={{ height: '200px', background: 'lightgreen' }} onMouseMove={e => this.handleMouseMove(e)}>
                <p>mouse position is ({this.state.x}, {this.state.y})</p>
                {/* 注意这里，精髓所在 */}
                {this.props.render(this.state)}  
            </div>
        )
    }
}

class Position extends Component {
    render() {
        const { x, y } = this.props;

        return (
            <div style={{ position: 'absolute', left: x, top: y }}>
                ({x}, {y})
            </div>
        );
    }
}


export class Tracker extends Component {
    render() {
        // 通过 render 来复用 Mouse 组件的能力
        return (
            <Mouse render={mouse => (
                <Position {...mouse} />)}></Mouse>
        );
    }
}
