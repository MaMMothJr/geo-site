import PMenu from "../../../../layouts/PMenu";
import Link from "next/link";

export default function Reactor() {
    return(
        <PMenu>
            <Link href="/products/special"><a>Back</a></Link>
            <h2>Внутриние устройства реакторов</h2>
            <img src="/images/product/special/reactor/1.jpg" className="" alt="catridge"/>
            <p>ООО «ГЕОРЕСУРС» проектирует и изготавливает оборудование для предприятий нефтепереработки. В том числе внутренние устройства реакторов реформинга и гидроочистки, фильтры различного назначения. Для изготовления внутренних устройств и фильтров используется нержавеющая сталь.</ p>

                <h5>Внутренние устройства реакторов с аксиальным вводом сырья</h5>
            <img src="/images/product/special/reactor/3.jpg" className="" alt="catridge"/>
                <h5>Внутренние устройства реакторов с радиальным вводом сырья</h5>
                - верхнее распределительное устройство
                - крышка верхняя (тарелка)
                - труба центральная
                - скаллопы
                - кольца разжимные
            <img src="/images/product/special/reactor/2.jpg" className="" alt="catridge"/>
                <h5>3. Щелевые сита в конструкции реактора</h5>
            <img src="/images/product/special/reactor/1.jpg" className="" alt="catridge"/>
        </PMenu>
    )
}