import styles from './SearchBar.module.css'

import { ChangeEvent, useContext } from 'react';
import { CryptoContext } from '../../context/cryptoContext';

export const SearchBar = () => {

  const { filterCrypto, clearfilterCrypto } = useContext(CryptoContext)

  const handleChange = (e:ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    if (e.target.value === "") {
      () => {clearfilterCrypto()}
    }
    filterCrypto(e.target.value)
  }

  return (
    <div className={styles.searchBarBox}>
      <input className={styles.searchBarInput} type='text' placeholder='Search using crypto name ...' onChange={(e) => handleChange(e)} />
    </div>
  )
}