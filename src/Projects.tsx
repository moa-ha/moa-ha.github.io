import tradietracker from './image/tradie-tracker.png'
import cargp from './image/Car-GP.png'
import github from './image/github.png'

function Projects() {
  return (
    <div className="container">
      <div id="projects">
        <div className="projects">
          <img
            src={tradietracker}
            alt="Tradie Tracker Wireframe"
            className="wire-frame"
          />
          <div className="project">
            <span className="title">Tradie Tracker</span>
            <p className="duration">from April 2024</p>
            <p className="description">
              Efficient On-Site Location-Based Employee Scheduling App
            </p>
            <p className="idea">
              This project is from group proect from bootcamp, and I am remaking
              from the scratch to consolidate the concepts and make clear code
            </p>
            <a
              href="https://github.com/moa-ha/Tradie-Tracker"
              target="_blank"
              className="link"
            >
              <img src={github} alt="github" className="icon project-icon" />
              Github
            </a>
          </div>
        </div>
        {/* {/* <div className="projects">
          <img src={cargp} alt="Car-GP Wireframe" className="wire-frame" />
          <div className="project">
            <span className="title">Car-GP</span>
            <p className="duration"> from April 2024</p>
            <p className="description">
              An app that tracks car maintenance status and calculates upcoming
              maintenance schedules based on individual driving distances,
              sending alerts accordingly.
            </p>
            <p className="idea">
              I had the idea for this app because I realized I didn't know much
              about cars and wished someone would provide this kind of
              information.
            </p>
          </div>
        </div> */}
        {/* <div className="projects">
          <img src={cargp} alt="Car-GP Wireframe" className="wire-frame" />

          <div className="project">
            <span className="title">LyricSync</span>
            <p className="duration">from May 2024</p>
            <p className="description">
              An app that translates song lyrics into the desired language and
              stores them for offline viewing.
            </p>
            <p className="idea">
              Finding lyrics are good tool for learning language, we wanted to
              create an app like a notepad where users can store translated song
              lyrics on their devices, making it accessible offline.
            </p>
          </div>
        </div> */}
      </div>
    </div>
  )
}
export default Projects
