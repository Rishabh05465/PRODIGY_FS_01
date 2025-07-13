import { createBrowserRouter, RouterProvider } from "react-router-dom"
import ForgotPassword from "./pages/ForgotPassword"
import Login from "./pages/Login"
import Registration from "./pages/Registration"

function App() {
  const router = createBrowserRouter([
    {
      path:"/",
      element:<Login/>,
      errorElement:<div>error 404</div>
    },
    {
      path:"/login",
      element:<Login/>,
      errorElement:<div>error 404</div>
    },
    {
      path:"/registration",
      element:<Registration/>,
      errorElement:<div>error 404</div>
    },
    {
      path:"/forgot_password",
      element:<ForgotPassword/>,
      errorElement:<div>error 404</div>
    }
  ])

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
