import HMenu from "../../layouts/HMenu";

export default function Manufacture() {
    return  (
        <HMenu>
            <h2>
                Производство
            </h2>
            <div className="sectionManufa">
                <img src="/images/manufacture/1.png" className="manufa" alt="about"/>
                <p>
                    ООО "ГЕОРЕСУРС" обладает cобственной производственной базой и располагает всем необходимым перечнем современного станочного оборудования, инструмента, инженерно-техническим потенциалом, что гарантирует высокое качество и долговечность выпускаемой продукции, а также решения сложных технических задач с учетом особенностей технологических процессов и требований Заказчика.
                </p>
            </div>
            <div className="sectionManufa">
                <p>
                    Производство имеет следующие основные участки: <br />
                    • приема сырья; <br />
                    • заготовительный; <br />
                    • механический; <br />
                    • сборочный; <br />
                    • склад готовой продукции.
                </p>
                <img src="/images/manufacture/2.png" className="manufahard" alt="about"/>
            </div>
            <div className="sectionManufa">
                <img src="/images/manufacture/3.png" className="manufa" alt="about"/>
                <p>
                    Производство сертифицировано по требованию стандарта системы менеджмента
                    ISO 9001-2015 / ГОСТ Р ИСО 9001:2015 в области сертификации, конструирования, производства и реализации изготавливаемого оборудования. Что подтверждает качество контроля выполняемых технологических операций при производстве продукции.
                </p>
            </div>
        </HMenu>
    )
}