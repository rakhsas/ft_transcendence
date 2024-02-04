import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import FunctionSignUpForm from './App.tsx';
import HomeComponent from './Components/HomePage.tsx';
import DashboardComponent from './Components/dashboard/Dashboard.tsx';
import ValidInformation from './Components/Info/Information.tsx';
/* import Game from './Components/Game/Game' */
import Game from './Components/game/Game'

ReactDOM.createRoot(document.getElementById('root')!).render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomeComponent/>}/>
      <Route path="/Home" element={<DashboardComponent/>}/>
      <Route path="/SignIn" element={<FunctionSignUpForm/>} />
      <Route path="/game"  element={<Game/>}/>
      <Route path="/login"  element={<ValidInformation/>}/>
    </Routes>
  </BrowserRouter>
)
