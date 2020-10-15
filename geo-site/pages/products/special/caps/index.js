import PMenu from "../../../../layouts/PMenu";
import Link from "next/link";

export default function Caps() {
    return(
        <PMenu>
            <Link href="/products/special"><a>Back</a></Link>
            <h2>Колпачки</h2>
        </PMenu>
    )
}