import styles from './Navbar.module.css'
import Love from '../../assets/svg/Love.svg'

export const Navbar = () => {


  return (
    <>
      <div className={styles.navbar}>
        <p className={styles.navbarTitle}>CryptoList</p>
        <button className={styles.navbarWatchlist}> 
          <img src={Love} alt='Favorite icon' className={styles.navbarFav} />
          Watchlist
        </button>
      </div>
    </>
  )
}