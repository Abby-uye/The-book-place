import './App.css';
import {Routes} from "./Routes";
import {useRoutes} from "react-router-dom";


function App() {
  return (
    useRoutes(Routes)
  );
}

export default App;
