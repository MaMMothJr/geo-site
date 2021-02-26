import HMenu from "../../layouts/HMenu";
import Link from "next/link";

export default function Products() {
    return  (
        <HMenu>
            <h2>
                    Продукция
            </h2>
            <nav className="mainProducts">
                <Link href="/products/screens"><a><img src="/images/fp/screens.png" alt="oil" /><br />Щелевые сита</a></Link>
                <Link href="/products/filters"><a><img src="/images/fp/filters.png" alt="coal" /><br />Фильтры скважинные</a></Link>
                <Link href="/products/baskets"><a><img src="/images/fp/baskets.png" alt="paper" /><br />Щелевые корзины и цилиндры</a></Link>
                <Link href="/products/special"><a><img src="/images/fp/special.png" alt="water" /><br />Кассеты и внутриние устройства реакторов</a></Link>
                <Link href="/products/profile"><a><img src="/images/fp/profile.png" alt="atom" /><br />Профиль</a></Link>
            </nav>
        </HMenu>
    )
}