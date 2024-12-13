import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Component/Layout";
import Home from "./Pages/Home/Home";
import Dashboard from "./Pages/Dashboard";

function App() {
  return (
      <Router>
        <Routes>
          <Route  element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="dashboard" element={<Dashboard />} />
          </Route>
        </Routes>
      </Router>
  );
}

export default App;
