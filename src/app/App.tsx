import { Suspense } from "react"
import { BrowserRouter as Router} from "react-router-dom"
import { AppRouter } from "../routers/Router"
import Loading from "../components/Loading"

export const App = () => {
  return (
    <div>
      <Router>
        <Suspense fallback={<Loading/>} >
          <AppRouter/>
        </Suspense>
      </Router>
    </div>
  )
}
