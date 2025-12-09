import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Newsletter from "./components/Newsletter";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Clients from "./components/Clients";
import Footer from "./components/Footer";
import Admin from "./pages/Admin/Admin";

function App() {
  return (
    <Router>
      <Routes>

        {/* Landing Page */}
        <Route
          path="/"
          element={
            <>
              <Header />
              <Newsletter />
              <Hero />
              <Projects />
              <Clients />
              <Footer />
            </>
          }
        />

        {/* Admin Panel */}
        <Route path="/admin" element={<Admin />} />

      </Routes>
    </Router>
  );
}

export default App;
