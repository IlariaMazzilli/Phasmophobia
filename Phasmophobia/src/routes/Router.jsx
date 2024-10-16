import { createBrowserRouter } from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import TheGame from '../pages/TheGame'
import Contact from '../pages/Contact'

export const Routes = createBrowserRouter([
    {
        path: "/",
        element: (
            <>
                <Navbar />
                <Home />
                <Footer />
            </>

        )
    },
    {
        path: "/about",
        element: (
            <>
                <Navbar />
                <About />
            
            </>
        )
    },
    {
        path: "/the-game",
        element: (
            <>
                <Navbar />
                <TheGame />
                <Footer />
            </>
        )
    },
    {
        path: "/contacts",
        element: (
            <>
                <Navbar />
                <Contact />
              
            </>
        )
    }
])