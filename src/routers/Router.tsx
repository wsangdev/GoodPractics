import { Route, Routes } from "react-router-dom"
import { routers } from "./routerConfig"

export const AppRouter = () => {
  return (
    <Routes>
      {
        routers.map((route:any, index:number) => (
          <Route key={index} path={route.path} element={route.element}  />
        ))
      }
    </Routes>
  )
}