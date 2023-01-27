import styles from './styles.module.scss';
import Image from 'next/image'

export function Header () {
    return (
        <header className={ styles.headerContainer }>
            <Image src="/assets/logo.png" width={163} height={45} alt="teste" />
            <p>Collect, trade and battle.</p>
            
            <span>login</span>
        </header>
    );
}