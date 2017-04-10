import React, {Component} from 'react'
import './Experience.css'


class Experience extends Component {
  render() {
    return (
      <div className="experience">
        <div className="quote">
          <h2 className="title">Experience</h2>
          <h4>Any product that needs a manual to work is broken. - Elon Musk</h4>
        </div>
        <div className="education">
          <h3 className="title">Education</h3>
          <h4 className="bold">Turing</h4>
          <p>Jan 2017 - Present</p>
          <h5 className="bold">Front-End Engineering</h5>
          <p>Core Technologies: es6 Javascript, React, Ember,Electron, Mean stack, css, html</p>
          <h4 className="bold">University of Kansas</h4>
          <p>2013 - 2015</p>
          <h5 className="bold">Bachelor - Economics</h5>
        </div>
        <div className="career">
          <h3 className="title">Career</h3>
          
        </div>
      </div>

    )
  }
}

export default Experience
