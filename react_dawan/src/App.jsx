import "./App.css";
import { ExercicesFruits } from "./components/ExercicesFruits";
import Form from "./components/Form";
import Home from "./components/home";
import HookList from "./hooks/HookList";
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
      {/* <Home />
      <HookUseStates />
      <HookList />
      <Form /> */}
      <ExercicesFruits />
    </>
  );
}

export default App;
