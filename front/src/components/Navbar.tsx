import { MagnifyingGlassIcon } from "@heroicons/react/24/outline"
import { Link } from "react-router"


const Navbar=()=>{
    return <>
        <header className="border-b border-gray-200 mx-auto max-w-[1100px]">
            <nav className="flex items-center justify-between p-5">
                <div>
                    E-Commerce
                </div>
                <div className="flex items-center space-x-5">
                    <div className="flex flex-wrap">
                        <input type="text" className="outline-1 -outline-offset-1 outline-gray-300 rounded-l-lg px-4 py-2"/>
                        <button className="cursor-pointer outline-1 -outline-offset-1 outline-gray-300 rounded-r-lg px-4 py-2">
                            <MagnifyingGlassIcon className="w-6 h-6"/>
                        </button>
                    </div>
                    <Link to="/signin" className="text-sm font-medium text-gray-700 hover:text-gray-800">Sign in</Link>
                    <a className="text-sm font-medium text-gray-700 hover:text-gray-800" href="#">Cart</a>
                </div>
            </nav>
        </header>
    </>
}

export default Navbar