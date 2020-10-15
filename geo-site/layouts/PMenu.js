import Link from "next/link";
import HMenu from "./HMenu";

export default function PMenu({children}) {
    return (
        <HMenu>
        <nav>
            <Link href="/products/screens"><a>Щелевые сита</a></Link>
            <Link href="/products/filters"><a>Фильтры</a></Link>
            <Link href="/products/baskets"><a>Щелевые корзины и цилиндры</a></Link>
            <Link href="/products/special"><a>Кассеты и внутриние устройства реактора</a></Link>
            <Link href="/products/profile"><a>Профиль</a></Link>
        </nav>
       <section>
           {children}
       </section>
      </HMenu>
    )
}