import { formatPrice } from '@/utils/formatPrice'
import styles from './style.module.sass'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import { Navigation } from 'swiper/modules'
import '@/styles/globals.sass'

interface ProductsProps {
  success: boolean
  products: {
    productName: string
    descriptionShort: string
    photo: string
    price: number
  }[]
}

export interface CarouselProps {
  handleOpenModal: (arg0: {
    productName: string
    descriptionShort: string
    photo: string
    price: number
  }) => void

  relatedProducts: ProductsProps | undefined

  activeRelatedProduct: string
}

export function Carousel({
  handleOpenModal,
  relatedProducts,
  activeRelatedProduct,
}: CarouselProps) {
  return (
    <div className={styles.carouselWrapper}>
      <Swiper
        navigation={true}
        modules={[Navigation]}
        className={`${styles.productCardsContainer} mySwiper`}
        loop={true}
        spaceBetween={18}
        breakpoints={{
          1800: {
            slidesPerView: 4,
            spaceBetween: 18,
          },
          1280: {
            slidesPerView: 3,
            spaceBetween: 12,
          },
          800: {
            slidesPerView: 2,
            spaceBetween: 8,
          },
          400: {
            slidesPerView: 1,
            spaceBetween: 4,
          },
        }}
      >
        {(relatedProducts && activeRelatedProduct === 'CELULAR') ||
        activeRelatedProduct === 'VER TODOS' ? (
          relatedProducts?.products.map((product) => (
            <SwiperSlide key={product.productName}>
              <div className={`${styles.productCard} swiper-slide`}>
                <Image
                  src={product.photo}
                  width={278}
                  height={228}
                  alt={product.productName}
                  className={styles.productCardImage}
                />
                <div className={styles.productCardInfo}>
                  <p>{product.productName}</p>
                  <div className={styles.productCardPrice}>
                    <span>{formatPrice(product.price)}</span>
                    <strong>{formatPrice(product.price * 0.85)}</strong>
                    <p>ou 2x de {formatPrice(product.price * 0.5)} sem juros</p>
                  </div>
                  <span>Frete grátis</span>
                  <button onClick={() => handleOpenModal(product)}>
                    COMPRAR
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))
        ) : (
          <p className={styles.aviso}>
            Não foi possível encontrar itens nessa categoria :/
          </p>
        )}
      </Swiper>
    </div>
  )
}
