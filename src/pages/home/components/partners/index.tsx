import Image from 'next/image'
import styles from './style.module.sass'

import partnerBanner from '@/assets/home/partners/partnerBanner.png'

export function Partners() {
  return (
    <section className={styles.partnerContainer}>
      {Array.from({ length: 2 }).map((_, i) => (
        <div className={styles.partnerContent} key={i}>
          <div className={styles.partnerInfo}>
            <h6>Parceiros</h6>
            <p>Lorem ipsum dolor sit amet, consectetur</p>
            <a>CONFIRA</a>
          </div>

          <Image className={styles.partnerBanner} alt="" src={partnerBanner} />
        </div>
      ))}
    </section>
  )
}
