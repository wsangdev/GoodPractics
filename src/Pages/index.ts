import React from 'react'

const LoginPage = React.lazy(() => import('./Login/LoginPage'))
const HomePage = React.lazy(() => import('./Home/HomePage'))
const Register = React.lazy(() => import('./Register/RegisterPage'))

export {LoginPage, HomePage, Register}