import styles from "./style.module.scss";

function Section(props) {
  const { text, icon, handleSection } = props;

  function handleClick() {
    handleSection(text);
  }

  return (
    <div className={styles.container} onClick={handleClick}>
      <img src={icon} />
      <div className={styles.sectionText}>{text}</div>
    </div>
  );
}

export default Section;
