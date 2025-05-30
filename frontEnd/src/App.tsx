import { BrowserRouter, Route, Routes } from "react-router-dom"
import LandingPage from "./pages/LandingPage"
import Signup from "./pages/Signup"
import AdminDashboard from "./pages/AdminDashboard"
import Signin from "./pages/Signin"


function App() {
  

  return (
    <>
      <BrowserRouter >
        <Routes>
          <Route element={<LandingPage />} path={'/'} />
          <Route element={<Signup />} path={'/signup'} />
          <Route element={<AdminDashboard />} path={'/admin/dashboard'} />
          <Route element={<Signin />} path={'/login'} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
