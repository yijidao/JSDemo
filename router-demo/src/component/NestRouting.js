import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Route, Switch, BrowserRouter as Router, Link, useRouteMatch, useParams } from 'react-router-dom'


export default class NestRouting extends PureComponent {
  static propTypes = {

  }

  render() {
    return (
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/topics">Topics</Link>
              </li>
            </ul>

          </nav>
          <Switch>
          
            <Route path="/about">
              <About />
            </Route>
            <Route path="/topics">
              <Topics />
            </Route>
            <Route path="/" >
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

function Topics() {
  let match = useRouteMatch();
  return <div>
    <h2>Topics</h2>

    <ul>
      <li>
        <Link to={`${match.url}/components`}>Components</Link>
      </li>
      <li>
        <Link to={`${match.url}/props-v-state`}>
          Props v. State
        </Link>
      </li>
    </ul>
    <Switch>
      <Route path={`${match.url}/:topicId`}>
        <Topic />
      </Route>
      <Route path={match.path}>
        <h3>
          Please select a topic.
        </h3>
      </Route>
    </Switch>
  </div>
}

function Topic() {
  let { topicId } = useParams();
  return <h3>Request topic ID: {topicId}</h3>
}