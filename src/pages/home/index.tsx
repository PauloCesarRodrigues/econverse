import '@/styles/globals.sass'
import styles from '@/pages/home/style.module.sass'
import Image from 'next/image'
import bannerImg from '@/assets/home/bannerPrincipal.png'
import { CategorySelector } from './components/categorySelector'
import { RelatedProducts } from './components/relatedProducts'
import { Partners } from './components/partners'

import logoImg from '@/assets/logo.png'

export default function Home() {
  return (
    <>
      <section className={styles.heroSection}>
        <Image
          src={bannerImg}
          alt=""
          quality={100}
          priority
          className={styles.heroSectionBanner}
        />
        <div className={styles.heroSectionContainer}>
          <div>
            <h2>
              Venha conhecer nossas <br /> promoções{' '}
            </h2>
            <p>
              <strong>50% Off</strong> nos produtos{' '}
            </p>
          </div>
          <a>Ver Produto</a>
        </div>
      </section>

      <CategorySelector />
      <RelatedProducts type={'selector'} />
      <Partners />
      <RelatedProducts type={'viewAll'} />
      <Partners />

      <section className={styles.navBrands}>
        <h4>Navegue por marcas</h4>
        <div>
          {Array.from({ length: 5 }).map((_, i) => (
            <div key={i}>
              <Image src={logoImg} width={117} height={35} alt="" />
            </div>
          ))}
        </div>
      </section>

      <RelatedProducts type={'viewAll'} />
    </>
  )
}
