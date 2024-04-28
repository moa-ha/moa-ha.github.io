import github from './image/github.png'
import linkedin from './image/linkedin.png'
import home from './image/home.png'
import projects from './image/projects.png'

function NavBar() {
  return (
    <>
      <div className="navbar">
        <span>
          <a href="https://github.com/moa-ha" target="blank">
            <img src={github} alt="github" className="icon" />
          </a>
          <a href="https://www.linkedin.com/in/moa-ha" target="blank">
            <img src={linkedin} alt="linkedin" className="icon" />
          </a>
        </span>
        <span className="nav-right">
          <a href="#home">
            <img src={home} alt="home" className="icon" />
          </a>
          <a href="#project" target="blank">
            <img src={projects} alt="projects" className="icon" />
          </a>
        </span>
      </div>
    </>
  )
}

export default NavBar
