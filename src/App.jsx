import "./App.css";
import profile from "./assets/hero.png.jpeg";
function App() {
  return (
    <div>
      <nav>
        <h2>SANTHOSH'S PORTFOLIO.</h2>

        <div>
          <a href="#about">ABOUT</a>
          <a href="#work">WORK</a>
          <a href="#contact">CONTACT</a>
        </div>

        <h2>
  <a href="mailto:santhoshsrinivasan72@gmail.com">
    santhoshsrinivasan72@gmail.com
  </a>
</h2>
<a
  href="https://github.com/san4949"
  target="_blank"
  rel="noopener noreferrer"
>
  GitHub
</a>
<a
  href="https://www.linkedin.com/in/santhosh-s-52485b328/"
  target="_blank"
  rel="noopener noreferrer"
>
  LinkedIn
</a>
      </nav>

      <main>
        <section className="hero">
          <p>AI & DATA SCIENCE</p>

          <h1>
  Hi, I'm
  <br />
  Santhosh.
</h1>

<img
  src={profile}
  alt="Santhosh"
  className="profile-photo"
/>

          <h2>AI & DATA SCIENCE STUDENT</h2>

          <p className="intro">
            I'm an Artificial Intelligence & Data Science student passionate
            about building AI-powered applications and solving real-world
            problems through technology.
          </p>
        </section>

        <section id="about">
          <p>ABOUT ME</p>
          <h2>Building with AI.</h2>
          <p>
            I am interested in Artificial Intelligence, Machine Learning,
            Data Science, APIs, and software development. I enjoy turning
            ideas into practical projects.
          </p>
        </section>

        <section id="work">
          <p>SELECTED WORK</p>

          <div className="projects">
            <a
  href="https://github.com/san4949/-gemini-api-project"
  target="_blank"
  rel="noopener noreferrer"
>
  <article>
    <h3>Gemini API Project</h3>
    <p>AI application built using Python and Google Gemini API.</p>
  </article>
</a>

            <article>
              <h3>ScamShield AI</h3>
              <p>AI-powered transaction fraud detection system.</p>
            </article>

            <article>
              <h3>Vaani</h3>
              <p>Voice-first AI platform for filling digital forms.</p>
            </article>
          </div>
        </section>

        <section id="contact">
          <p>CONTACT</p>
          <h2>Let's connect.</h2>
        </section>
      </main>
    </div>
  );
}

export default App;