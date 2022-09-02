import logo from "./logo.svg";
import "./App.css";

const { node, chrome, electron } = window.versions || {
  node: () => "",
  chrome: () => "",
  electron: () => "",
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Node {node()}, <br /> Chrome {chrome()},<br /> Electron {electron()}
        </p>
      </header>
    </div>
  );
}

export default App;
