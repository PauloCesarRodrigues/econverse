import {
  CreditCard,
  CrownSimple,
  Heart,
  List,
  MagnifyingGlass,
  Package,
  ShieldCheck,
  ShoppingCart,
  Truck,
  UserCircle,
} from 'phosphor-react'
import styles from '@/components/header/styles.module.sass'
import Image from 'next/image'
import logoImg from '@/assets/logo.png'
import { useEffect, useState } from 'react'

export function Header() {
  const [isCategoryActivated, setIsCategoryActivated] = useState<string>()

  const categories = [
    { name: 'TODAS CATEGORIAS', active: false },
    { name: 'SUPERMERCADO', active: false },
    { name: 'LIVROS', active: false },
    { name: 'MODA', active: false },
    { name: 'LANÇAMENTOS', active: false },
    { name: 'OFERTAS DO DIA', active: true },
    { name: 'ASSINATURA', active: false, simbol: true },
  ]

  const handleChangeMainCategory = (name: string) => {
    setIsCategoryActivated(name)
  }

  useEffect(() => {
    setIsCategoryActivated('OFERTAS DO DIA')
  }, [])

  return (
    <>
      <section className={styles.aboveSection}>
        <div className={styles.aboveSectionItem}>
          <ShieldCheck width={20} height={20} weight="bold" color={'#9F9F9F'} />
          <span>
            Compra <strong>100% segura</strong>
          </span>
        </div>
        <div className={styles.aboveSectionItem}>
          <Truck width={20} height={20} weight="bold" color={'#9F9F9F'} />
          <span>
            <strong>Frete grátis</strong> acima de R$ 200
          </span>
        </div>
        <div className={styles.aboveSectionItem}>
          <CreditCard width={20} height={20} weight="bold" color={'#9F9F9F'} />
          <span>
            <strong>Parcele</strong> suas compras
          </span>
        </div>
      </section>

      <header className={styles.header}>
        <a>
          <Image
            src={logoImg}
            alt="econverse logo"
            height={41.5}
            quality={100}
            priority
          />
        </a>

        <form className={styles.inputContainer}>
          <input type="text" placeholder="O que você está buscando?" />
          <button type="submit">
            <MagnifyingGlass
              className={styles.lupa}
              height={28}
              width={28}
              color={'#9F9F9F'}
            />
          </button>
        </form>

        <div className={styles.headerIcons}>
          <a>
            <Package alt="Pedidos" height={32} width={32} color={'#9F9F9F'} />
          </a>

          <a>
            <Heart alt="Curtidos" height={32} width={32} color={'#9F9F9F'} />
          </a>

          <a>
            <UserCircle alt="Perfil" height={32} width={32} color={'#9F9F9F'} />
          </a>

          <a className={styles.menuHamburger}>
            <ShoppingCart
              alt="Carrinho"
              height={32}
              width={32}
              color={'#9F9F9F'}
            />
          </a>

          <button>
            <List alt="Menu" height={32} width={32} color={'#9F9F9F'} />
          </button>
        </div>
      </header>

      <nav className={styles.navbar}>
        <ul>
          {categories.map((mainCategory) => (
            <li key={mainCategory.name}>
              {mainCategory.simbol === true ? (
                <a onClick={() => handleChangeMainCategory(mainCategory.name)}>
                  {mainCategory.name === isCategoryActivated ? (
                    <div>
                      <span>
                        <CrownSimple
                          height={20}
                          width={20}
                          color={'#F7CA11'}
                          alt="Assinatura"
                          weight="bold"
                        />{' '}
                      </span>
                      <strong>{mainCategory.name}</strong>{' '}
                    </div>
                  ) : (
                    <div>
                      <span>
                        <CrownSimple
                          height={20}
                          width={20}
                          color={'#9F9F9F'}
                          alt="Assinatura"
                          weight="bold"
                        />{' '}
                      </span>
                      {mainCategory.name}
                    </div>
                  )}
                </a>
              ) : (
                <a onClick={() => handleChangeMainCategory(mainCategory.name)}>
                  {mainCategory.name === isCategoryActivated ? (
                    <strong>{mainCategory.name}</strong>
                  ) : (
                    mainCategory.name
                  )}
                </a>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </>
  )
}
