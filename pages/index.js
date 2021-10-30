import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import logopms from '../public/imagens/logo-pms.png'
import logofilo from '../public/imagens/logo-filometro.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
library.add(fas)

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Clone Filômentro covid-19</title>
        <meta name="description" content="Clone do Filômentro" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <div className={styles.header}>
        <Image src={logofilo} alt="Filômentro" />
        <Image src={logopms} alt="Covid-19" />
      </div>

      <main className={styles.main}>

        <div className={styles.status}>

          <div className={styles.statusCard}>
            <FontAwesomeIcon className={styles.icon} icon="clinic-medical" />
            <div className={styles.cardData}>
              <p>POSTOS ATIVOS</p>
              <p>15</p>
            </div>
          </div>

          <div className={styles.statusCard}>
            <FontAwesomeIcon className={styles.icon} icon="syringe" />
            <div className={styles.cardData}>
              <p>VACINADOS HOJE</p>
              <p>(1ª, 2ª E 3ª DOSES)</p>
              <p>9.493</p>
            </div>
          </div>

          <div className={styles.statusCard}>
            <FontAwesomeIcon className={styles.icon} icon="chart-line" />
            <div className={styles.cardData}>
              <p>MÉDIA GERAL</p>
              <p>DRIVE THRU</p>
              <p>Poucas filas</p>
            </div>
          </div>

          <div className={styles.statusCard}>
            <FontAwesomeIcon className={styles.icon} icon="chart-line" />
            <div className={styles.cardData}>
              <p>MÉDIA GERAL</p>
              <p>POSTOS FIXOS</p>
              <p>Filas Moderadas</p>
            </div>
          </div>

        </div>

      </main>

      <footer className={styles.footer}>
        <p>Belicio Cardoso &copy; {new Date().getFullYear()}</p>
      </footer>
    </div>
  )
}
