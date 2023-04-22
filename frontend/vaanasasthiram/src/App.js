import {Router,Routes,Route} from "react-router-dom"
import Error from "./Pages/Error";
import "./App.css"
import FormCreate from "./Pages/FormCreate";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<FormCreate/>} />
        <Route path="*" element={<Error/>} />
      </Routes>
    </div>
  );
}

export default App;
