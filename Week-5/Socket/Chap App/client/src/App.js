import './App.css';
import Dashboard from './modules/Dashboard';
import Form from './modules/Form';
import { Routes, Route, Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children, auth=false }) => {
  const isLoggedIn = localStorage.getItem('user:token') !== null || false;

  if(!isLoggedIn && auth) {
    return <Navigate to={'/user/sign_in'} />
  }else if(isLoggedIn && ['/user/sign_in', '/user/sign_up'].includes(window.location.pathname)){
    console.log('object :>> ');
    return <Navigate to={'/'} />
  }

  return children
}

function App() {
  return (
    <Routes>
      <Route path='/' element={
        <ProtectedRoute auth={true}>
          <Dashboard/>
        </ProtectedRoute>
      } />
      <Route path='/user/sign_in' element={
      <ProtectedRoute>
        <Form isSignInPage={true}/>
      </ProtectedRoute>
      } />
      <Route path='/user/sign_up' element={
        <ProtectedRoute>
        <Form isSignInPage={false}/>
      </ProtectedRoute>
      } />
    </Routes>
  );
}

export default App;