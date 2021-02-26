import PMenu from "../../../../layouts/PMenu";
import Link from "next/link";

export default function FilterFSP() {
    return(
        <PMenu>
            <Link href="/products/filters"><a>Back</a></Link>
            <h2>Фильтр скважинный перфорированный ФС-П</h2>
            <img src="/images/product/filters/filterFSP/FilterFSP1.png" className="filter_image" alt="fsp1"/>
            <p>Фильтр скважинный перфорированный ФС-П представляет собой перфорированную насосно-компрессорную или обсадную трубу.</p>
            <p>Производственные мощности нашего предприятия позволяю перфорировать трубы различными диаметрами и геометрией отверстий, а также задавать шаг между ними в зависимости от требований Заказчика.</p>
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
        </PMenu>
    )
}