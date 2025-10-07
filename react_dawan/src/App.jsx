import "./App.css";
import Home from "./components/home";
import HookUseStates from "./hooks/HookUseStates";

function App() {
  const title = "Bienvenue !";
  const src = "../src/assets/react.svg";

  const displayTitle = () => {
    return <h1>Fonction display</h1>;
  };

  return (
    <>
      <h1>{title}</h1>
      <p>{title}</p>
      {displayTitle()}
      <img src={src} alt="image" />
      <Home />
      <HookUseStates />
    </>
  );
}

export default App;
