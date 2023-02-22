import './App.css';
import { Routes, Route } from 'react-router-dom'
import Navigation from './Route/Navigation/navigation';
import Menu from './Route/Menu/menu';
import Home from './Route/Home/home';
import Reservation from './Route/Reservation/reservation';
import Account from './Route/Account/account';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Navigation/>}>
        <Route index element={<Home/>}/>
        <Route path='menu' element={<Menu/>}/>
        <Route path='reservation' element={<Reservation/>}/>
        <Route path='account' element={<Account/>}/>
      </Route>
    </Routes>
  );
}

export default App;
