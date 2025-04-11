import logo from "../../assets/technology.jpg"


const products=[
    {
        image:logo,
        text:"product name"
    },
    {
        image:logo,
        text:"product name"
    },
    {
        image:logo,
        text:"product name"
    },
    {
        image:logo,
        text:"product name"
    },
    {
        image:logo,
        text:"product name"
    },
    {
        image:logo,
        text:"product name"
    },
    {
        image:logo,
        text:"product name"
    },
    {
        image:logo,
        text:"product name"
    },
]

const LatestProducts = () => {
    return <>
        <section className="py-5">
            <h2 className="text-xl text-center mb-6">See Our Latest Products</h2>
            <div className="flex flex-wrap">
                {
                    products.map(c => {
                        return <a className="block max-w-37 w-full p-3" href="#">
                            <div className="pt-[100%] relative">
                                <img src={c.image} className="rounded-lg w-full absolute top-0 left-0 right-0 bottom-0 h-full object-cover" />
                            </div>
                            <p className="text-center">{c.text}</p>
                        </a>
                    })
                }
            </div>
        </section>
    </>
}

export default LatestProducts