import PMenu from "../../../layouts/PMenu";
import Link from "next/link";

export default function Filters() {
    return(
        <PMenu>
            <h2>Фильтры скважинные</h2>
            <nav className="nav_filters">
                <Link href="/products/filters/filterFSB"><a><img src="/images/product/filters/filterFSB/FilterFSB1.png" alt="oil" /><br />Фильтр скважинный бескаркасный ФС-Б</a></Link>
                <Link href="/products/filters/filterFSK"><a><img src="/images/product/filters/filterFSK/FilterFSK1.png" alt="oil" /><br />Фильтр скважинный щелевой каркасный ФС-К</a></Link>
                <Link href="/products/filters/filterFSKz"><a><img src="/images/product/filters/filterFSKz/FilterFSKz1.png" alt="oil" /><br />Фильтр скважинный щелевой каркасный с герметизирующими заглушками ФС-К-(З)</a></Link>
                <Link href="/products/filters/filterFSP"><a><img src="/images/product/filters/filterFSP/FilterFSP1.png" alt="oil" /><br />Фильтр скважинный перфорированный ФС-П</a></Link>
                <Link href="/products/filters/filterFSPz"><a><img src="/images/product/filters/filterFSPz/FilterFSPz1.png" alt="oil" /><br />Фильтр скважинный перфорированный с герметизирующими заглушками ФС-П-(З)</a></Link>
                <Link href="/products/filters/filterUCN"><a><img src="/images/product/filters/filterUCN/FilterUCN1.png" alt="oil" /><br />Фильтр щелевой УЭЦН</a></Link>
                <Link href="/products/filters/filterSHGN"><a><img src="/images/product/filters/filterSHGN/FilterSHGN.jpg" alt="oil" /><br />Фильтр щелевой штангового глубинного насоса</a></Link>
            </nav>

        </PMenu>
    )
}