import React from "react";
import { AppRoutes } from "./router";
import { BrowserRouter as Router } from "react-router-dom";
import ScrollToTopButton from "./Components/Buttons/ScrollToTopButton/ScrollToTopButton";

function App() {
  return (
      <Router>
        <ScrollToTopButton>
          <AppRoutes />
        </ScrollToTopButton>
      </Router>
  );
}

export default App;
