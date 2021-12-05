import React, { useEffect, useState } from 'react';
import DataSource from './DataSource';

// 高阶函数组件 ，抽象订阅取消订阅逻辑，封装到一个组件中，就像一个切面
export default function WithSubscription(WrappedComponent, getData) {

    return class extends React.Component {

        constructor(props) {
            super(props);
            this.state = {
                item: []
            };
            this.handleChange = () => {
                let data = getData();
                // console.log(data);
                this.setState({ item:  data});
            };
        }

        componentDidMount() {
            DataSource.addListener(this.handleChange);
        }

        componentWillUnmount() {
            DataSource.removeListener(this.handleChange);
        }


        render() {
            console.log('render');
            return <WrappedComponent item={this.state.item} />
            // return wrappedComponent(this.setState.item ?? []);
        };
    };
    // return (
    //     <wrappedComponent item={item} />
    // )
}
