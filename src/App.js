import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
     <>
    <Router>
      {/* <Mynav/> */}
      <Routes>
        <Route path="" element={<Home/>} />
      </Routes>
    </Router>
    </>  );
}

export default App;
