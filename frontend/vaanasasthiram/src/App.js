import {Routes,Route} from "react-router-dom"
import Error from "./Pages/Error";
import "./App.css"
import FormCreate from "./Pages/FormCreate";
import Result from "./Pages/Result";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<FormCreate/>} />
        <Route path="/result" element={<Result/>}/>
        <Route path="*" element={<Error/>} />
      </Routes>
    </div>
  );
}

export default App;
