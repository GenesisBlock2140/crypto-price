import styles from './CryptoStats.module.css'

export const CryptoStats = () => {
  return (
    <div className={styles.cryptoStatsBox}>
      <div className={styles.cryptoStatsCard}>
        <p className={styles.cryptoStatsTitle}>Market Cap</p>
        <p className={styles.cryptoStatsData}>$ 327 030 477 551</p>
      </div>
      <div className={styles.cryptoStatsCard}>
        <p className={styles.cryptoStatsTitle}>Volume</p>
        <p className={styles.cryptoStatsData}>$ 37 030 477 551</p>
      </div>
      <div className={styles.cryptoStatsCard}>
        <p className={styles.cryptoStatsTitle}>Circulating Supply</p>
        <p className={styles.cryptoStatsData}>19 999 999</p>
      </div>
    </div>
  )
}