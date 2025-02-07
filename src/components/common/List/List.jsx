import Card from "./Card/Card";
import styles from "./List.module.scss";

const List = ({ items }) => {
  return (
    <div className={styles.listContainer}>
      {items.map((item) => (
        <Card key={item.id} item={item} />
      ))}
    </div>
  );
};

export default List;
