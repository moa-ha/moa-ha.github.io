import { useState } from 'react'

function AboutMe() {
  const [isShow, setIsShow] = useState(false)

  function handleToggle() {
    setIsShow(!isShow)
  }
  return (
    <>
      <button className="button" onClick={handleToggle}>
        {isShow ? 'Close' : 'About Me'}
      </button>

      {isShow && (
        <div className="container">
          <div id="about-me">
            <p className="title">About Me</p>
            <p className="introduction">
              I am a developer with experience in office work and customer
              service. Realizing the increasing automation of many systems and
              the constant evolution in this field, I chose to pursue a career
              in software development.<br></br>
              <br></br>I have experienced the automation trends sweeping through
              industries and witnessed how technology is revolutionising
              traditional workplace functions. This realisation has motivated me
              to pursue a career in software development. I believe that by
              actively engaging in the field responsible for driving these
              changes, I can remain relevant and continuously evolve throughout
              my career.
            </p>
          </div>
        </div>
      )}
    </>
  )
}

export default AboutMe
