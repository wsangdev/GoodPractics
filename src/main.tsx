import ReactDOM from 'react-dom/client'
import {App} from './app/App.tsx'
import './global.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <App />
)

/* 
  Cosas que me falta agregar aqui que necesito :
  0. La etiqueta LINK para que no recarge la pagina, solo lo que se me modifique y tambien la proteccion de rutas, con React-Router-DOM
  1. Custom Hook para hacer peticiones a Apis 
  2. La Carpeta Services para ver Como se Relaciona 
  3. El Manejador de Estados con Soustand. 
  4. Algunos Patrones de Diseno como HOC 
  5. Mis Test para ver como corren mis componentes


  ojo: TODAS ESTAS COSAS PUEDO AGREGAR A MI PROYECTO PARA COMENZAR A REALIZAR PROYECTOS LIMPIOS ORDENADOS Y ESCALABLES . 

*/