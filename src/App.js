import { Routes, Route, BrowserRouter } from "react-router-dom";
import "./App.css";
import DragDrop from "./components/DragDrop";
import Navbar from "./components/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />} />
        <Route path="/dragdrop" element={<DragDrop />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
