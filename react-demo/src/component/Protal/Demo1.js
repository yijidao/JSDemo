import React, { Component } from 'react'
import ReactDom from 'react-dom';

const modalRoot = document.getElementById('modal-root');

// React 渲染出来的元素，一般会放在离自己最近的父元素下面。
// ReactDom.createPortal 提供了一个将元素放置到界面任何节点的能力。
// ReactDom.createPortal(chilren, container) chilren：要放置的子元素， container: HTML 中的目标元素。
// 这个能力很适合做一些模态窗、Popup 的场景。
export default class Modal extends Component {

    constructor(props) {
        super(props);
        this.el = document.createElement('div');
    }

    componentDidMount() {
        modalRoot.appendChild(this.el);
    }

    componentWillUnmount() {
        modalRoot.removeChild(this.el);
    }

    render() {
        return ReactDom.createPortal(this.props.children, this.el);
    }
}

export class Parent extends Component {
    state = {
        count: 0
    };

    handleClick() {
        this.setState({ count: this.state.count + 1 })
    }

    render() {
        return (
            // 就算是通过 Portal 放置的元素，也遵循事件冒泡的规则。
            <div onClick={_ => this.handleClick() }>
                <p>click count: {this.state.count}</p>
                <Modal>
                    <Child />
                </Modal>
            </div>
        );
    }
}

function Child(params) {
    return (
        <div>
            <button >Click</button>
        </div>
    );
}
