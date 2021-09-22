import "./App.css"
import GitHubIcon from "@mui/icons-material/GitHub"
import LinkedInIcon from "@mui/icons-material/LinkedIn"
import PhoneIcon from "@mui/icons-material/Phone"
import EmailIcon from "@mui/icons-material/Email"
import HomeIcon from "@mui/icons-material/Home"
import Home from "@mui/icons-material/Home"
import EmojiPeopleIcon from "@mui/icons-material/EmojiPeople"
import AttachFileIcon from "@mui/icons-material/AttachFile"
import ContentCopyIcon from "@mui/icons-material/ContentCopy"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
import AboutMe from "./components/AboutMe"
import Resume from "./components/Resume"
import Projects from "./components/Projects"

function App() {
  return (
    <Router>
      <div className="App">
        <div className="side-container">
          <div className="Id-card">
            <div className="headshot"></div>
            <div className="name">Jose Argueta</div>
            <div className="button-container"></div>
            <div className="buttons">
              <div className="button-background">
                <a href="https://github.com/nowNzen00">
                  <GitHubIcon className="icon" id="github" />
                </a>
              </div>
              <div className="button-background">
                <a href="https://www.linkedin.com/in/jose-argueta-8b6ab616b/">
                  <LinkedInIcon className="icon" id="linked-in" />
                </a>
              </div>
              <div className="button-background">
                <PhoneIcon className="icon" id="number" />
              </div>
              <div className="button-background">
                <EmailIcon className="icon" id="email" />
              </div>
            </div>
            <div className="menu-container">
              <div className="menu-options">
                <Link to="/">
                  <div className="home">
                    <HomeIcon />
                    Home
                  </div>
                </Link>
                <Link to="/AboutMe">
                  <div className="bio">
                    <EmojiPeopleIcon /> About Me
                  </div>
                </Link>
                <Link to="/Resume">
                  <div className="resume">
                    <AttachFileIcon />
                    Resume
                  </div>
                </Link>
                <Link to="/Projects">
                  <div className="projects">
                    <ContentCopyIcon />
                    Projects
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="word-box">
          <Switch>
            <Route path="/AboutMe">
              <AboutMe />
            </Route>
            <Route path="/Projects">
              <Projects />
            </Route>
            <Route path="/Resume">
              <Resume />
            </Route>
            <Route exact path="/">
              <div>
                <h1>Hello, My name is Jose ":)"</h1>
              </div>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  )
}

export default App
