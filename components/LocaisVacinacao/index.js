import styles from './index.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
library.add(fas)

export default function LocaisVacinacao() {

    return (

        <div className={styles.row}>

            <div className={styles.rowEndereco}>

                <div className={styles.endereco}>

                    <p>USF Fazenda Grande III</p>
                    <p>Rua Dermeval de Souza Gusmão, Local 01-Quadra A- Faz. Grande III, sn, Salvador - BA, 41340-275</p>

                    <div className={styles.containerTipo}>

                        <div className={styles.bgSemFila}>
                            <FontAwesomeIcon icon="clock" />
                            <p>atualizado 14:37:54</p>
                        </div>
                        <div className={styles.bgSemFila}>
                            <FontAwesomeIcon icon="check" />
                            <p>1ª dose</p>
                        </div>
                        <div className={styles.bgSemFila}>
                            <FontAwesomeIcon icon="check" />
                            <p>2ª dose</p>
                        </div>
                    </div>

                    <div className={styles.publicoAlvo}>

                        <p> <FontAwesomeIcon icon="car" /> primeira dose - pessoas com 18 anos ou mais; segunda dose coronavac para pessoas com data de reforço no catão de vacina até o dia 07 de novembro</p>
                    </div>

                </div>

            </div>


            <div className={styles.statusFila}>

                <p className={styles.tituloSituacaoFila}>situação</p>

                <div className={styles.corFilaIntensa}>
                    <FontAwesomeIcon icon="square" />
                    <p>fila intensa</p>
                </div>
            </div>

        </div>

    )
}