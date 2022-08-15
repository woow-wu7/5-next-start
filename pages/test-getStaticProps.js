// 静态生成
import styles from "./test-getStaticProps.module.scss";

export const getStaticProps = async () => {
  // translate
  const url =
    "https://api.66mz8.com/api/translation.php?info=I come from China";

  const res = await fetch(url);
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
};

const TestGetStaticProps = ({ data }) => {
  return (
    <div className={styles.wrap}>
      <div>{data.info}</div>
    </div>
  );
};

export default TestGetStaticProps;
