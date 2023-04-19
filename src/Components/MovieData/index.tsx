import styles from "./styles.module.scss";
import { useSelector } from "react-redux";
import { RatingIndicator } from "@ui5/webcomponents-react";
import { store } from "../../redux/store";
import { favoriteMovie } from "../../redux/slices";
import { useCallback, useEffect, useState } from "react";

export const MovieData = () => {
  const listMovie = useSelector(() => store.getState().movieReducer.movie);
  const [favorite, setFavorite] = useState(false)

  useEffect(() => {
    setFavorite(false)
  },[listMovie])

  const handleFavorite = useCallback(() => {
    store.dispatch(favoriteMovie(listMovie!.title as string))
    setFavorite(!favorite)
  },[listMovie])

  return (
    <>
      {listMovie ? (
        <div className={styles.container}>
          <aside>
            <div className={styles.content}>
              <h1 className={styles.title}>{listMovie.title}</h1>
              <h2 className={styles.description}>{listMovie.plot}</h2>
              <div className={styles.subtitleContent}>
                <h3 className={styles.subtitle}>Actor:</h3>
                {listMovie?.actors?.map((actor) => (
                  <h2 key={actor} className={styles.subDescription}> {actor} </h2>
                ))}
              </div>
              <div className={styles.subtitleContent}>
                <h3 className={styles.subtitle}>Review:</h3>
                <RatingIndicator
                  value={Number(listMovie.imdbRating) / 2}
                  disabled
                />
              </div>
              <div className={styles.subtitleContent}>
              <button onClick={handleFavorite}  className={listMovie.liked || favorite ?styles.onFavorite: styles.offFavorite}  >
                Favoritar ❤️
              </button>
              </div>  
            </div>

            <img
              src={listMovie.poster}
              alt={listMovie.title}
              className={styles.imageMovie}
            />
          </aside>
        </div>
      ) : (
        <div className={styles.container} />
      )}
    </>
  );
};
