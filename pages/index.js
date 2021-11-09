import Head from 'next/head';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
<<<<<<< HEAD
=======
import styles from '../styles/Home.module.css';
import logopms from '../public/imagens/logo-pms.png';
import logofilo from '../public/imagens/logo-filometro.png';
>>>>>>> 4cbbd4f16711b069052a0f2d6aa61a4e13bad095
import LocVac from '../components/LocaisVacinacao/index';
library.add(fas);

<<<<<<< HEAD
export default function Home({ posts }) {
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
=======
library.add(fas);

export default function Home({ posts }) {

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
              <p>9.586</p>
>>>>>>> 4cbbd4f16711b069052a0f2d6aa61a4e13bad095
            </div>
          </div>

<<<<<<< HEAD
            <main className={styles.main}>
                <div className={styles.status}>
                    <div className={styles.statusCard}>
                        <FontAwesomeIcon
                            className={styles.icon}
                            icon="clinic-medical"
                        />
                        <div className={styles.cardData}>
                            <p>POSTOS ATIVOS</p>
                            <p>15</p>
                        </div>
                    </div>

                    <div className={styles.statusCard}>
                        <FontAwesomeIcon
                            className={styles.icon}
                            icon="syringe"
                        />
                        <div className={styles.cardData}>
                            <p>VACINADOS HOJE</p>
                            <p>(1ª, 2ª E 3ª DOSES)</p>
                            <p>9.493</p>
                        </div>
                    </div>

                    <div className={styles.statusCard}>
                        <FontAwesomeIcon
                            className={styles.icon}
                            icon="chart-line"
                        />
                        <div className={styles.cardData}>
                            <p>MÉDIA GERAL</p>
                            <p>DRIVE THRU</p>
                            <p>Poucas filas</p>
                        </div>
                    </div>

                    <div className={styles.statusCard}>
                        <FontAwesomeIcon
                            className={styles.icon}
                            icon="chart-line"
                        />
                        <div className={styles.cardData}>
                            <p>MÉDIA GERAL</p>
                            <p>POSTOS FIXOS</p>
                            <p>Filas Moderadas</p>
                        </div>
                    </div>
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
                        {posts.drivethru.map((post, index) => (
                            <LocVac
                                key={index}
                                unidade={post.unidade}
                                endereco={post.endereco}
                                atualizacao={post.atualizacao}
                                dose1={post.dose[0]}
                                dose2={post.dose[1]}
                                dose3={post.dose[2]} //undefined
                                //estadofila={post.estadofila}
                                descricao={post.descricao}
                            />
                        ))}
                    </section>
                    <section id="postosFixos">
                        <div className={styles.titleLocal}>
                            <FontAwesomeIcon icon="male" />
                            <p>POSTOS FIXOS</p>
                        </div>
                        {posts.drivethru.map((post, index) => (
                            <LocVac
                                key={index}
                                unidade={post.unidade}
                                endereco={post.endereco}
                                atualizacao={post.atualizacao}
                                dose1={post.dose[0]}
                                dose2={post.dose[1]}
                                dose3={post.dose[2]} //undefined
                                //estadofila={post.estadofila}
                                descricao={post.descricao}
                            />
                        ))}
                    </section>
                </div>
                <a href="#" className={styles.back_to_top}>
                    <FontAwesomeIcon icon="arrow-alt-circle-up" />
                </a>
            </main>

            <footer className={styles.footer}>
                <p>Belicio Cardoso &copy; {new Date().getFullYear()}</p>
            </footer>
=======
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

        <div className={styles.containerVacinacao}>

          <div className={styles.locaisVacinacao}>
            <div className={styles.title}>
              <FontAwesomeIcon icon="chevron-down" />
              <h1>Locais de vacinação</h1>
            </div>
          </div>

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
            {
              posts.drivethru.map((post) => (
                  
                <LocVac             
                unidade={post.unidade} 
                endereco={post.endereco}
                atualizacao={post.atualizacao}
                dose1={post.dose[0]}
                dose2={post.dose[1]}
                dose3={post.dose[2] ? post.dose[2] : " "} //undefined
                estadofila={post.estadofila}
                descricao={post.descricao}               
                />

              ))
            }
           
          </section>
          <section id="postosFixos">
            <div className={styles.titleLocal}>
              <FontAwesomeIcon icon="male" />
              <p>POSTOS FIXOS</p>
            </div>
            {
              posts.postosfixo.map((post) => (
                  
                <LocVac             
                unidade={post.unidade} 
                endereco={post.endereco}
                atualizacao={post.atualizacao}
                dose1={post.dose[0]}
                dose2={post.dose[1]}
                dose3={post.dose[2] ? post.dose[2] : " "} //undefined
                estadofila={post.estadofila}
                descricao={post.descricao}                
                />

              ))              
            }
          </section>
>>>>>>> 4cbbd4f16711b069052a0f2d6aa61a4e13bad095
        </div>
        <a href="#" className={styles.back_to_top}><FontAwesomeIcon icon="arrow-alt-circle-up" /></a>
      </main>

      <footer className={styles.footer}>
        <p>
          Belicio Cardoso &copy;
          {new Date().getFullYear()}
        </p>
      </footer>
    </div>
  );
}

export async function getStaticProps() {
  const res = await fetch('http://localhost:3000/api');
  const posts = await res.json();
 //console.log(posts);
  return {
    props: {
      posts,
    },
  };
}

export async function getStaticProps() {
    const res = await fetch(process.env.HOST);
    const posts = await res.json();
    //console.log(process.env.HOST);
    return {
        props: {
            posts,
        },
    };
}
