import Head from 'next/head'
import HMenu from "../layouts/HMenu";
import SectionCarousel from "../components/SectionCarousel";
import ClientCarousel from "../components/ClientCarousel";

export default function Home() {
  return (
    <HMenu>
      <Head>
        <title>Георесурс | Home</title>
          <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
                integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z"
                crossOrigin="anonymous"></link>
        <link rel="icon" href="/favicon.ico" />

      </Head>
      <main>
    <SectionCarousel />
          <h2 className="ourClient">Наши клиенты</h2>
          <div>
              <ClientCarousel />
          </div>
      </main>
    </HMenu>
  )
}
