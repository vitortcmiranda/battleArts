import styles from './styles.module.scss';
export function Card () {
    return (
        <div className={ styles.cardCreator }>
            <div className={styles.card}>
                <div className={styles.cardShape}>
                    <div className={styles.cardMonster}>
                        <img src="/water.svg" alt="" />
                    </div>
                    <div className={styles.monsterCircle}>
                        <img src="/watermonster.png" alt="Monstro" className={styles.monsterImage} />
                    </div>
                    <h5 className={styles.monsterTitle}>Serpente Marinha</h5>
                    <div className={ styles.footer }>
                        <div className={styles.status}>
                            <div className={styles.attrs}>
                                <span>
                                    <img src="/hp.svg" alt="Vida" />
                                        10</span>
                            </div>
                            <div className={styles.attrs}>
                                    <img src="/atk.svg" alt="Ataque" className={styles.svg}/>
                                    <span>10</span>
                            </div>
                                
                            <div className={styles.attrs}>
                            <span>
                                    <img src="/energy.svg" alt="Energia" />
                                    10</span>
                            </div>
                            
                        </div>
                    </div>
                </div>
        </div>
        </div>
    );
}