import styles from './styles.module.scss'

export const Title = () => {
  return (
    <div className={styles.titleContainer}>
      <h1 className={styles.title}>Filmes</h1>
      <h2 className={styles.titleDescription}>Veja os filmes mais populares do momento</h2>
    </div>
  );
};