import { Title } from "../Components/Title";
import { MovieData } from "../Components/MovieData";
import { Search } from "../Components/Search";
import styles from './styles.module.scss'
import { Footer } from "../Components/Footer";

export const Dashboard = () => {
  return (
    <div className={styles.container}>
      <Title />
      <Search />
      <MovieData/>
      <Footer />
    </div>
  );
};
