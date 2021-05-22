import styles from "./style.module.scss";

function NoContent(props) {
  const { title, subtitle, icon } = props;
  return (
    <div className={styles.container}>
      <i aria hidden className={icon} />
      <h1>Sigue a tu primer {title}</h1>
      <h2>{subtitle}</h2>
    </div>
  );
}

export default NoContent;
