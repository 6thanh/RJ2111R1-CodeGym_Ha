import Link from "next/link";
import styles from '../styles/layout.module.css';

export default function Layout({children}){
    return (
        <div className="layout-content">
            <ul className={styles.ul}>
                <li><Link href="/home">Home</Link></li>
                <li><Link href="/news">News</Link></li>
                <li><Link href="/contLinkct">ContLinkct</Link></li>
                <li><Link href="/about">About</Link></li>
                <li><Link href="/">Index</Link></li>
            </ul>
            {children}
        </div>
    )
}
