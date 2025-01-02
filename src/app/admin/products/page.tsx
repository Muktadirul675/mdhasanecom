import Link from "next/link"

export default async function ProductPage(){
    return(
        <Link className="btn" href='/admin/products/add'>Add Product</Link>
    )
}