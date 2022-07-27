
import {Routes, Route} from 'react-router-dom'

import Register from './components/Register/Register'
import Login from './components/Login/Login'
import Navigation from './components/Navigation'
import Details from './components/Details/Details'

function App() {
  return (
    <>
    <Navigation/>
    <Routes>
      <Route path='/register' element={<Register/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/details/:recipeId' element={<Details/>}/>
    </Routes>
</>

  );
}

export default App;
