import Rodape from "components/Rodape";
import styles from "./Downloads.module.scss";
import plani from "assets/img/desk-planilha.png";
import classNames from "classnames";
import qrcode from 'assets/img/qr_download.png';
import logoDesktop from 'assets/img/logoarredondadamenor.png';
export default function Downloads() {
  return (
    <section className={styles.downloads}>
      <header className={styles.cabecalho} id='planilha'>
        <div className={styles.cabecalho__flex}>
          <div className={styles.titulo__desktop}>
            <p
              className={classNames({
                [styles.titulo__paragraph]: true,
                [styles.titulo__paragraph1]: true,
              })}
            >
              Tenha um controle
            </p>
            <p
              className={classNames({
                [styles.titulo__paragraph]: true,
                [styles.titulo__paragraph2]: true,
              })}
            >
              completo com a nossa
            </p>
            <p
              className={classNames({
                [styles.titulo__paragraph]: true,
                [styles.titulo__paragraph3]: true,
              })}
            >
              planilha.
            </p>
          </div>
          <div className={styles.cabecalho__div}>
            <a href="/" className={styles.link}>
              <button className={styles.cabecalho__baixar}>Baixar</button>
            </a>
          </div>
        </div>
        <div className={styles["img__div--desktop"]}>
          <img
            src={plani}
            alt="Foto de exemplificação da planilha"
            className={styles.img__desktop}
          />
        </div>
        <img className={styles.logo__desktop} src={logoDesktop} alt="Logo do HiCash" />
      </header>
      <div className={styles.desktop}>
        <div className={styles.desktop__div}>
          <p className={styles.desktop__paragraph}>Baixe o aplicativo em seu celular Android apontando a câmera no QR CODE abaixo:</p>
          <img className={styles.desktop__qrcode} src={qrcode} alt="QR CODE" />
        </div>
      </div>
      <div className={styles.engloba}>
        <div className={styles.downloads__area}>
          <div className={styles.downloads__content}>
            <h2 className={styles["downloads__title"]}>Aplicativo</h2>
            <a href="/" className={styles["downloads__link"]}>
              <button className={styles["downloads__button"]}>Download</button>
            </a>
          </div>
          <h3 className={styles.downloads__subtitle}>Como instalá-lo?</h3>
          <p className={styles["downloads__paragraph"]}>
            O aplicativo do controlador está apenas disponível para plataforma
            Android.
          </p>
          <p className={styles["downloads__paragraph"]}>
            Ao clicar no botão de Download, um arquivo .apk será baixado
            automaticamente, então basta clicar sobre o arquivo e baixá-lo.
          </p>
        </div>
        <div className={styles.downloads__area}>
          <div className={styles.downloads__content}>
            <h2 className={styles["downloads__title"]}>Planilha</h2>
            <a href="/" className={styles["downloads__link"]}>
              <button className={styles["downloads__button"]}>Baixar</button>
            </a>
          </div>
          <h3 className={styles.downloads__subtitle}>Como usá-la?</h3>
          <p className={styles["downloads__paragraph"]}>
            Recomendamos que use o Microsoft Excel para abrir o arquivo .xlss.
          </p>
          <p className={styles["downloads__paragraph"]}>
            Na própria planilha terá a aba de Instruções para que você aprenda a
            usá-la.
          </p>
        </div>
      </div>
      <Rodape></Rodape>
    </section>
  );
}
