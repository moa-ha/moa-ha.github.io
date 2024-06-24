import lyricSync from './image/LyricSync.png'
import cargp from './image/carGp.png'
import github from './image/github.png'

function OngoingProjects() {
  return (
    <>
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
          <p className="underline">What I'm Learning ✏️</p>
          <p>
            ✔️ Collaborating weekly with a teammate to develop a full-stack app,
            gaining deeper familiarity with previously used tools.<br></br>
            ✔️ Continuously learning and integrating new features, such as unit
            testing, which I hadn't focused on before.<br></br>
            ✔️ Enhancing my skills in teamwork, problem-solving, and iterative
            development.
          </p>
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
          <p className="underline">What I'm Learning ✏️</p>
          <p>
            ✔️ Integrated Auth0 and JWT for authentication, expanding my
            understanding of secure user authentication.<br></br>
            ✔️ Improved my design skills to create more professional and
            user-friendly interfaces.<br></br>
            ✔️ Continued to broaden my tech stack and enhance my ability to
            manage a project independently.
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
    </>
  )
}

export default OngoingProjects
