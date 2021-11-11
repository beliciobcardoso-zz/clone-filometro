import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import logopms from '../public/imagens/logo-pms.png';
import logofilo from '../public/imagens/logo-filometro.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import LocVac from '../components/LocaisVacinacao';
import StatusCard from '../components/StatusCard';
import { fas } from '@fortawesome/free-solid-svg-icons';
library.add(fas);
import { useState, useEffect } from 'react';

export default function Home({ data }) {
    const [showBackToTop, setShowBackToTop] = useState(false);

    const handleScroll = () => {
        if (window.scrollY > (window.innerHeight * 3) / 4) {
            setShowBackToTop(true);
        } else {
            setShowBackToTop(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    });

    const arrayDriveThru = data.drivethru.map((post) => post.ativo);
    const arrayPostosFixo = data.postosfixo.map((post) => post.ativo);

    const driveThru = arrayDriveThru.reduce(
        (previousValue, currentValue) => previousValue + currentValue,
    );
    const postosFixos = arrayPostosFixo.reduce(
        (previousValue, currentValue) => previousValue + currentValue,
    );
    const totalPostosAtivos = driveThru + postosFixos;

    return (
        <div className={styles.container}>
            <Head>
                <meta name="description" content="Clone do Filômentro" />
                <link rel="icon" href="/favicon.png" />
                <title>Clone Filômentro covid-19</title>
            </Head>

            <div className={styles.header}>
                <Image src={logofilo} alt="Filômentro" />
                <Image src={logopms} alt="Covid-19" />
            </div>

            <main className={styles.main}>
                <div className={styles.status}>
                    <StatusCard
                        icon={'clinic-medical'}
                        subtitle1={'POSTOS ATIVOS'}
                        status={totalPostosAtivos}
                    />
                    <StatusCard
                        icon={'syringe'}
                        subtitle1={'VACINADOS HOJE'}
                        subtitle2={'(1ª, 2ª E 3ª DOSES)'}
                        status={data.totalvacinados}
                    />
                    <StatusCard
                        icon={'chart-line'}
                        subtitle1={'MÉDIA GERAL'}
                        subtitle2={'DRIVE THRU'}
                        status={'Encerradas'}
                    />
                    <StatusCard
                        icon={'chart-line'}
                        subtitle1={'MÉDIA GERAL'}
                        subtitle2={'POSTOS FIXOS'}
                        status={'Poucas filas'}
                    />
                </div>

                <div className={styles.containerVacinacao}>
                    <div className={styles.locaisVacinacao}>
                        <div className={styles.title}>
                            <FontAwesomeIcon icon="chevron-down" />
                            <h1>Locais de vacinação</h1>
                        </div>
                    </div>

                    <div></div>

                    <div className={styles.buttons}>
                        <a href="#driveThru">
                            <button>
                                <FontAwesomeIcon icon="car" />
                                <p>DRIVE THRU</p>
                            </button>
                        </a>
                        <a href="#postosFixos">
                            <button>
                                <FontAwesomeIcon icon="male" />
                                <p>POSTOS FIXOS</p>
                            </button>
                        </a>
                    </div>

                    <section id="driveThru">
                        <div className={styles.titleLocal}>
                            <FontAwesomeIcon icon="car" />
                            <p>DRIVE THRU</p>
                        </div>
                        {data.drivethru.map((post, index) => (
                            <LocVac
                                key={index}
                                unidade={post.unidade}
                                endereco={post.endereco}
                                atualizacao={post.atualizacao}
                                dose1={post.dose[0]}
                                dose2={post.dose[1]}
                                dose3={post.dose[2]}
                                estadofila={post.estadofila}
                                descricao={post.descricao}
                            />
                        ))}
                    </section>
                    <section id="postosFixos">
                        <div className={styles.titleLocal}>
                            <FontAwesomeIcon icon="male" />
                            <p>POSTOS FIXOS</p>
                        </div>
                        {data.postosfixo.map((post, index) => (
                            <LocVac
                                key={index}
                                unidade={post.unidade}
                                endereco={post.endereco}
                                atualizacao={post.atualizacao}
                                dose1={post.dose[0]}
                                dose2={post.dose[1]}
                                dose3={post.dose[2]}
                                estadofila={post.estadofila}
                                descricao={post.descricao}
                            />
                        ))}
                    </section>
                </div>
                <a
                    href="#"
                    className={
                        showBackToTop ? styles.back_to_top : styles.display_none
                    }
                >
                    <FontAwesomeIcon icon="arrow-alt-circle-up" />
                </a>
            </main>

            <footer className={styles.footer}>
                <p>
                    Belicio Batista Cardoso &copy; {new Date().getFullYear()} -
                    Todos os direitos
                </p>
            </footer>
        </div>
    );
}

export async function getServerSideProps() {
    const res = await fetch(process.env.API);
    const data = await res.json();

    if (!data) {
        return {
            redirect: {
                destination: '/',
                permanent: false,
            },
        };
    }

    return { props: { data } };
}
