import tradietracker from './image/tradie-tracker.gif'
import github from './image/github.png'
import dreamfest from './image/dreamfest.gif'
import pupparazzi from './image/pupparazzi.gif'
import live from './image/live.png'

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
          <p className="underline">What I Learned ✏️</p>
          <p>
            ✔️ Developed a full-stack application from scratch, enhancing my
            understanding of the entire development process.<br></br>
            ✔️ Gained experience in project planning, collaborating with team
            members, and leading meetings.<br></br>
            ✔️ Improved my ability to implement and manage both frontend and
            backend components effectively.
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
          <p className="underline">What I Learned ✏️</p>
          <p>
            ✔️ Acquired practical experience integrating SQLite as a database
            for handling CRUD operations.<br></br>
            ✔️ Enhanced my understanding of RESTful API design and
            implementation.
          </p>
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
          <p className="underline">What I Learned ✏️</p>
          <p>
            ✔️ Gained hands-on experience with CRUD operations using JSON and
            the file system.<br></br>
            ✔️ Developed skills in handling data persistence and management in a
            local environment.<br></br>
            ✔️ Improved my understanding of working with Express.js to build and
            manage server-side logic.
          </p>
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
    </div>
  )
}
export default Projects
