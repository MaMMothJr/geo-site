import PMenu from "../../../../layouts/PMenu";
import Link from "next/link";

export default function Cartridge() {
    return(
        <PMenu>
            <Link href="/products/special"><a>Back</a></Link>
            <h2>Кассеты и корзины для сорбционных аппаратов</h2>
            <article className="article_product">Шпальтовые кассеты применяются при кислотно-щелочном способе добычи путем разделения рудосодержащей смолы
                от кислотно-щелочного раствора и определяется стойкостью материала к кислотно-щелочному раствору и жесткостью
                конструкции шпальтовой кассеты к гидродинамическому удару. Изготавливаются согласно техническим требованиям
                Заказчика. ООО “ГЕОРЕСУРС” производит шпальтовые кассеты для колон СНК-3М, КИ-2000, СДК-1500, сита
                контрольные конические и др.</article>
            <div className="product_image_block">
                <img src="/images/product/special/cartridge/1.png" className="product_image" alt="catridge"/>
                <img src="/images/product/special/cartridge/3.png" className="product_image" alt="catridge3"/>
            </div>
            <table>
                <caption>Краткие характеристики</caption>
                <tr>
                    <th>Параметры и размеры</th>
                    <th>Значение</th>
                </tr>
                <tr>
                    <td>Диаметр, мм</td>
                    <td>от 30</td>
                </tr>
                <tr>
                    <td>Длинна, мм</td>
                    <td>до 10 000</td>
                </tr>
                <tr>
                    <td>Щирина щели, мм</td>
                    <td>от 0,05</td>
                </tr>
                <tr>
                    <td>Среда применения, рН</td>
                    <td>1-14</td>
                </tr>
            </table>

            <table>
                <caption>Применяемые стали</caption>
                <tr>
                    <th>Марки стали</th>
                    <th>Применения</th>
                </tr>
                <tr>
                    <td>AiSi321<br/>
                        12Х18Н10Т<br/>
                        08Х18Н10Т<br/>
                        12Х18Н9Т</td>
                    <td>Используется для работы в агрессивных растворах азотной, уксусной, фосфорной кислот, растворах щелочей, солей и других средах органического характера, некоторых органических кислотах средних концентраций, органических растворителя</td>
                </tr>
                <tr>
                    <td>AiSi316Ti<br/>
                        10Х17Н13М2Т</td>
                    <td>Используется для  работы в условиях воздействия фосфорной, сернистой, муравьиной, молочной, щавелевой, уксусной кислот, ионов хлора и других средах повышенной агрессивности. Сохраняет устойчивость в концентрированных растворах едкого натра (50% при t до 100°)</td>
                </tr>
                <tr>
                    <td>AiSi316<br/>
                        03Х17Н14М3<br/>
                        08Х16Н11М3</td>
                    <td>Используется для работы с  растворами кислотам серной, молочной, уксусной, фосфорной, муравьиной, борной, щавелевой. При этом сталь неизменно сохраняет свои свойств, в том числе, при повышенной температуре. Особенную устойчивость этот сплав проявляет к серной кислоте и ее солям.</td>
                </tr>
                <tr>
                    <td>AiSi304<br/>
                        08Х18Н10</td>
                    <td>Используется для работы с разбавленными растворами азотной, фосфорной и уксусных кислот, растворами щелочей и солей, а так же при работе в высоких температурах. </td>
                </tr>
            </table>
            <div className="product_image_block">
                <img src="/images/product/special/cartridge/2.png" className="product_image" alt="catridge2"/>
                <img src="/images/product/special/cartridge/4.png" className="product_image" alt="catridge4"/>
            </div>

        </PMenu>
    )
}