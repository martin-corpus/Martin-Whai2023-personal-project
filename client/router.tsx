import UserName from './components/userName/userName'
import NewUser from './components/newUser/newUser'

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom'

import App from './components/App'

export const routes = createRoutesFromElements(
  <Route path="/">
    <Route path="/newuser" element={<NewUser />} />
    <Route path="/username" element={<UserName />} />
    {/* username/results?? or /results?? */}
    {/* <Route path="/username/" element={<UserName />} /> */}
    <Route path="/" element={<App />} />
  
    
  </Route>
)

export const router = createBrowserRouter(routes)