import github from './image/github.png'
import linkedin from './image/linkedin.png'
import home from './image/home.png'
import projects from './image/projects.png'

function NavBar() {
  return (
    <>
      <div className="container">
        <span>
          <img src={github} alt="github" className="icon" />
          <img src={linkedin} alt="linkedin" className="icon" />
        </span>
        <span className="nav-right">
          <img src={home} alt="home" className="icon" />
          <img src={projects} alt="projects" className="icon" />
        </span>
      </div>
    </>
  )
}

export default NavBar
