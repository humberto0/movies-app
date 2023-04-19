import styles from "./styles.module.scss";

const linksFooter=[ "Central de ajuda", "Carreiras", "Imprensa", "Privacidade", "Termos", "Localizações", "Contas", "Hashtags", "Idioma" ]

export const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        {
          linksFooter.map((link, index) => {
            return <a key={index} href="#" className={styles.links}>{link}</a>
          })
        }
      </div>
    </div>
  );
};
