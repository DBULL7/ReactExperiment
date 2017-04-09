import React, {Component} from 'react'
import './About.css'

class About extends Component {
  render() {
    return (
      <div className="wrapper">
        <div className="about">
          <h2>About Me</h2>
          <p>I'm a Texan studying software development at the Turing School of Software and Design in Denver, CO. I'm passionate about creating software that improves people's lives. I enjoy using TDD to improve the organization an logic of my code. I like to work with teams as two heads are usually better than one.</p>
        </div>
      </div>
    )
  }
}

export default About
