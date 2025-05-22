import { BrowserRouter, Route, Routes } from "react-router-dom"
import LandingPage from "./pages/LandingPage"


function App() {
  

  return (
    <>
      <BrowserRouter >
        <Routes>
          <Route element={<LandingPage />} path={'/'} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
