import styles from './CardList.module.css'

import { useContext } from 'react'
import { CryptoContext } from '../../context/cryptoContext'
import { CryptoProps } from '../../context/types'

import { Card } from '../Card/Card'

interface listFilteredProps {
  listFiltered: CryptoProps[]
}

export const CardList = () => {

  const { listFiltered}:listFilteredProps  = useContext(CryptoContext)

  return (
    <div className={styles.cardListBox}>
      {listFiltered ? listFiltered.map((crypto, key) => {
        return <Card name={crypto.name} image={crypto.image} price_change_percentage_24h={crypto.price_change_percentage_24h} key={key} />
      }): null }
    </div>
  )
}