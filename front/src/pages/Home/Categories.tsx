import TechnologyLogo from "../../assets/technology.jpg"

const categories = [
    {
        image: TechnologyLogo,
        text: "Technology & Electronics"
    },
    {
        image: TechnologyLogo,
        text: "Fashion & Accessories"
    },
    {
        image: TechnologyLogo,
        text: "Home & Kitchen"
    },
    {
        image: TechnologyLogo,
        text: "Entertainment & Leisure"
    }

]

const Categories = () => {
    return <>
        <section className="py-5">

            <h2 className="text-xl text-center mb-6">Shop our most popular categories</h2>
            <div className="flex flex-wrap items-start justify-center">
                {
                    categories.map(c => {
                        return <a className="block max-w-37 w-full p-3" href="#">
                            <div className="pt-[100%] relative">
                                <img src={c.image} className="rounded-full w-full absolute top-0 left-0 right-0 bottom-0 h-full object-cover" />
                            </div>
                            <p className="text-center">{c.text}</p>
                        </a>
                    })
                }
                {/* <a className="block" href="#">
                <img src={TechnologyLogo} className="rounded-full w-40 h-40 " />
                <p>Technology & Electronics</p>
                </a>
                <a className="block" href="#">
                <img src={TechnologyLogo} className="rounded-full w-40 h-40 " />
                <p>Technology & Electronics</p>
                </a>
                <a className="block" href="#">
                <img src={TechnologyLogo} className="rounded-full w-40 h-40 " />
                <p>Technology & Electronics</p>
                </a>
                <a className="block" href="#">
                <img src={TechnologyLogo} className="rounded-full w-40 h-40 " />
                <p>Technology & Electronics</p>
                </a>
                <a className="block" href="#">
                <img src={TechnologyLogo} className="rounded-full w-40 h-40 " />
                <p>Technology & Electronics</p>
                </a>
                <a className="block" href="#">
                <img src={TechnologyLogo} className="rounded-full w-40 h-40 " />
                <p>Technology & Electronics</p>
                </a> */}
            </div>
        </section>
    </>
}

export default Categories