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
}) {
    return (
        <div className={styles.row}>
            <div className={styles.rowEndereco}>
                <div className={styles.endereco}>
                    <p>{unidade}</p>
                    <p>{endereco}</p>

                    <div className={styles.containerTipo}>
                        <div className={styles.bgSemFila}>
                            <FontAwesomeIcon icon="clock" />
                            <p>atualizado {atualizacao}</p>
                        </div>
                        <div className={styles.bgSemFila}>
                            <FontAwesomeIcon icon="check" />
                            <p>{dose1}</p>
                        </div>
                        <div className={styles.bgSemFila}>
                            <FontAwesomeIcon icon="check" />
                            <p>{dose2}</p>
                        </div>
                        <div className={styles.bgSemFila}>
                            <FontAwesomeIcon icon="check" />
                            <p>{dose3}</p>
                        </div>
                    </div>

                    <div className={styles.publicoAlvo}>
                        <p>
                            <FontAwesomeIcon icon="car" /> {descricao}
                        </p>
                    </div>
                </div>
            </div>

            <div className={styles.statusFila}>
                <p className={styles.tituloSituacaoFila}>situação</p>
                <div className={styles.corSemFila}>
                    <FontAwesomeIcon icon="square" />
                </div>
            </div>
        </div>
    );
}
