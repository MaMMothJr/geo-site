import PMenu from "../../../../layouts/PMenu";
import Link from "next/link";

export default function Reactor() {
    return(
        <PMenu>
            <Link href="/products/special"><a>Back</a></Link>
            <h2>Внутриние устройства реакторов</h2>
        </PMenu>
    )
}