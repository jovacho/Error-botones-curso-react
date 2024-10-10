import { AboutPage } from "./AboutPage"
import { HomePage } from "./HomePage"
import { LoginPage } from "./LoginPage"


export const AppRouter = () => {
    <Routes>
        //Acá se añaden todas las rutas que necesitemos
        //Tendrá la siguiente estructura ejemplo

        {/* Login y Registro */}
        <Route path="/auth/*" element={ <LoginPage /> } /> 

        {/* AboutPage */}
        <Route path="/about/*" element={ <AboutPage /> } />

        {/* HomePage */}
        <Route path="/home/*" element={ <HomePage /> } />

    </Routes>
}
