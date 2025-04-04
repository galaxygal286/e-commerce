import Home from './pages/Home'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Home,
  },
]);

function App() {

  return (
    <>
    <Navbar/>
    <main>
      <RouterProvider router={router} />
    </main>
    <Footer />
    </>
  )
}

export default App
