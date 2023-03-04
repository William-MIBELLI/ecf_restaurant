import './App.css';
import { Routes, Route } from 'react-router-dom'
import Navigation from './Route/Navigation/navigation';
import Menus from './Route/Menu/menus';
import Home from './Route/Home/home';
import Reservation from './Route/Reservation/reservation';
import Account from './Route/Account/account';
import Card from './Route/Card/card';
import LogIn from './Route/Log-in/logIn';
import Admin from './Route/Admin/admin';
import Confirmation from './Route/Confirmation/confirmation';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Navigation/>}>
        <Route index element={<Home/>}/>
        <Route path='card' element={<Card/>}/>
        <Route path='menu' element={<Menus/>}/>
        <Route path='reservation' element={<Reservation/>}/>
        <Route path='account' element={<Account/>}/>
        <Route path='login' element={<LogIn/>}/>
        <Route path='admin' element={<Admin/>}/>
        <Route path='confirmation' element={<Confirmation/>}/>
      </Route>
    </Routes>
  );
}

export default App;
