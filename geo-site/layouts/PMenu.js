import Link from "next/link";
import HMenu from "./HMenu";

export default function PMenu({children}) {
    return (
        <HMenu>
        <nav>
            <Link href="/products/oil"><a>Oil</a></Link>
            <Link href="/products/coal"><a>Coal</a></Link>
            <Link href="/products/papper"><a>Papper</a></Link>
            <Link href="/products/water"><a>Water</a></Link>
            <Link href="/products/atom"><a>Atom</a></Link>
        </nav>
       <section>
           {children}
       </section>
      </HMenu>
    )
}