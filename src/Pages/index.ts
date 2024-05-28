import React from 'react'

const LoginPage = React.lazy(() => import('./Login/LoginPage'))
const HomePage = React.lazy(() => import('./Home/HomePage'))

export {LoginPage, HomePage}