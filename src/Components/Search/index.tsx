import { Input, Button } from "@ui5/webcomponents-react";
import styles from "./styles.module.scss";
import { useEffect, useState } from "react";
import { api } from "../../service/api";
import { store } from "../../redux/store";
import { addMovie, clearMovie } from "../../redux/slices";
export const Search = () => {
  const [title, setTitle] = useState("");
  const [error, setError] = useState(false);

  useEffect(() => {
    setError(false);
  }, [title]);

  const handleSubmit = async () => {
    try {
      const response = await api.get(`/movie/${title}`);
      store.dispatch(addMovie(response.data));
    } catch (err) {
      console.log(err);
      setError(true);
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
          onPointerEnter={handleInputChange}
        />
        <Button onClick={handleSubmit} design={error?"Negative":"Emphasized"} >Buscar</Button>
        <Button onClick={handleClear}>Limpar</Button>
      </form>
      {error&&<span>O correu um erro na sua busca tente novamente mais tarde</span>}
    </div>
  );
};
