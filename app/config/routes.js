// import Home from '../Components/ToDoList'
import React, { Component } from 'react'
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory, IndexLink } from 'react-router'
import Nav from '../Components/Nav'
import ToDoList from '../Components/ToDoList'

export default class App extends Component {
  render () {
    return (
      <Router history={hashHistory}>
        <Route path='/' component={Container}>
          <IndexRoute component={Home} />
          <Route path='/list' component={ToDoList} />
          <Route path='*' component={NotFound} />
        </Route>
      </Router>
    )
  }
}

const Home = () => <h1>Home Page: Simple front end app exploring es6 and react router</h1>
// const Address = () => <h1>We are located at 555 Jackson St.</h1>
const NotFound = () => (
  <h1>404.. This page is not found!</h1>)
const Container = (props) => <div>
  <Nav />
  {props.children}
</div>