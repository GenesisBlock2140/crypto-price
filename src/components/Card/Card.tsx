import styles from './Card.module.css'

interface CardProps {
  name: string
  image: string
  price_change_percentage_24h: number
}

export const Card = ( {image, name, price_change_percentage_24h}:CardProps ) => {

  const priceRender = price_change_percentage_24h > 0 ? styles.cardPrice : styles.cardPriceNegative

  return (
    <div className={`${styles.cardBox} ${styles.cardAnimate}`}>
      <img src={image} alt={`Logo ${name}`}/>
      <p className={styles.cardName}>{name}</p>
      <p className={priceRender}>{`${price_change_percentage_24h} %`}</p>
    </div>
  )
}