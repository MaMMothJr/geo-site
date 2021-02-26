import HMenu from "../../layouts/HMenu";
import SimpleMap from "../../components/GoogleMap";
import Mapbox from "../../components/Mapbox";

export default function Contact() {
    return  (
        <HMenu>
            <h2>
                Контакты
            </h2>
            <div className="address">
                <h3>ООО "ГЕОРЕСУРС"</h3>
                Россия, 344064, Ростовская обл.,<br /> Ростов-на-Дону,<br /> Радиаторный пер., 7В <br /> info@georesurs.com.ru<br /> +7 (863) 209-83-10 <br /> +7 (863) 285-01-04
                <div>E-mail: <a href="mailto:info@georesurs.com.ru?subject=Запрос&amp">info@georesurs.com.ru</a></div>
            </div>
            <map>
                <Mapbox />
            </map>
        </HMenu>
    )
}