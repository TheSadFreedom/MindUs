import React from "react";
import { AppRoutes } from "./router";
import { BrowserRouter as Router } from "react-router-dom";
import ScrollToTopButton from "./Components/Buttons/ScrollToTopButton/ScrollToTopButton";
import { Api_Client } from "./services/Api_client";
import { register } from "./services/services";
import axios from "axios";
export default function App() {
 
  return (
    <Router>
      <ScrollToTopButton>
        <AppRoutes />
      </ScrollToTopButton>
    </Router>
  );
}

//export default App;
