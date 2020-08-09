import Link from "next/link";

export default function HMenu({children}) {
    return (
        <>
        <header>
            <img src="/logo.png" alt="LOGO" className="logo"/>
            <div>
                <p>mail</p>
                <p>telephone</p>
            </div>
        </header>
        <nav>
            <Link href="/"><a >Home</a></Link>
            <Link href="/about"><a>About</a></Link>
            <Link href="/contact"><a>Contact</a></Link>
            <Link href="/manufacture"><a>Manufacture</a></Link>
            <Link href="/products"><a>Products</a></Link>
        </nav>
        <main>
            {children}
        </main>
        <footer className="footer">
            <address>Rostov tam</address>
            <p>mail</p>
            <p>telephone</p>
            <p>Skype</p>
        </footer>
        </>
    )
}