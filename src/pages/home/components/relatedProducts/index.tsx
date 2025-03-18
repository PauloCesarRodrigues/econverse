import { useEffect, useState } from 'react'
import styles from './style.module.sass'

import { useQuery } from '@tanstack/react-query'
import { api } from '@/lib/axios'
import { Modal } from './components/modal'
import { Carousel } from './components/carousel'

interface RelatedProductsProps {
  type: 'selector' | 'viewAll'
}

interface ProductsProps {
  success: boolean
  products: {
    productName: string
    descriptionShort: string
    photo: string
    price: number
  }[]
}

interface ProductProps {
  productName: string
  descriptionShort: string
  photo: string
  price: number
}

export function RelatedProducts({ type }: RelatedProductsProps) {
  const [activeRelatedProduct, setActiveRelatedProduct] = useState<string>('')

  const [modalData, setModalData] = useState<ProductProps | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const [modalProductQuantity, setModalProductQuantity] = useState(0)

  const relatedProductsCategories = [
    { name: 'CELULAR', label: 'cellphone' },
    { name: 'ACESSÓRIOS', label: 'accessories' },
    { name: 'TABLETS', label: 'tablets' },
    { name: 'NOTEBOOKS', label: 'laptops' },
    { name: 'TVS', label: 'tvs' },
    { name: 'VER TODOS', label: 'all' },
  ]

  function handleChangeRelatedProducts(activeProduct: string) {
    setActiveRelatedProduct(activeProduct)
  }

  useEffect(() => {
    handleChangeRelatedProducts('CELULAR')
  }, [])

  const { data: relatedProducts } = useQuery<ProductsProps>({
    queryKey: ['products'],
    queryFn: async () => {
      const response = await api.get('/products')

      return response.data
    },
  })

  const handleOpenModal = (product: ProductProps) => {
    setModalData(product)
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setModalData(null)
    setIsModalOpen(false)
    setModalProductQuantity(0)
  }

  const handleAddModalProductQuantity = () => {
    if (modalProductQuantity > 98) return
    setModalProductQuantity(modalProductQuantity + 1)
  }

  const handleSubtractModalProductQuantity = () => {
    if (modalProductQuantity < 1) return
    setModalProductQuantity(modalProductQuantity - 1)
  }

  return (
    <>
      <header className={styles.ProductsSection}>
        <h5>Produtos relacionados</h5>
        <div>
          {type === 'selector' ? (
            relatedProductsCategories.map((category) => (
              <button
                key={category.name}
                onClick={() => handleChangeRelatedProducts(category.name)}
              >
                {activeRelatedProduct === category.name ? (
                  <strong>{category.name}</strong>
                ) : (
                  category.name
                )}
              </button>
            ))
          ) : (
            <a className={styles.viewAll}>Ver todos</a>
          )}
        </div>
      </header>

      <Carousel
        activeRelatedProduct={activeRelatedProduct}
        handleOpenModal={handleOpenModal}
        relatedProducts={relatedProducts}
      />

      {isModalOpen && modalData && (
        <Modal
          handleAddModalProductQuantity={handleAddModalProductQuantity}
          handleCloseModal={handleCloseModal}
          handleSubtractModalProductQuantity={
            handleSubtractModalProductQuantity
          }
          modalData={modalData}
          modalProductQuantity={modalProductQuantity}
        />
      )}
    </>
  )
}
