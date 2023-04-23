import './App.css';
import Register from './components/Login/Register/Register';
import Home from './components/Home/Home';
import Login from './components/Login/Login/Login';
import AuthProvider from './contexts/AuthProvider/AuthProvider';
import About from './components/About/About';
import { Route, Routes, } from 'react-router-dom';
import Navigation from './components/Home/Navigation';
import Orders from './components/Orders/Orders';
import RequireAuth from './components/Login/Login/RequireAuth';
import AddReminder from './components/AddReminder/AddReminder';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Navigation></Navigation>
        <Routes>

          <Route exact path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path='orders' element={
            <RequireAuth>
              <Orders />
            </RequireAuth>
          }
          />
          <Route path='AddReminder' element={
            <RequireAuth>
              <AddReminder />
            </RequireAuth>
          }
          />

        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;

