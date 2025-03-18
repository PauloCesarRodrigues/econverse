import Image from 'next/image'
import styles from './style.module.sass'

import tecnologyIcon from '@/assets/home/categorySelector/tecnology.png'
import enabledTecnologyIcon from '@/assets/home/categorySelector/enabledTecnology.png'
import supermarketIcon from '@/assets/home/categorySelector/supermarket.png'
import whiskeyIcon from '@/assets/home/categorySelector/whiskey.png'
import toolsIcon from '@/assets/home/categorySelector/tools.png'
import healthIcon from '@/assets/home/categorySelector/health.png'
import fitnessIcon from '@/assets/home/categorySelector/fitness.png'
import fashionIcon from '@/assets/home/categorySelector/fashion.png'

export function CategorySelector() {
  const categoriesTheme = [
    {
      name: 'Tecnologia',
      Unabledicon: tecnologyIcon,
      enabledIcon: enabledTecnologyIcon,
      active: true,
    },
    { name: 'Supermercado', Unabledicon: supermarketIcon, active: false },
    { name: 'Bebidas', Unabledicon: whiskeyIcon, active: false },
    { name: 'Ferramentas', Unabledicon: toolsIcon, active: false },
    { name: 'Saúde', Unabledicon: healthIcon, active: false },
    { name: 'Esportes e Fitness', Unabledicon: fitnessIcon, active: false },
    { name: 'Moda', Unabledicon: fashionIcon, active: false },
  ]

  return (
    <section className={styles.categorySelectorContainer}>
      <ul className={styles.categorySelectorList}>
        {categoriesTheme.map((category) => (
          <li key={category.name} className={styles.categorySelectorItem}>
            {category.active ? (
              <div className={styles.whiteBackground}>
                <Image
                  src={category.enabledIcon ? category.enabledIcon : ''}
                  alt={category.name}
                />
              </div>
            ) : (
              <div className={styles.offWhiteBackground}>
                <Image src={category.Unabledicon} alt={category.name} />
              </div>
            )}
            {category.active ? (
              <strong>{category.name}</strong>
            ) : (
              <p>{category.name}</p>
            )}
          </li>
        ))}
      </ul>
    </section>
  )
}
