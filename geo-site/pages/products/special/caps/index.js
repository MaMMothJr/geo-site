import PMenu from "../../../../layouts/PMenu";
import Link from "next/link";

export default function Caps() {
    return(
        <PMenu>
            <Link href="/products/special"><a>Back</a></Link>
            <h2>Водоподготовка</h2>
            <img src="/images/product/special/caps/1.png" className="" alt="catridge"/>
            <p>Дренажно-распределительные устройств(ДРУ) используются в механических (осветительных), сорбционных и ионообменных (катионитных, анионитных) фильтрах, в процессах осветления, умягчения, обескремнивания, опреснения и обессоливания питательной воды котлов и обработки турбинного конденсата атомных и тепловых электростанций и конденсата пара, а также в напорных и безнапорных фильтрах очистных сооружений питьевой воды и установках очистки сточных вод.

                Компания ООО "ГЕОРЕСУРС" предлагает несколько видов дренажно-распределительных устройств щелевого типа, а так же комплектующие к ним: колпочки, лучи, щелевые трубы</p>
            <div className="img_caps">
                <img src="/images/product/special/caps/1.png" className="" alt="catridge"/>
                <img src="/images/product/special/caps/1.png" className="" alt="catridge"/>
            </div>
        </PMenu>
    )
}