import Head from 'next/head'
const Nav = (await import('app1/Nav')).default
const add = (await import('app1/add')).default
const multiplyByTwo = (await import('app1/multiplyByTwo')).default
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>App 2</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />
      <main className={styles.main}>
        <h2>
          {`Adding 2 and 3 ==>`} {add(2, 3)}
        </h2>
        <h2>
          {`Multiplying 5 and 2 ==>`} {multiplyByTwo(5)}
        </h2>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}
