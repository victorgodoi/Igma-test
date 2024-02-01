import styles from "./limitedContent.module.scss";

const limitedContent = ({ children }) => {
  return (
    <div>
      <div id={styles.limitedContent}>{children}</div>
    </div>
  );
};
//arrumar o component

export default limitedContent;
