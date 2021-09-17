import Link from 'next/link';
import Head from 'next/head';
import styles from './episode.module.scss';
import { Card } from '../../components/Card';

export default function CardCreator () {

    return (
        <div className={ styles.containerCardCreator }>
            <Card />
            <div className={ styles.cardDetails }>
                
            </div>
        </div>
    );
}