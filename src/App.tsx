import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Blog from "./pages/blog/Blog";
import "./main.scss";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="blog" element={<Blog />} />
      </Routes>
    </div>
  );
}

export default App;
