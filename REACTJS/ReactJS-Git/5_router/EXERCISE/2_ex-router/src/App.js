import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Login } from './components/Login';
import { Employee } from './components/Employee';
import 'bootstrap/dist/css/bootstrap.min.css';
import { EmployeeDetails } from './components/EmployeeDetails';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/employee' element={<Employee />} />
          <Route path='/employee-detail' element={<EmployeeDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
