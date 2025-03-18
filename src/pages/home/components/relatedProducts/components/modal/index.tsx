import Image from 'next/image'
import styles from './style.module.sass'
import { Minus, Plus, X } from 'phosphor-react'
import { formatPrice } from '@/utils/formatPrice'

interface ModalProps {
  handleSubtractModalProductQuantity: () => void
  handleAddModalProductQuantity: () => void
  handleCloseModal: () => void
  modalData: {
    productName: string
    descriptionShort: string
    photo: string
    price: number
  }
  modalProductQuantity: number
}

export function Modal({
  handleSubtractModalProductQuantity,
  handleAddModalProductQuantity,
  modalData,
  handleCloseModal,
  modalProductQuantity,
}: ModalProps) {
  return (
    <div className={styles.modal}>
      <div className={styles.modalContainer}>
        <Image
          src={modalData.photo}
          width={279}
          height={229}
          alt=""
          className={styles.modalContainerPhoto}
        />
        <div className={styles.modalContainerContent}>
          <X className={styles.closeModalButton} onClick={handleCloseModal} />
          <div>
            <h2>{modalData.productName}</h2>
            <p>{formatPrice(modalData.price)}</p>
          </div>
          <p>
            Many desktop publishing packages and web page editors now many
            desktop publishing
          </p>
          <a>Veja mais detalhes do produto</a>

          <div className={styles.modalCheckout}>
            <div>
              <button onClick={() => handleSubtractModalProductQuantity()}>
                <Minus height={12} width={12} color="#9F9F9F" />
              </button>
              <span>
                {modalProductQuantity < 10
                  ? `0${modalProductQuantity}`
                  : modalProductQuantity}
              </span>
              <button onClick={() => handleAddModalProductQuantity()}>
                <Plus height={12} width={12} color="#271C47" />
              </button>
            </div>
            <button
              disabled={modalProductQuantity < 1}
              className={styles.buyButton}
            >
              Comprar
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
