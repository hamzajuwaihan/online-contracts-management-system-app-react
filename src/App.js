import { Route, Routes } from 'react-router-dom';
import './App.css';
import { AuthProvider } from './components/auth';
import Container from './components/authentication/Container';
import Login from './components/authentication/Login';
import Profile from './components/authentication/Profile';
import Register from './components/authentication/Register';
import { Address } from './components/landing/Address';
import Footer from './components/landing/Footer';
import NavBar from './components/landing/NavBar';
import Welcome from './components/landing/Welcome';

function App() {
  return (
    <>
      <AuthProvider>
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
            <Container>
              <Register />
            </Container>

          } />
          <Route path="/profile" element={
            <Profile />
          } />
          <Route path="*" element={
            <h1>404 Not Found</h1>
          } />
        </Routes>
        <Footer />
      </AuthProvider>
    </>
  );
}

export default App;
