import PMenu from "../../../layouts/PMenu";
import Link from "next/link";

export default function Special() {
    return(
        <PMenu>
            <nav>
                <Link href="/products/special/cartridge"><a><img src="/images/product/special/1.JPG" alt="oil" />Кассеты и корзины</a></Link>
                <Link href="/products/special/caps"><a><img src="/images/product/special/2.jpg" alt="oil" />Водподготовка</a></Link>
                <Link href="/products/special/reactor"><a><img src="/images/product/special/3.jpg" alt="oil" />Внутренние устройства реакторов</a></Link>
            </nav>
       </PMenu>
    )
}