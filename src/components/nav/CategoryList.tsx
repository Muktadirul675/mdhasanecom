
let categories: string[] = ['Exclusive Mobile Phone', 'Kids Product', 'Health Care', 'Mobile Phone']

function Category({ category }: { category: string }) {
    return (
        <a href="/" className="block me-5 font-bold hover:underline transition-all">
            {category.toUpperCase()}
        </a>
    )
}

export default function CategoryList() {
    return (
        <div className="hidden md:block bg-base-theme w-[100vw] p-2">
            <div className="w-1/2 mx-auto text-white flex flex-row">
                {categories.map((c) => <Category key={c} category={c} />)}
            </div>
        </div>
    )
}