import { BrowserRouter, Routes, Route } from "react-router-dom";

import LandingPage from "./pages/landingPage";
import HomePage from "./pages/homePage";
import Login from "./pages/login";

import ScanPage from "./pages/ScanPage";
import AnalysisPage from "./pages/AnalysisPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route
          path="/"
          element={<LandingPage />}
        />

        <Route
          path="/login"
          element={<Login />}
        />

        <Route
          path="/home"
          element={<HomePage />}
        />

        <Route
          path="/scan"
          element={<ScanPage />}
        />

        <Route
          path="/analysis"
          element={<AnalysisPage />}
        />

        <Route
          path="/weather"
          element={<h1>Weather-Based Care (Coming Soon)</h1>}
        />

        <Route
          path="/dermatologists"
          element={<h1>Find Dermatologists (Coming Soon)</h1>}
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;