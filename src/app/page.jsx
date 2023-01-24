import { Inter } from '@next/font/google'
import styles from './page.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={styles.main}>
      <div className='container' >
        <div className={styles.cards}>
          <div className={styles.folder__right}></div>
          <div className={styles.folder__left}></div>
        </div>
      </div>
    </main>
  )
}
