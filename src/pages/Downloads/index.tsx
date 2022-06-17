import styles from "./Downloads.module.scss";

export default function Downloads() {
  return (
    <section className={styles.downloads}>
      <div className={styles.downloads__area}>
        <div className={styles.downloads__app}>
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
        <div className={styles.downloads__planilha}>
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
          usa-la.
        </p>
      </div>
    </section>
  );
}
