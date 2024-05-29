import { create } from "zustand";

export interface User {  // Interface para Usuario es como CLASE
  username: string,
  password: string,
  email: string,
  role: string
}

type AuthStore = {  // Typado para Authorizacion es con IGUAL
  logged: boolean;
  user: User | null 

  changeLoged: () => void;
  setUser: (newUser: User) => void
}

// Creando un Objeto que esta siendo Retornado un objeto    
export const useAuthStore = create<AuthStore>((set) => ( 
  // Objeto Con tdas las Datos Inicales y sys modificaciones en zustand 
  { 
    // Variables Iniciales 
    logged: false,   
    user: null,

    //Cambio de Login
    changeLoged: () => {
      set(state => ({
        logged: !state.logged}))
    },

    // Seteo del estado
    setUser: (newUser: User) => {
      set(() => ({ user: newUser }))
    }
  }
));