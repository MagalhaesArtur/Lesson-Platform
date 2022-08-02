import LessonPlatform from "./pages/LessonPlatform";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/home" element={<h1>home</h1>} />

          <Route path="/event" element={<LessonPlatform />} />
          <Route path="/event/lesson/:slug" element={<LessonPlatform />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
