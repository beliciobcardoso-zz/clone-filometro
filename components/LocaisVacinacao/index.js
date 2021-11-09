import styles from './index.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
library.add(fas);

export default function LocaisVacinacao({
    unidade,
    endereco,
    atualizacao,
    dose1,
    dose2,
    dose3,
    descricao,
<<<<<<< HEAD
    //estadofila,
}) {
    return (
        <div className={styles.row}>
=======
  
>>>>>>> 4cbbd4f16711b069052a0f2d6aa61a4e13bad095
            <div className={styles.rowEndereco}>
                <div className={styles.endereco}>
                    <p>{unidade}</p>
                    <p>{endereco}</p>

                    <div className={styles.containerTipo}>
<<<<<<< HEAD
                        <div className={styles.bgSemFila}>
                            <FontAwesomeIcon icon="clock" />
                            <p>atualizado {atualizacao}</p>
=======
                        <div className={bgEstadoFila}>
                            <FontAwesomeIcon icon="clock" />
                            <p>atualizado {atualizacao}</p>
                        </div>
                        <div className={bgEstadoFila}>
                            <FontAwesomeIcon icon="check" />
                            <p>{dose1}</p>
>>>>>>> 4cbbd4f16711b069052a0f2d6aa61a4e13bad095
                        </div>
                        <div className={bgEstadoFila}>
                            <FontAwesomeIcon icon="check" />
<<<<<<< HEAD
                            <p>{dose1}</p>
=======
                            <p>{dose1}</p>
>>>>>>> 4cbbd4f16711b069052a0f2d6aa61a4e13bad095
                        </div>
                        <div className={bgEstadoFila}>
                            <FontAwesomeIcon icon="check" />
<<<<<<< HEAD
                            <p>{dose2}</p>
                        </div>
                        <div className={styles.bgSemFila}>
                            <FontAwesomeIcon icon="check" />
=======
>>>>>>> 4cbbd4f16711b069052a0f2d6aa61a4e13bad095
                            <p>{dose3}</p>
                        </div>
                    </div>

                    <div className={styles.publicoAlvo}>
                        <p>
<<<<<<< HEAD
                            <FontAwesomeIcon icon="car" /> {descricao}
=======
                            <FontAwesomeIcon icon="car" />
                            {descricao}
>>>>>>> 4cbbd4f16711b069052a0f2d6aa61a4e13bad095
                        </p>
                    </div>
                </div>
            </div>

            <div className={styles.statusFila}>
                <p className={styles.tituloSituacaoFila}>situação</p>
                <div className={corEstadoFila}>
                    <FontAwesomeIcon icon="square" />
                </div>
            </div>
        </div>
    );
}
