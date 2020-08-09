import Head from 'next/head'
import HMenu from "../layouts/HMenu";

export default function Home() {
  return (
    <HMenu>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
          <div>
              Карусель фоточек
          </div>
          <h2>Наши клиенты</h2>
          <div>
              Карусель клиентов
          </div>
      </main>
    </HMenu>
  )
}
