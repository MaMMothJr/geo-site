import HMenu from "../../layouts/HMenu";
import Link from "next/link";

export default function Products() {
    return  (
        <HMenu>
            <h1>
                    Products
            </h1>
            <nav>
                <Link href="/products/oil"><a>Oil</a></Link>
                <Link href="/products/coal"><a>Coal</a></Link>
                <Link href="/products/papper"><a>Papper</a></Link>
                <Link href="/products/water"><a>Water</a></Link>
                <Link href="/products/atom"><a>Atom</a></Link>
            </nav>
        </HMenu>
    )
}