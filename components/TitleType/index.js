import styles from "./style.module.scss";

function TitleType(props) {
  const { category } = props;
  return <h2>{category}</h2>;
}

export default TitleType;
