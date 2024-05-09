import Weather from "./Weather";
import bgImage from "./video/background-img.mp4";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <video autoPlay loop muted>
        <source src={bgImage} type="video/mp4" />
      </video>
      <Weather defaultCity="Asunción" />
      <footer>
        This project was coded by{" "}
        <a
          href="https://github.com/ElizabethBenitez20"
          target="_blank"
          rel="noreferrer"
        >
          Elizabeth Benitez
        </a>{" "}
        and is{" "}
        <a
          href="https://github.com/ElizabethBenitez20/react-project"
          target="_blank"
          rel="noreferrer"
        >
          open-sourced on Github
        </a>{" "}
        and{" "}
        <a
          href="https://shecodes-react-w-a.netlify.app/"
          target="_blank"
          rel="noreferrer"
        >
          hosted on Netlify
        </a>
      </footer>
    </div>
  );
}
