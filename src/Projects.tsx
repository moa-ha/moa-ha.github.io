import tradietracker from './image/tradie-tracker.gif'
import github from './image/github.png'
import dreamfest from './image/dreamfest.gif'
import pupparazzi from './image/pupparazzi.gif'
import lyricSync from './image/LyricSync.png'
import live from './image/live.png'
import cargp from './image/carGp.png'

function Projects() {
  return (
    <div id="projects">
      <div className="projects">
        <img
          src={tradietracker}
          alt="Tradie Tracker demo"
          className="wire-frame"
        />
        <div className="project">
          <span className="title">Tradie Tracker</span>
          <p className="duration">
            09 Apr ~ 17 Apr 2024 (group),<br></br>21 Apr ~ 10 May 2024 (solo)
          </p>
          <p className="description">
            Efficient Work Scheduling App
            {/* Efficient On-Site Location-Based Employee Scheduling App */}
          </p>
          <p className="idea">
            This project is from group project from Dev Academy, and I remade
            from the scratch to consolidate the concepts and make clear code.
            The idea was to make a scheduling app using all the tools including
            front & backend skills we've learnt throughout the bootcamp.
          </p>
          <p className="stretch">
            Stretch Goal: Implementing the Google Map Api to work with back-end
            getting the real address data by string.
          </p>
          <p className="skills">
            (React / TypeScript / CSS / Restful APIs / Node.js / Express.js /
            SQLite3 / Knex)
          </p>
          <a
            href="https://github.com/moa-ha/Tradie-Tracker"
            target="_blank"
            className="link"
          >
            <img src={github} alt="github" className="icon project-icon" />
            Github
          </a>
          <a
            href="https://tradie-tracker.pushed.nz/"
            target="_blank"
            className="link"
          >
            <img src={live} alt="github" className="icon project-icon" />
            Live
          </a>
        </div>
      </div>
      <div className="projects">
        <img src={dreamfest} alt="Dreamfest" className="wire-frame" />
        <div className="project">
          <span className="title">Dreamfest</span>
          <p className="duration">20 Mar ~ 24 Mar 2024</p>
          <p className="description">Music Festival Dashboard App</p>
          <p className="idea">
            Dreamfest is a music festival schedule managing app.<br></br>
            This was my first app using Knex & SQL Database.
          </p>
          <p className="skills">(Express.js / Restful APIs / SQLite3 / Knex)</p>
          <a
            href="https://github.com/moa-ha/dreamfest"
            target="_blank"
            className="link"
          >
            <img src={github} alt="github" className="icon project-icon" />
            Github
          </a>
        </div>
      </div>
      <div className="projects">
        <img src={pupparazzi} alt="Dreamfest" className="wire-frame" />
        <div className="project">
          <span className="title">Pupparazzi</span>
          <p className="duration">12 Mar ~ 01 Apr 2024</p>
          <p className="description">Pet Profile Managing App</p>
          <p className="idea">
            Pupparazz is a pet diary to manage and edit profiles of dogs.
            <br></br>
            This was my first app using Express & JSON API's.
          </p>
          <p className="skills">(Express.js / JSON APIs)</p>
          <a
            href="https://github.com/moa-ha/pupparazzi"
            target="_blank"
            className="link"
          >
            <img src={github} alt="github" className="icon project-icon" />
            Github
          </a>
        </div>
      </div>
      <div className="projects">
        <img src={lyricSync} alt="lyricsync logo" className="wire-frame" />
        <div className="project">
          <span className="title">LyricSync</span>
          <p className="duration">25 Apr ~ 2024 (group)</p>
          <p className="description">
            -UNDER CONSTRUCTION-<br></br>
          </p>
          <p className="idea">
            App for lyrics collection in translated language.
            {/* A full-stack application which allows its user to save the lyrics
              to their favourite songs. Collections can be created where a set
              of songs can be compiled and saved. Additionally, the translation
              to foreign songs can either be executed through the translation
              feature in the app, or inputted manually. */}
          </p>
          {/* <p className="stretch">
              Stretch Goal: Drag-n-drop items in a collection & romanisation
              support for languages using a different alphabets/characters
            </p> */}
          {/* <p className="skills">
              (React / TypeScript / CSS / Express.js / Restful APIs / SQLite3 /
              Node.js / Knex)
            </p> */}
          <a
            href="https://github.com/haruka-ogino/LyricSync"
            target="_blank"
            className="link"
          >
            <img src={github} alt="github" className="icon project-icon" />
            Github
          </a>
        </div>
      </div>
      <div className="projects">
        <img
          src={cargp}
          alt="car gp"
          className="wire-frame wire-frame-mobile"
        />

        <div className="project">
          <span className="title">Car-GP</span>
          <p className="duration"> from May 2024</p>
          {/* <p className="description">
              An app that tracks car maintenance status and calculates upcoming
              maintenance schedules based on individual driving distances,
              sending alerts accordingly.
            </p> */}
          <p className="description">-UNDER CONSTRUCTION-</p>
          <p className="idea">
            An app that tracks car maintenance status and calculates upcoming
            maintenance schedules based on individual driving distances, sending
            alerts accordingly.
          </p>
          {/* <p className="idea">
              I had the idea for this app because I realized I didn't know much
              about cars and wished someone would provide this kind of
              information.
            </p> */}
          <a
            href="https://github.com/moa-ha/car-gp"
            target="_blank"
            className="link"
          >
            <img src={github} alt="github" className="icon project-icon" />
            Github
          </a>
        </div>
      </div>
    </div>
  )
}
export default Projects
