import styles from './styles.module.scss';
import Image from 'next/dist/client/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBolt, faFireAlt, faFistRaised, faHeart, faMoon, faSun, faTree, faWater } from '@fortawesome/free-solid-svg-icons';

export function Card (props) {
    const type = 'dark';
    return (
        
        <div className={ styles.cardCreator }>
           <div className={ `${styles.cardFlex}  ${type}-3-color ${type}-border`}>
            <div className={`${styles.card}  `}>
                <span className={`${styles.author} ${type}-circle`}>author: Victor Araujo</span>

                    <div className={styles.cardContainer}>
                        <div className={`${styles.cardShape}  ${type}-2-color ${type}-border `}>
                            <div className={`${styles.cardMonster} ${type}-3-color ${type}-border `}>
                                <FontAwesomeIcon icon={ faSun } className={ `${styles.img} ${type}-circle `} />
                            </div>
                            <div className={`${styles.monsterCircle} ${type}-1-color`}>
                                <Image src="/assets/08.png" width={150} height={150}></Image>
                            </div>
                            <h5 className={`${styles.monsterTitle} ${type}-shape`}>Monstro de lodo</h5>
                            <div className={ `${styles.description} ${type}-3-color`}>
                                <p className={`${type}-circle`}>Monstro de lodo da floresta..Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labora aliqua.</p>
                            </div>
                        </div>
                    </div>
                    <span className={`${styles.artist} ${type}-circle`}>art: João das Couves</span>
            </div>
            <div className={ `${styles.footer} ${type}-shape `}>
                            <div className={`${styles.status} ${type}-1-color`}>
                                <div className={styles.attrs}>
                                    <span>
                                        <FontAwesomeIcon icon={ faFistRaised } />5
                                    </span>
                                </div>
                                <div className={styles.attrs}>
                                    <span>
                                        <FontAwesomeIcon icon={ faHeart } />32
                                    </span>
                                </div>
                                    
                                <div className={styles.attrs}>
                                    <span>
                                        <FontAwesomeIcon icon={ faBolt } />15
                                    </span>
                                </div>
                                
                            </div>
                    </div>
           </div>
        </div>
    );
}