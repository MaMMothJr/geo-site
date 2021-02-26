import PMenu from "../../../layouts/PMenu";
import Link from "next/link";

export default function Screens() {
    return(
        <PMenu>
            <h2>Щелевые сита</h2>
            <nav className="nav_screens">
                <Link href="/products/screens/arc"><a><img src="/images/product/screens/0006.jpg" alt="oil" />Дуговые сита</a></Link>
                <Link href="/products/screens/flat"><a><img src="/images/product/screens/0005.jpg" alt="oil" />Плоские сита</a></Link>
            </nav>
        </PMenu>
    )
}