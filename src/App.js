import "./App.css";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Course from "./components/Course/Course";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import WordDrill from "./components/WordDrill/WordDrill";
import ParagraphDrill from "./components/ParagraphDrill/ParagraphDrill";
import TypingTest from "./components/TypingTest/TypingTest";
import Game from "./components/Game/Game";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="main-container">
        <div className="container">
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/course" element={<Course />} />
            <Route path="/word-drill" element={<WordDrill />} />
            <Route path="/paragraph-drill" element={<ParagraphDrill />} />
            <Route path="/typing-test" element={<TypingTest />} />
            <Route path="/game" element={<Game />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
