import React from 'react';
// ### 指定 React 的元素类型

export default function DotSyntax() {
    const Component = { Hello, World };
    return (
        // 使用点语法使用一个模块中的多个组件
        <div>
            <Component.Hello />
            <Component.World />
        </div>
    )
}



// 在运行时决定组件
export function GetComponentAtRuntime(prop) {
    const Component = {
        hello: Hello,
        world: World
    }

    // 这种写法错误
    // return (
    //     <div>
    //         <Component[props.type] />
    //     </div>
    // )

    // 这种写法正确，可以用一个首字母大写的变量来代替组件
    let TargetComponent = Component[prop.type];
    
    return (
        <div>
            <TargetComponent />
        </div>
    );
}

// 错误！用户自定义组件应该以大写字母开头：
function hello() {
    return (
        // div 没有问题，因为 div 是个有效 html 标签
        <div>
            hello
        </div>
    )
}

// 正确！
function Hello() {
    return (
        <div>
            'Hello'
        </div>
    )
}

// jsx 就是 React 的简写
function World() {
    return (
        React.createElement('div', {}, 'world')
    )
}