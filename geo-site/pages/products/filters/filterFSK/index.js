import PMenu from "../../../../layouts/PMenu";
import Link from "next/link";

export default function FilterFSK() {
    return(
        <PMenu>
            <Link href="/products/filters"><a>Back</a></Link>
            <h2>Фильтр скважинный щелевой каркасный ФС-К</h2>
            <img src="/images/product/filters/filterFSK/FilterFSK1.png" className="filter_image" alt="fsk1"/>
            <p>Фильтр скважинный щелевой каркасный ФС-К состоит из перфорированной обсадной или насосно-компрессорной трубы и фильтрующего элемента, представляющего собой нержавеющую сварную конструкцию, состоящую из несущих опорных колосников с обмоткой профилированным, клиновидным (треугольным) профилем намотанным по спирали вокруг опорных колосников, соединенных методом точечной сварки во всех местах контакта. В результате образуется многоярусный цилиндр, при этом имеющий одно непрерывное отверстие, которое идет по спирали вдоль всей его длины.</p>
            <img src="/images/product/filters/filterFSK/FilterFSK2.png" className="filter_image" alt="fsk2"/>
            <table>
                <caption>Технические характеристики</caption>
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