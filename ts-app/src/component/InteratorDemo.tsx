import { Button } from 'antd'
import React from 'react'
import { Route, Routes } from 'react-router'
import { BrowserRouter, Link } from 'react-router-dom'

export default function InteratorDemo() {
    return (
        <div>
            <Layout />

            <Routes>
                <Route path="/demo1" element={<Demo1 />} />
                <Route path="/demo2" element={<Demo2 />} />
                <Route path="/demo3" element={<Demo3 />} />
            </Routes>
        </div>
    )
}

function Layout() {
    return (<div>
        <nav>
            <ul>
                <li>
                    <Link to="demo1">Demo1</Link>
                </li>
                <li>
                    <Link to="demo2">Demo2</Link>
                </li>
                <li>
                    <Link to="demo3">Demo3 </Link>
                </li>
            </ul>
        </nav>
    </div>)
}

function Demo1() {
    let obj = {
        
        [Symbol.iterator]: function(){
            return {
                i : 0,
                next: function(){
                    return {
                        value: this.i++,
                        done: this.i === 5 ? true : false
                    }
                }
            }
        }
    }
    // let  o = obj[Symbol.iterator]().next()
    // while(!o.done){
    //     console.log(o)
    // }

    return (<div>demo1
        <ul>
            <li>
                <Link to="nest1">nest1</Link>
                <Link to="nest2">nest2</Link>
                <Link to="nest3">nest3</Link>
            </li>
        </ul>
    </div>);
}
function Demo2() {
    return <div>demo2</div>;
}
function Demo3() {
    return <div>demo3</div>;
}