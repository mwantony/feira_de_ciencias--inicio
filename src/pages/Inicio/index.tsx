import { Link } from "react-router-dom";
import styles from "./Inicio.module.scss";
import logorodape from "assets/img/logoarredondadamenor.png";
import logoDesktop from 'assets/img/logoarredondadamenor.png'
import videoMobile from "assets/vid/vidmobile.mp4";
import videoDesktop from "assets/vid/viddesktop.mp4";
export default function Inicio() {
  return (
    <main>
      <header className={styles.cabecalho}>
        <div className={styles.cabecalho__div}>
          <h2 className={styles["cabecalho__titulo--mobile"]}>
            Baixe o aplicativo para celular
          </h2>
          <div className={styles.botaoaplicativo__div}>
            <Link to={"/downloads"}>
              <button className={styles.baixar__aplicativo}>Download</button>
            </Link>
          </div>
          <div className={styles["video__div--mobile"]}>
            <video className={styles.video__mobile} loop muted autoPlay>
              <source src={videoMobile} />
            </video>
          </div>
          <div className={styles['video__div--desktop']}>
          <video className={styles.video__desktop} loop muted autoPlay>
            <source src={videoDesktop} />
          </video>
          </div>
        </div>
        <img className={styles.logo__desktop} src={logoDesktop} alt="Logo do HiCash" />
        <div className={styles.titulo__desktop}>
          <p className={styles.titulo__paragraph}>Controlar o seu dinheiro nunca foi tão fácil, utilize o HiCash, e tenha domínio sobre seu patrimônio.</p>
        </div>
      </header>
      <div>
        <section className={styles.planilha}>
          <div className={styles.planilha__divtitulo}>
            <h3 className={styles.planilha__titulo}>
              Utitilize nossa planilha para um maior controle!
            </h3>
          </div>
          <div className={styles.planilha__divbotao}>
            <Link to={"/downloads"}>
              <button className={styles.baixar__planilha}>Baixar</button>
            </Link>
          </div>
        </section>
        <section className={styles.porqueusar}>
          <h3 className={styles.porqueusar__titulo}>
            Por que usar nossas ferramentas?
          </h3>
          <p className={styles.porqueusar__paragraph}>
            Com o nosso aplicativo, você consegue ter o controlador sempre em
            mãos.
          </p>
          <p className={styles.porqueusar__paragraph}>
            Se caso queira ter um controle maior sobre o seu dinheiro, utilize
            nossa planilha.
          </p>
        </section>
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
      </div>
    </main>
  );
}
