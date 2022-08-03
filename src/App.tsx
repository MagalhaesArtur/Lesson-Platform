import LessonPlatform from "./pages/LessonPlatform";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Subscribe from "./pages/Subscribe";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Subscribe />} />

          <Route path="/event" element={<LessonPlatform />} />
          <Route path="/event/lesson/:slug" element={<LessonPlatform />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
