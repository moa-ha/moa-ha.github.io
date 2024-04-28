function Home() {
  return (
    <div className="container">
      <div id="home">
        <div className="home">
          <p className="small-gap">Hello World! I'm </p>
          <h1 className="small-gap">Moa Ha</h1>
          <p className="small-gap">Full Stack Developer</p>
          {/* <button className="button">About Me</button> */}
          <a href="#projects">
            <button className="button" id="project">
              Projects
            </button>
          </a>
          <a
            href="https://drive.google.com/file/d/1p27vWRIePgstw4dBp79gEKxeGFf_XJ4F/view?usp=sharing"
            target="_blank"
          >
            <button className="button">Check My CV</button>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Home
