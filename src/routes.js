import {Switch, Route} from 'react-router-dom'

import Home from './pages/Home'
import Plans from './pages/Plans'
import SignPlan from './pages/SignPlan'


const Routes = () => {
  return (
    <Switch>
      <Route path='/Planos' component={ Plans } />

      <Route path='/Assinatura' component={ SignPlan } />

      <Route path='/' exact component={ Home } />
    </Switch>
  )
}

export default Routes