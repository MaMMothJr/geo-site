import HMenu from "../../layouts/HMenu";
import Link from "next/link";

export default function Products() {
    return  (
        <HMenu>
            <h1>
                    Products
            </h1>
            <nav>
                <Link href="/products/screens"><a>Щелевые сита</a></Link>
                <Link href="/products/filters"><a>Фильтр</a></Link>
                <Link href="/products/baskets"><a>Корзины и цилиндры</a></Link>
                <Link href="/products/special"><a>Кассеты и внутриние устройства реакторов</a></Link>
                <Link href="/products/profile"><a>Профиль</a></Link>
            </nav>
        </HMenu>
    )
}