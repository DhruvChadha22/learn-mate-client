import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Learn from "./pages/Learn";
import Quiz from "./pages/Quiz";
import Assessments from "./pages/Assessments";


const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/learn" element={<Learn />} />
      <Route path="/quiz" element={<Quiz />} />
      <Route path="/assessments" element={<Assessments />} />
    </Routes>
  </BrowserRouter>
);

export default App;
