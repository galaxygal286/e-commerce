import Home from './pages/Home'
import Header from './pages/Header'
import Footer from './pages/Footer'
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
    <Header/>
    <main>
      <RouterProvider router={router} />
    </main>
    <Footer />
    </>
  )
}

export default App
