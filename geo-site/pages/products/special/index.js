import PMenu from "../../../layouts/PMenu";
import Link from "next/link";

export default function Special() {
    return(
        <PMenu>
          <nav>
              <Link href="/products/special/cartridge"><a>Кассеты и корзины для сорбционных аппаратов</a></Link>
              <Link href="/products/special/caps"><a>Колпачки</a></Link>
              <Link href="/products/special/reactor"><a>Устройство реакторов</a></Link>
          </nav>
            <h2>
               Колпачки
               Внутриние устройства реакторов
            </h2>
        </PMenu>
    )
}