import { UserProvider } from "./context/UserProvider"
import { Navigate, Route, Routes, Link } from "react-router-dom"
import { HomePage } from "./HomePage"
import { AppRouter } from "./AppRouter"
import { AboutPage } from "./AboutPage"
import { LoginPage } from "./LoginPage"
import { Navbar } from "./Navbar"



export const MainApp = () => {
  return (
    <UserProvider>
        {/* <h1>MainApp</h1> */}
        {/* <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/login">Login</Link> */}
        <Navbar />
        <hr />

        
        <Routes>
            <Route path="/" element={<HomePage /> } />
            <Route path="login" element={<LoginPage /> } />
            <Route path="about" element={<AboutPage /> } />

            {/* <Route path="/*" element={ <LoginPage /> } /> */}
            <Route path="/*" element={ <Navigate to="/about" /> } />

        </Routes>

        
    </UserProvider>
  )
}
