function Home() {
  return (
    <>
      <div id="home">
        <div className="home">
          <p className="small-gap">Hello World! I'm </p>
          <h1 className="small-gap">Moa Ha</h1>
          <p className="small-gap">Full Stack Developer</p>
          {/* <button className="button">About Me</button> */}
          <button className="button" id="project">
            Projects
          </button>

          <button
            className="button"
            onClick={() =>
              window.open(
                'https://drive.google.com/file/d/1p27vWRIePgstw4dBp79gEKxeGFf_XJ4F/view?usp=sharing',
                '_blank'
              )
            }
          >
            Check My CV
          </button>
        </div>
      </div>
    </>
  )
}

export default Home
