import Link from 'next/link';
import Head from 'next/head';
import styles from './creator.module.scss';
import { Card } from '../../components/Card';

export default function CardCreator () {

    return (
        <div className={ styles.containerCardCreator }>
            <Card />
            <div className={ styles.cardDetails }>
                {/* <form>
                    <label >Creature name:</label><br />
                    <input type="text" id="fname" name="fname" /><br />
                    <label>Creature description:</label><br />
                    <input type="text" id="lname" name="lname" />
                </form> */}
            </div>
        </div>
    );
}