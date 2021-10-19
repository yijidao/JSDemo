import { Route, Switch, BrowserRouter as Router, Link } from 'react-router-dom'
import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class BasicRouting extends Component {
  static propTypes = {

  }
  // Link 用于导航
  // Route 根据匹配的URL进行渲染组件
  // Switch 用于渲染第一个匹配的 <Router /> 或 <Redirect />
  render() {
    return (
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/" >Home</Link>
              </li>
              <li>
                <Link to="/about" >About</Link>
              </li>
              <li>
                <Link to="/users" >Users</Link>
              </li>
            </ul>
          </nav>
          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/users">
              <Users />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    )
  }
}
function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}