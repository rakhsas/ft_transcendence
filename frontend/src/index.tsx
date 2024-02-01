import ReactDOM from 'react-dom/client';
import './index.css';
import FunctionSignUpForm from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import ValidInformation from './Information';
import DashboardComponent from './Components/dashboard';
import Game from './Components/Game/Game'


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/Dashboard" element={<DashboardComponent/>}/>
      <Route path="/SignIn" element={<FunctionSignUpForm/>} />
      <Route path="/login"  element={<ValidInformation/>}/>
      <Route path="/game"  element={<Game/>}/>
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
