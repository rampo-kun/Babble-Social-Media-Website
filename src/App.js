import "./App.css";
import { Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Home from "./containers/Home";
import Room from "./containers/Room";
import Globeroom from "./containers/Globeroom";



function App() {
  return (
    <Routes>
      <Route path="login" element={<Login />} />
      <Route path="/room" element={<Room />} />
      <Route path="/home" element={<Home />} />
      <Route path="/globeroom" element={<Globeroom />} />
      <Route path="/" element={<Home />} />
    </Routes>
  );
}

export default App;
