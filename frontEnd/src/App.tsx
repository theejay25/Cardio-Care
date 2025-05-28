import { BrowserRouter, Route, Routes } from "react-router-dom"
import LandingPage from "./pages/LandingPage"
import Signup from "./pages/Signup"


function App() {
  

  return (
    <>
      <BrowserRouter >
        <Routes>
          <Route element={<LandingPage />} path={'/'} />
          <Route element={<Signup />} path={'/signup'} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
