import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

        //material-ui setup
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from '@mui/material/CssBaseline';
import theme from './assets/theme';

import { Home } from './container';
import { Header } from './Sections';

function App() {
  return (
    <ThemeProvider theme={theme}>
          <CssBaseline />
          <div className="App">
            <Router>
                <Header />
              <Routes>
                <Route path="/" element={<Home />} />        
              </Routes>
            </Router>
          </div>
    </ThemeProvider>
  );
}

export default App;
