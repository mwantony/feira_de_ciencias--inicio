import { Link } from "react-router-dom";
import styles from "./Inicio.module.scss";
import logoDesktop from 'assets/img/logoarredondadamenor.png'
import videoMobile from "assets/vid/vidmobile.mp4";
import videoDesktop from "assets/vid/viddesktop.mp4";
import classNames from "classnames";
import Rodape from "components/Rodape";
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
          <p className={classNames({
            [styles.titulo__paragraph]: true,
            [styles.titulo__paragraph1]: true,
          })}>
            Controlar o seu dinheiro nunca foi tão
          </p>
          <p className={classNames({
            [styles.titulo__paragraph]: true,
            [styles.titulo__paragraph2]: true,
          })}>
            fácil, utilize o HiCash, e tenha domínio
          </p>
          <p className={classNames({
            [styles.titulo__paragraph]: true,
            [styles.titulo__paragraph3]: true,
          })}>
            sobre seu patrimônio.
          </p>
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
            <Link to={'/downloads/'}>
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
        <Rodape></Rodape>
      </div>
    </main>
  );
}
