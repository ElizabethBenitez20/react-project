import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <h1 className="text-center">Weather App</h1>
      <Weather defaultCity="Asunción" />
      <footer>
        This project was coded by{" "}
        <a href="https://github.com/ElizabethBenitez20" target="_blank">
          Elizabeth Benitez
        </a>{" "}
        and is{" "}
        <a
          href="https://github.com/ElizabethBenitez20/react-project"
          target="_blank"
        >
          open-sourced on Github
        </a>
      </footer>
    </div>
  );
}
