import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
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
        </a>
      </footer>
    </div>
  );
}
