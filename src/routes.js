import {Switch, Route} from 'react-router-dom'

import Home from './pages/Home'
import Plans from './pages/Plans'
import SignPlan from './pages/SignPlan'


const Routes = () => {
  return (
    <Switch>
      <Route path='/' render={() => <Home/> } />
      
      <Route path='/Planos' render={() => <Plans/> } />

      <Route path='/Assinatura' render={() =><SignPlan/> } />
    </Switch>
  )
}

export default Routes