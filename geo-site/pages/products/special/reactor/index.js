import PMenu from "../../../../layouts/PMenu";
import Link from "next/link";

export default function Reactor() {
    return(
        <PMenu>
            <Link href="/products/special"><a>Back</a></Link>
            <h2>Внутриние устройства реакторов</h2>
            <p>ООО «ГЕОРЕСУРС» проектирует и изготавливает оборудование для предприятий нефтепереработки. В том числе внутренние устройства реакторов реформинга и гидроочистки, фильтры различного назначения. Для изготовления внутренних устройств и фильтров используется нержавеющая сталь.</ p>

            <div className="img_reactor">
                <div>
                    <img src="/images/product/special/reactor/3.jpg" className="" alt="catridge"/>
                    <h5>Внутренние устройства реакторов с аксиальным вводом сырья</h5>
                </div>
               <div>
                   <img src="/images/product/special/reactor/2.jpg" className="" alt="catridge"/>
                   <h5>Внутренние устройства реакторов с радиальным вводом сырья</h5>
               </div>

            </div>

                <p className="text_reactor">
                    <h5>Изготавливаемые элементы:</h5>
                - верхнее распределительное устройство<br />
                - крышка верхняя (тарелка) <br />
                - труба центральная <br />
                - скаллопы <br />
                - кольца разжимные <br />
                - щелевые сита в конструкции реактора
                </p>
            <img src="/images/product/special/reactor/1.jpg" className="img_reactor_last" alt="catridge"/>
        </PMenu>
    )
}