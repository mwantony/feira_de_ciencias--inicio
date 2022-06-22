import styles from './Rodape.module.scss'
import logorodape from "assets/img/logoarredondadamenor.png";
export default function Rodape() {
  return(
    <footer className={styles.rodape}>
    <figure className={styles.rodape__content}>
      <img
        className={styles.rodape__imagem}
        src={logorodape}
        alt="Logo HiCash"
      />
      <p className={styles.rodape__paragraph}>
        Criado como projeto da Feira de Ciências 2022
      </p>
    </figure>
  </footer>
  )
}