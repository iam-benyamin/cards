import { Inter } from '@next/font/google'
import styles from './page.module.css'
import Image from 'next/image'
import humanBigPictuer from '../../public/human-transparent.png';
import humanSmallPictuer from '../../public/human-transparent-small.png';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={styles.main}>
      <div className='container' >
        <div className={styles.cards}>
          <div className={styles.folder__right}>
            <div className={styles.big__image}>
              <Image
                src={humanBigPictuer}
                alt='human head pic'
              />
            </div>
            <div className={styles.text}>
              <p>In literary theory, a text is any object </p>
            </div>
            <div className={styles.round__button}>
              Get Expert Advice <span>&rarr;</span>
            </div>
            <div className={styles.tiny__buttons}>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
          <div className={styles.folder__left}>
            <div className={styles.content}>
              <div className={styles.header__paragraph} >
                <p>the<br /><strong>futur</strong></p>
              </div>
              <div className={styles.small__image}>
                <Image
                  src={humanSmallPictuer}
                  alt='human head pic'
                />
              </div>
              <div className={styles.description}>
                <p>
                  In publishing and graphic design, Lorem ipsum is a placeholder text commonly used
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
