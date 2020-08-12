import Link from "next/link";


export default function HMenu({children}) {
    return (
        <>
        <header>
            <img src="/images/logo.png" className="logo" alt="somelo"/>
            <div>
                <p>Общество с ограниченной отвественностью</p>
                <h1>"ГЕОРЕСУРС"</h1>
            </div>

            <div>
                <p>E-mail:info@georesurs.com.ru</p>
                <p>+7 (863) 209-83-10</p>
            </div>
        </header>
        <nav>
            <Link href="/"><a >Home</a></Link>
            <Link href="/about"><a>О Компании</a></Link>
            <Link href="/products"><a>Продукция</a></Link>
            <Link href="/manufacture"><a>Производство</a></Link>
            <Link href="/contact"><a>Контакты</a></Link>
        </nav>
        <main>
            {children}
        </main>
        <footer className="footer">
            <address>
                <p>Российская федереация, <br />
                г.Ростов-на-Дону<br />
                переулок Радиаторный, 7В</p>
            </address>
            <p>info@georesurs.com.ru</p>
            <p>+7(863) 209-83-10</p>
        </footer>
        </>
    )
}