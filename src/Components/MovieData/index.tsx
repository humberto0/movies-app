import styles from "./styles.module.scss";
import { useSelector } from 'react-redux';
import { store } from '../../redux/store';

export const MovieData = () => {
  const listMovie = useSelector(
    () => store.getState().movieReducer.movie,
  );
  return (
    <div className={styles.container}>
      <aside>
      <div className={styles.content}>
        <h1 className={styles.title}>{listMovie.title}</h1>
        <h2 className={styles.description}>{listMovie.plot}</h2>
        <div className={styles.subtitleContent}>
          <h3 className={styles.subtitle}>Actor:</h3>
          {listMovie?.actors?.map((actor) => 
          <h2 className={styles.subDescription}> {actor} </h2>
          )}
        </div>
        <div className={styles.subtitleContent}>
          <h3 className={styles.subtitle}>Review:</h3>
          <h2 className={styles.subDescription}>{listMovie.imdbRating}</h2>
        </div>
      </div>

      <img
        src={listMovie.poster}
        alt={listMovie.title}
        className={styles.imageMovie}
      />
      </aside>
    </div>
  );
};


