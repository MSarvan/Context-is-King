import { Routes, Route } from "react-router-dom";
import "./App.css";
import Page1 from "./Components/Page1";
import Page2 from "./Components/Page2";
import Welocme from "./Components/Welcome";

function App() {
  return (
    <div className="App">
      <>
        <Routes>
          <Route path="/" element={<Welocme />} />
          <Route path="/registration/one" element={<Page1 />} />
          <Route path="/registration/two" element={<Page2 />} />
        </Routes>
      </>
    </div>
  );
}

export default App;
