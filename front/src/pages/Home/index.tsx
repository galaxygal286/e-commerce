import Categories from "./Categories"
import LatestProducts from "./LatestProducts"


const Home=()=>{
    return <>
        <main className="max-w-[1100px] mx-auto px-5">
            <Categories/>
            <LatestProducts/>
        </main>
    </>
}

export default Home