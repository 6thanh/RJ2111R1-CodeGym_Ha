import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router'
import styles from '../styles/Login.module.css'

export default function Home() {
  const router = useRouter();
  return (
    <div className={styles.wrapper}>
      <form className={styles.formContent}>
      <h2 className={styles.h2} >Login</h2>
        <input className={styles.input}type="email" id="login" name="login" placeholder="login" />
        <br />
        <input className={styles.input} type="password" id="password" name="login" placeholder="password" />
        <br />
        <button type='button' className= {styles.button} onClick={()=>{router.push('/home')}}>Login</button>
      </form>
    </div>
  )
}
