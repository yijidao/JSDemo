import React from 'react';

// ### jsx 的 props


// props 属性不复制则默认为 true
export function DefaultValueProps() {
    return (
        <Component notSetValue />
    )
}

function Component(props) {
    return (
        <div>
            {props.notSetValue.toString()}
        </div>
    )
}

// props 可以使用 ... 展开属性
export function ExpandProps() {
    return (
        <div>
            <ParentDemo firstName='first' lastName='last' />
        </div>);
}

function ParentDemo(props) {
    const { firstName, ...other } = props;
    return (
        <div>
            <span>{firstName}</span>
            <ChildDemo {...other} />
        </div>
    );
}

function ChildDemo(props) {
    return (
        <div>
            {props.lastName}
        </div>)
}