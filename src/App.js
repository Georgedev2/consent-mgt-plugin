import "./App.scss";
import ConsentMgtPlugin from "./components/plugin/ConsentMgtPlugin";

//NOTE: The ConsentMgtPlugin component take a prop which site tracking ID
const App = () => {
  return (
    <div className="App">
      <ConsentMgtPlugin />
    </div>
  );
};

export default App;
