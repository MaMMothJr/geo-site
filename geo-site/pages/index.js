import Head from 'next/head'
import HMenu from "../layouts/HMenu";
import ClientCarousel from "../components/ClientCarousel";
import Link from "next/link";

export default function Home() {
  return (
    <HMenu>
      <Head>
        <title>Георесурс | Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
          <video src="/images/video/1.mp4" autoPlay muted loop></video>
          <h2>Продукция</h2>
          <div className="mainProducts">
            <Link href="/products/screens"><a><img src="/images/fp/screens.png" alt="oil" /><br />Щелевые сита</a></Link>
            <Link href="/products/filters"><a><img src="/images/fp/filters.png" alt="coal" /><br />Фильтры скважинные</a></Link>
            <Link href="/products/baskets"><a><img src="/images/fp/baskets.png" alt="paper" /><br />Щелевые корзины и цилиндры</a></Link>
            <Link href="/products/special"><a><img src="/images/fp/special.png" alt="water" /><br />Кассеты и внутриние устройства реакторов</a></Link>
            <Link href="/products/profile"><a><img src="/images/fp/profile.png" alt="atom" /><br />Профиль</a></Link>
          </div>
         <h2 className="ourClient">Наши клиенты</h2>
         <div>
           <ClientCarousel />
          </div>
      </main>
    </HMenu>
  )
}
