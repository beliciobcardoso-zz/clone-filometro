import styles from './index.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
library.add(fas);

export default function StatusCard({ icon, subtitle1, subtitle2, status }) {
    return (
        <div className={styles.statusCard}>
            <FontAwesomeIcon className={styles.icon} icon={icon} />
            <div className={styles.cardData}>
                <p>{subtitle1}</p>
                <p>{subtitle2}</p>
                <p>{status}</p>
            </div>
        </div>
    );
}
