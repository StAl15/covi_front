import react from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Registration from "./Pages/Registration";
import CreateFeeling1 from "./Pages/CreateFeeling1";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Registration />} />
        <Route path="/home" element={<Home />} />
        <Route path="/create_feeling1" element={<CreateFeeling1 />} />
      </Routes>
    </Router>
  );
}

export default App;
