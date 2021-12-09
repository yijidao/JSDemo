import React from 'react'
import { Component } from 'react';

// Refs 可以用来获得 dom 实例或者 react 组件实例，所以可以用来做焦点功能。
// React.createRef() 创建一个 Ref，Ref.current 可以获得具体的实例
// React.createRef() 只能用于类组件，函数组件需要使用 React.useRef()
// 也可以使用回调函数的方式来使用 Ref
export default function Index() {
    return (
        <div style={{ display: 'flex' }}>
            <CustomTextInput />
            <CustomTextInputFunc />
            <CustomTextInputCallback />
        </div>
    )
}

// 类组件使用 Ref
class CustomTextInput extends Component {
    constructor(props) {
        super(props);
        this.textInput = React.createRef();
    }

    // 加载之后获得焦点
    // componentDidMount() {
    //     this.textInput.current.focus();
    // }

    handleClick() {
        this.textInput.current.focus();
    }

    render() {
        return (
            <div>
                <input type='text' style={{ width: '200px' }} ref={this.textInput} />
                <button onClick={_ => this.handleClick()}>focus input</button>
            </div>
        );
    }
}

// 函数组件使用 Ref
function CustomTextInputFunc() {
    const textInput = React.useRef(null);
    function handleClick() {
        textInput.current.focus();
    }

    return (
        <div>
            <input type='text' style={{ width: '200px' }} ref={textInput} />
            <button onClick={handleClick}>focus input</button>
        </div>
    );
}

// 通过回调的方式来使用 Ref
class CustomTextInputCallback extends Component {
    textInput = null;

    setTextInput(element) {
        this.textInput = element;
    }

    handleClick() {
        this.textInput?.focus();
    }

    render() {
        return (
            <div>
                <input type='text' style={{ width: '200px' }} ref={e => this.setTextInput(e)} />
                <button onClick={_ => this.handleClick()}>focus input</button>
            </div>
        )
    };
}