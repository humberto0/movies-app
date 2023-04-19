import styles from "./styles.module.scss";
import { useSelector } from "react-redux";
import { store } from "../../redux/store";
import { RatingIndicator } from "@ui5/webcomponents-react";

export const MovieData = () => {
  const listMovie = useSelector(() => store.getState().movieReducer.movie);
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
                  <h2 className={styles.subDescription}> {actor} </h2>
                ))}
              </div>
              <div className={styles.subtitleContent}>
                <h3 className={styles.subtitle}>Review:</h3>

                <RatingIndicator value={Number(listMovie.imdbRating)/2} />
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
