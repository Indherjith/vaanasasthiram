import {Routes,Route} from "react-router-dom"
import Error from "./Pages/Error";
import "./App.css"
import FormCreate from "./Pages/FormCreate";
import Result from "./Pages/Result";
import Navbar from "./Components/Navbar";
import Formrasi from "./Pages/Formrasi";

function App() {  

  return (
    <div className="App">
      <Navbar/>
      <Routes>
        {/* <Route path="/" element={<Home/>} /> */}
        <Route path="/" element={<FormCreate/>} />
        <Route path="/result" element={<Result/>}/>
        <Route path="/rasi" element={<Formrasi/>}/>
        <Route path="*" element={<Error/>} />
      </Routes>
    </div>
  );
}

export default App;
