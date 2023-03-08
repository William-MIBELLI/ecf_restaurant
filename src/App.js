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
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { authStateListener, getdataFromDb } from './Services/firebase';
import { connectUser } from './store/user/user.action';
import { getUserInfo } from './Services/firebase';
import { initializeMenu } from './store/menu/menu.action';
import { initializeCard } from './store/card/card.action';
import { initializeSchedule } from './store/schedule/schedule.action';

function App() {

  const dispatch = useDispatch()

  const connec = async (uid) => {
    const userInfo = await getUserInfo(uid)
    if(userInfo){
        dispatch(connectUser(userInfo))
    }
  }

  useEffect(() => {
    const unsubscribe = authStateListener(user => {
      if(user){
        connec(user.uid)
      }
    })
    return unsubscribe  
  },[])

  useEffect(() => {
    const getReduxContent = async (contentName) => {
      const data = await getdataFromDb(contentName)
      if(data){
        console.log('data : ', data)
        switch(contentName){
          case 'menus':
            dispatch(initializeMenu(data))
            break;
          case 'card':
            dispatch(initializeCard(data))
            break;
          case 'schedule':
            dispatch(initializeSchedule(data))
            break;
          default:
            return false
        }
      }
    }
    getReduxContent('menus')
    getReduxContent('card')
    getReduxContent('schedule')
  },[])

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
        <Route path='confirmation/*' element={<Confirmation/>}/>
      </Route>
    </Routes>
  );
}

export default App;
