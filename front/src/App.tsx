import Home from './pages/Home'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

const router = createBrowserRouter([
  {
    path: "/",
    Component: Home,
  },
  {
    path: "/signin",
    Component: SignIn,
  },
  {
    path: "/signup",
    Component: SignUp,
  },
]);

function App() {

  return (
    <>
    {/* <Navbar/>
    <main> */}
      <RouterProvider router={router} />
    {/* </main>
    <Footer /> */}
    </>
  )
}

export default App
