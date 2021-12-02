import React, { useState, useEffect } from 'react';

export default function HookDemo1() {
    const [count, setCount] = useState(0); // useState是状态改变的 Hook
    useEffect(() => {
        // useEffect 有副作用的 Hook，可以用来替换生命周期事件中的操作，如订阅、取消订阅
        // useEffect 的优点之一就是可以返回一个取消订阅的函数，这样订阅和取消订阅就都在一个代码块里面了，不用拆分到不同的生命周期事件中了
        document.title = `clicked ${count} times!` 
    });

    return (
        <div>
            <p>clicked {count} times!</p>
            <button onClick={() => setCount(count + 1)}>click me</button>
        </div>
    )
}
