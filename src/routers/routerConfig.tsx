import {HomePage, LoginPage} from '../Pages/'
import RegisterPage from '../Pages/Register/RegisterPage'

export const routers = [
  {
    path: '/',
    element: <HomePage/>
  },
  {
    path: '/login',
    element: <LoginPage/>
  },
  {
    path: '/register',
    element: <RegisterPage/>
  }
]

