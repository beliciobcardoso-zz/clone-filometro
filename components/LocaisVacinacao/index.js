import styles from './index.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
library.add(fas);

export default function LocaisVacinacao({
    ativo,
    unidade,
    localizacao,
    endereco,
    atualizacao,
    dose1,
    dose2,
    dose3,
    descricao,
    estadofila,
}) {
    let url = 'https://www.google.com.br/maps/place/';
    let displayNone = styles.display_none;
    let bgEstadoFila;
    let corEstadoFila;
    let brdEstadoFila;

    if (estadofila === 1) {
        bgEstadoFila = styles.bgSemFila;
        corEstadoFila = styles.corSemFila;
        brdEstadoFila = styles.brdSemFila;
    } else if (estadofila === 2) {
        bgEstadoFila = styles.bgPoucaFila;
        corEstadoFila = styles.corPoucaFila;
        brdEstadoFila = styles.brdPoucaFila;
    } else if (estadofila === 3) {
        bgEstadoFila = styles.bgFilaModerada;
        corEstadoFila = styles.corFilaModerada;
        brdEstadoFila = styles.brdFilaModerada;
    } else if (estadofila === 4) {
        bgEstadoFila = styles.bgFilaIntensa;
        corEstadoFila = styles.corFilaIntensa;
        brdEstadoFila = styles.brdFilaIntensa;
    } else if (estadofila === 5) {
        bgEstadoFila = styles.bgEncerrado;
        corEstadoFila = styles.corEncerrado;
        brdEstadoFila = styles.brdEncerrado;
    }

    return (
        <div
            className={`${
                ativo ? styles.row : styles.display_none
            } ${brdEstadoFila}`}
        >
            <div className={styles.rowEndereco}>
                <div className={styles.endereco}>
                    <p>{unidade}</p>

                    <a href={url + localizacao} target="_blank">
                        <FontAwesomeIcon icon="map-marked-alt" />
                        {endereco}
                    </a>

                    <div className={styles.containerTipo}>
                        <div className={bgEstadoFila}>
                            <FontAwesomeIcon icon="clock" />
                            <p>atualizado {atualizacao}</p>
                        </div>
                        <div className={bgEstadoFila}>
                            <FontAwesomeIcon icon="check" />
                            <p>{dose1}</p>
                        </div>
                        <div className={!dose2 ? displayNone : bgEstadoFila}>
                            <FontAwesomeIcon icon="check" />
                            <p>{dose2}</p>
                        </div>
                        <div className={!dose3 ? displayNone : bgEstadoFila}>
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
                <div className={corEstadoFila}>
                    <FontAwesomeIcon icon="square" />
                </div>
            </div>
        </div>
    );
}
