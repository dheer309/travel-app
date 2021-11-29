import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";

function App() {
  return (
    <div className="App">
      <Router>
        <Route component={Home} exact path="/" />
        <Route component={Login} exact path="/login" />
      </Router>
    </div>
  );
}

export default App;