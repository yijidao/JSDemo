import React, { useState, useEffect } from 'react';

export default function HookDemo1(props) {
    const [count, setCount] = useState(0); // useState是状态改变的 Hook

    // ### useEffect 
    // - useEffect 是有副作用的 Hook，可以用来替换生命周期事件中的操作，如订阅、取消订阅
    // - useEffect 在每次渲染之后都会执行
    // - useEffect 默认是所有 state 改变都会执行。可以传一个数组来指定 useEffect 在哪些 state 改变之后再执行
    // - useEffect 的正确使用方式是一个状态的逻辑封装成一个 effect，来实现关注点分离，所以一个组件里面应该是有很多 useEffect
    useEffect(() => {
        console.log('call count hook');
        document.title = `click ${count} times`;
    }, [count]);

    useEffect(() => {
        console.log('call effect');
        return () => {
            console.log('call Destructor');
        };
    }, [props.id]);

    return (
        <div>
            {/* <p>clicked {count} times!</p> */}
            <button onClick={() => setCount(count + 1)}>click me</button>
        </div>
    )
}
