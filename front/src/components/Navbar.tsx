import { MagnifyingGlassIcon } from "@heroicons/react/24/outline"

const Navbar=()=>{
    return <>
        <header className="border-b border-gray-200 mx-auto max-w-[1100px]">
            <nav className="flex items-center justify-between p-5">
                <div>
                    E-Commerce
                </div>
                <div className="space-x-5">
                    <div>
                        <div></div>
                        <button>
                            <MagnifyingGlassIcon className="w-6 h-6"/>
                        </button>
                    </div>
                    <a className="text-sm font-medium text-gray-700 hover:text-gray-800" href="#">Sign in</a>
                    <a className="text-sm font-medium text-gray-700 hover:text-gray-800" href="#">Cart</a>
                </div>
            </nav>
        </header>
    </>
}

export default Navbar