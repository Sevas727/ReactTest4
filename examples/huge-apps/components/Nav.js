import React, { Component } from 'react'
import { Link } from 'react-router'

const styles = {}

styles.nav = {
  borderBottom: '1px solid #aaa'
}

styles.link = {
  display: 'inline-block',
  padding: 10,
  textDecoration: 'none'
}

styles.activeLink = {
  ...styles.link,
  color: 'red'
}

class Nav extends Component {
  render() {

    const pages = TABS

    return (
      <nav style={styles.nav}>
        {pages.map((page, index) => (
          <Link
            key={index}
            activeStyle={index === 0 ? { ...styles.activeLink, paddingLeft: 0 } : styles.activeLink}
            style={index === 0 ? { ...styles.link, paddingLeft: 0 } : styles.link}
            to={`/${page.id}`}
          >{page.title}</Link>
        ))}
      </nav>
    )
  }
}

export default Nav
