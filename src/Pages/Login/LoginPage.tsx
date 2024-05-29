import React from 'react'
import { useAuthStore } from '../../Store/store'

const LoginPage:React.FC = () => {
  const logged = useAuthStore(state => state.logged)
  const user = useAuthStore(state => state.user)

  const changeLoged = useAuthStore(state => state.changeLoged)

  return (
    <div>
      {user && 
        <p>{user.username}</p>
      }
      <p> {logged ? 'activo' : " offline"} </p>
      <button className=' bg-orange-500 py-1 px-6 rounded-xl' onClick={changeLoged}> LOGIN </button>
    </div>
  )
}

export default LoginPage