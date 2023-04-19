import { Input, Button } from "@ui5/webcomponents-react";
import styles from "./styles.module.scss";
import { useState } from "react";
import { api } from "../../service/api";
import { store } from "../../redux/store";
import { addMovie, clearMovie } from "../../redux/slices";
export const Search = () => {
  const [title, setTitle] = useState<any>();

  const handleSubmit = async () => {
    try {
      const response = await api.get(`/movie/${title}`);
      store.dispatch(addMovie(response.data));
    } catch (err) {
      console.log(err);
    }
  };

  function handleInputChange(event: any) {
    setTitle(event.target.value);
  }

  function handleClear() {
    setTitle("");
    store.dispatch(clearMovie());
  }

  return (
    <div className={styles.searchContainer}>
      <form className={styles.searchForm}>
        <Input
          placeholder="Digite o nome do filme"
          value={title}
          onInput={handleInputChange}
        />
        <Button onClick={handleSubmit}>Buscar</Button>
        <Button onClick={handleClear}>Limpar</Button>
      </form>
    </div>
  );
};
