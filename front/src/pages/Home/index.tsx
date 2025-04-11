import Footer from "../../components/Footer"
import Navbar from "../../components/Navbar"
import Categories from "./Categories"
import LatestProducts from "./LatestProducts"


const Home = () => {
    return <>
        <Navbar />
        <main className="max-w-[1100px] mx-auto px-5">
            <Categories />
            <LatestProducts />
        </main>
        <Footer />
    </>
}

export default Home