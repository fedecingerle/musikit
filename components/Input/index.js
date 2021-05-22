import styles from "./style.module.scss";

function Input(props) {
  const { placeholder } = props;
  function handleChange(e) {
    const { value } = e.target;
    props.handleSearch(value);
  }
  return (
    <div className={styles.inputContainer}>
      <i aria-hidden className={`fas fa-search ${styles.iconSearch}`} />
      <input placeholder={placeholder} onChange={handleChange} />
      <i className={`far fa-times-circle ${styles.iconClose}`} />
    </div>
  );
}

export default Input;
