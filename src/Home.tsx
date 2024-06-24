import { useState } from 'react'
import AboutMe from './AboutMe'
import Projects from './Projects'

function Home() {
  const [isShow, setIsShow] = useState(false)

  const handleToggle = () => {
    setIsShow(!isShow)
  }
  return (
    <div className="container" id="home">
      <div className="home">
        <p className="small-gap">Hello World! I'm </p>
        <h1 className="small-gap">Moa Ha</h1>
        <p className="small-gap">Full Stack Developer</p>
        <p className="skills small">
          → HTML, JavaScript, TypeScript, CSS, React, Node.js, SQLite3
        </p>

        <a href="#projects">
          <button className="button">Projects</button>
        </a>
        <a
          href="https://drive.google.com/file/d/1EHgxmm8NYFZ08QedDBtDpMICmZxB-kCy/view?usp=sharing"
          target="_blank"
        >
          <button className="button">Check My CV</button>
        </a>
        <button className="button" onClick={handleToggle}>
          {isShow ? 'Close' : 'About Me'}
        </button>
        {isShow && <AboutMe />}
        <Projects />
      </div>
    </div>
  )
}

export default Home
