/*globals COURSES:false */
import React, { Component } from 'react'
import Nav from './Nav'

const styles = {}

styles.sidebar = {
  float: 'left',
  width: 200,
  padding: 20,
  borderRight: '1px solid #aaa',
  marginRight: 20
}

class App extends Component {
  render() {
    let { children, params } = this.props

    return (
      <div>
        <Nav />
        {children}
      </div>
    )
  }
}

module.exports = App
