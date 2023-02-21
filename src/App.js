import './App.css';
import { Routes, Route } from 'react-router-dom'
import Navigation from './Route/Navigation/navigation';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Navigation/>}>
        <Route index element={'MAIN'}/>
        <Route path='visit' element={'VISIT'}/>
      </Route>
    </Routes>
  );
}

export default App;
