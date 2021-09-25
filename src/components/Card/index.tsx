import styles from './styles.module.scss';
export function Card (props) {
    const type = 'plant';
    return (
        
        <div className={ styles.cardCreator }>
            <div className={`${styles.card}  ${type}-3-color ${type}-border`}>
            <span className={`${styles.author} ${type}-color`}>author: Victor Araujo</span>

                <div className={styles.cardContainer}>
                    <div className={`${styles.cardShape}  ${type}-2-color ${type}-border`}>
                        <div className={`${styles.cardMonster} ${type}-3-color ${type}-border`}>
                            <img src={`/${type}.svg`} alt="" />
                        </div>
                        <div className={`${styles.monsterCircle} ${type}-1-color`}>
                            <img src="/assets/02.png" alt="Monstro" className={styles.monsterImage} />
                        </div>
                        <h5 className={`${styles.monsterTitle} ${type}-color`}>Serpente Marinha</h5>

                    </div>
                    <div className={ styles.footer }>
                            <div className={`${styles.status} ${type}-1-color`}>
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
                <span className={`${styles.artist} ${type}-color`}>art: João das Couves</span>
        </div>
        </div>
    );
}