import react from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Registration from "./Pages/Registration";
import CreateFeeling1 from "./Pages/CreateFeeling1";
import CreateFeeling2 from "./Pages/CreateFeeling2";
import { Sidebar } from "./Components/sidebar";

function App() {
  return (
    <Router>
      <Sidebar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Registration />} />
        <Route path="/home" element={<Home />} />
        <Route path="/create_feeling1" element={<CreateFeeling1 />} />
        <Route path="/create_feeling2" element={<CreateFeeling2 />} />
      </Routes>
    </Router>
    
  );
}

export default App;
