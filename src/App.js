import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import GuestRoute from './routes/GuestRoute';
// import { Switch,Link } from "react-router-dom";
import Signin from './pages/Signin';
import Home from './pages/Home';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './theme';
import './mock';

function App() {

  // const url = window.location.href;
  return (
    <ThemeProvider theme={theme}>
      {/*{
        url === 'http://localhost:3000/'
        ? <Home />
        : <Signin />
      }*/}

      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
           <GuestRoute path="/sign-in" element={<Signin />} />
            <Route path="*" element={<h1>Not Found 404!</h1>} />
        </Routes>
      </Router>
           
    </ThemeProvider>
  );
}

export default App;
