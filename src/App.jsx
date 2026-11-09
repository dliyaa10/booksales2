
import { BrowserRouter, Routes, Route } from "react-router";

import Home from "./pages/home";
import Books from "./pages/books";
import Team from "./pages/team";
import Contact from "./pages/contact";
import Login from "./pages/out/login";
import Register from "./pages/out/register";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Main Pages */}
        <Route path="/" element={<Home />} />
        <Route path="/books" element={<Books />} />
        <Route path="/team" element={<Team />} />
        <Route path="/contact" element={<Contact />} />

        {/* Authentication Pages */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
