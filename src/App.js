import './App.css';
import Navbar from './components/navbar/Navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Registeration from "./pages/registeration/Registeration";
import Session from './pages/session/Session';
import Home from './pages/home/Home';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar />}>
            <Route path="/" element={<Home />} />
            <Route path="signin" element={<Session />} />
            <Route path="signup" element={<Registeration />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
