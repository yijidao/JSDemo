import React from 'react'

// 使用 js 表达式作为子元素
export function UseJsExpressionAsChild() {
    const todo = ['早睡', '看书', '天天玩'];

    return (
        <div>
            <ul>
                {todo.map(x => <li>{x}</li>)}
            </ul>
        </div>
    );
}

// 使用函数作为子元素
export function UseFunctionAsChild() {
    return (
        <div>
            <Repeat numTimes={5} >
                {x => <div>{x}</div>}
            </Repeat>
        </div>
    );
}

function Repeat(props) {
    const items = [];
    for (let i = 0; i < props.numTimes; i++) {
        items.push(props.children(i));

    }
    return <div>{items}</div>
}

// 布尔值、undefined、null 作为子元素时都不会渲染出来，所以可以用来做逻辑判断
// 如果需要显示这些值，需要转成字符串 String()
export function IgnoreElement() {
    return (
        <div>
            <div>{false}</div>
            <div>{true}</div>
            <div>{undefined}</div>
            <div>{null}</div>
            <div>{false || String(false)}</div>
            <div>{true && String(true)}</div>
            <div>{undefined || String(undefined)}</div>
            <div>{null || String(null)}</div>
        </div>
    );
}
