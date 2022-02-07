import Link from "next/link";
import styles from '../styles/Home.module.css';

export default function Layout({children}){
    return (
        <div className={styles.container, styles.code}>
            <ul className={styles.card}>
                <li><Link href="/home">Home</Link></li>
                <li><Link href="/news">News</Link></li>
                <li><Link href="/contLinkct">ContLinkct</Link></li>
                <li><Link href="/about">About</Link></li>
                <li><Link href="/">Index</Link></li>
            </ul>
            <div className={styles.title} >{children}</div>
        </div>
    )
}
