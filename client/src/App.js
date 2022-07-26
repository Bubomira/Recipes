
import {Routes, Route} from 'react-router-dom'

import Register from './components/Register/Register'
import Login from './components/Login/Login'
import Navigation from './components/Navigation'

function App() {
  return (
    <>
    <Navigation/>
    <Routes>
      <Route path='/register' element={<Register/>}/>
      <Route path='/login' element={<Login/>}/>
    </Routes>

</>

  );
}

export default App;
