import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Address } from './components/landing/Address';
import { NavBar } from './components/landing/NavBar';
import Welcome from './components/landing/Welcome';

function App() {
  return (
    <>
      <Address />
      <NavBar />
      <Routes>
        <Route path="/" element={
          <Welcome />

        } />
      </Routes>

    </>
  );
}

export default App;
