import { Route, Routes } from 'react-router-dom';
import './App.css';
import Container from './components/authentication/Container';
import Login from './components/authentication/Login';
import { Address } from './components/landing/Address';
import Footer from './components/landing/Footer';
import NavBar from './components/landing/NavBar';
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
        <Route path='/login' element={
          <Container>
            <Login />
          </Container>
        } />
        <Route path="/register" element={
          <h1>Register</h1>} />
        <Route path="*" element={
          <h1>404 Not Found</h1>
        } />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
