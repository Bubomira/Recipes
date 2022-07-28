
import {Routes, Route} from 'react-router-dom'

import Register from './components/register/Register'
import Login from './components/login/Login'
import Navigation from './components/Navigation'
import Details from './components/recipe-components/recipe-details/Details'
import RecipeList from './components/recipe-components/recipe-list/RecipeList'

function App() {
  return (
    <>
    <Navigation/>
    <Routes>
      <Route path='/register' element={<Register/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/details/:recipeId' element={<Details/>}/>
      <Route path='/recipeCatalog' element={<RecipeList/>}/>
    </Routes>
</>

  );
}

export default App;
