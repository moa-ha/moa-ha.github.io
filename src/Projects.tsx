import tradietracker from './image/tradie-tracker.png'
import cargp from './image/Car-GP.png'

function Projects() {
  return (
    <>
      <div>
        <div className="projects">
          <img
            src={tradietracker}
            alt="Tradie Tracker Wireframe"
            className="wire-frame"
          />
          <div className="project">
            <span className="title">Tradie Tracker</span>
            <p>from April 2024</p>
            <p>Efficient On-Site Location-Based Employee Scheduling App</p>
            <p>
              This project is from group project from bootcamp, and I am
              remaking from the scratch to consolidate the concepts and make
              clear code
            </p>
          </div>
        </div>
        <div className="projects">
          <img src={cargp} alt="Car-GP Wireframe" className="wire-frame" />
          <div className="project">
            <span className="title">Car-GP</span>
            <p> from April 2024</p>
            <p>
              An app that tracks car maintenance status and calculates upcoming
              maintenance schedules based on individual driving distances,
              sending alerts accordingly.
            </p>
            <p>
              I had the idea for this app because I realized I didn't know much
              about cars and wished someone would provide this kind of
              information.
            </p>
          </div>
        </div>
        <div className="projects">
          <img src={cargp} alt="Car-GP Wireframe" className="wire-frame" />

          <div className="project">
            <span className="title">LyricSync</span>
            <p>from May 2024</p>
            <p>
              An app that translates song lyrics into the desired language and
              stores them for offline viewing.
            </p>
            <p>
              Finding lyrics are good tool for learning language, we wanted to
              create an app like a notepad where users can store translated song
              lyrics on their devices, making it accessible offline.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
export default Projects
