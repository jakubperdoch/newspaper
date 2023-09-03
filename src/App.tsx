import { BrowserRouter } from "react-router-dom";
import Router from "./router/Router";
import "./main.scss";
function App() {
  return (
    <BrowserRouter>
      <Router></Router>
    </BrowserRouter>
  );
}

export default App;
